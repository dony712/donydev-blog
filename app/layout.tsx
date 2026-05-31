import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.donydev-blog.com"),

  title: {
    default: "DonyDev Blog - Teknologi, AI, Programming & Produktivitas",
    template: "%s | DonyDev Blog",
  },

  description:
    "Blog pribadi Dony Fahrudy tentang teknologi, AI productivity, software development, React Native, Next.js, ilmu komputer, dan dunia digital.",

  keywords: [
    "dony dev",
    "donydev blog",
    "blog teknologi indonesia",
    "AI productivity",
    "alat AI terbaik",
    "Next.js Indonesia",
    "React Native Indonesia",
    "software development",
    "pemrograman",
    "artificial intelligence",
    "teknologi",
    "ilmu komputer",
    "tutorial coding indonesia",
  ],

  authors: [
    {
      name: "Dony Fahrudy",
      url: "https://www.donydev-blog.com",
    },
  ],

  creator: "Dony Fahrudy",
  publisher: "DonyDev Blog",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.donydev-blog.com",
    siteName: "DonyDev Blog",

    title: "DonyDev Blog - Teknologi, AI, Programming & Produktivitas",

    description:
      "Belajar teknologi, AI, programming, software development, dan produktivitas dengan bahasa sederhana.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DonyDev Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DonyDev Blog - Teknologi, AI, Programming & Produktivitas",

    description:
      "Blog teknologi Indonesia tentang AI, programming, React Native, Next.js dan software development.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dony Fahrudy",
    url: "https://www.donydev-blog.com",
    image: "https://www.donydev-blog.com/og-image.png",
    sameAs: [],
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "DonyDev Blog",
    },
  };

  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Adsense */}
        <meta name="google-adsense-account" content="ca-pub-6211849658783097" />
        {/* SEO google */}
        <meta name="google-site-verification" content="PjxA7l-vvYitXIFcJ7C49vtwbxvWiqwaRXINC6ddqZg" />

        {/* adsens hanya support -> <script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6211849658783097"
          crossOrigin="anonymous"
        />

        {/* JSON-LD SEO */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>

      <body
        className="
          bg-white text-slate-900
          dark:bg-slate-950 dark:text-slate-100
          transition-colors duration-300
        "
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
