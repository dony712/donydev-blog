"use client";

import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Eye } from "lucide-react";

interface Props {
  pageId: string;
}

export default function PostViewsCounter({
  pageId,
}: Props) {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    if (!pageId) return;
    
    const updateViews = async () => {
      try {
        const storageKey = `viewed_${pageId}`;

        const alreadyViewed =
          sessionStorage.getItem(storageKey);

        const docRef = doc(
          db,
          "pageViews",
          pageId
        );

        const snap = await getDoc(docRef);

        if (!snap.exists()) {
          await setDoc(docRef, {
            views: 1,
          });

          setViews(1);

          sessionStorage.setItem(
            storageKey,
            "true"
          );

          return;
        }

        const currentViews =
          snap.data().views || 0;

        if (!alreadyViewed) {
          await updateDoc(docRef, {
            views: increment(1),
          });

          setViews(currentViews + 1);

          sessionStorage.setItem(
            storageKey,
            "true"
          );
        } else {
          setViews(currentViews);
        }
      } catch (error) {
        console.error(error);
      }
    };

    updateViews();
  }, [pageId]);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100 opacity-60 hover:opacity-100 transition-opacity duration-300">
      <Eye size={14} className="text-slate-400" />

      <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
        {views.toLocaleString()} Views
      </span>
    </div>
  );
}