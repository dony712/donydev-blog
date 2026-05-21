import Link from 'next/link';

interface CategoryProps {
  name: string;
  slug: string;
  icon: string;
}

export default function CategoryCard({ name, slug, icon }: CategoryProps) {
  return (
    <Link 
      href={`/ai/${slug}`}
      className="group p-6 bg-white border border-slate-200 rounded-3xl hover:border-blue-400 hover:shadow-xl hover:shadow-blue-50 transition-all"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-sm text-slate-500">Kumpulan alat AI terbaik untuk {name}.</p>
    </Link>
  );
}