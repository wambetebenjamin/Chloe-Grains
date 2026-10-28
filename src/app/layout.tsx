import type { Metadata, Viewport } from "next";

/* Vendor CSS first, in the exact order of the template's <head>, then the
   global stylesheet with the preserved template main.css and extensions. */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";
import "glightbox/dist/css/glightbox.min.css";
import "./globals.css";

import CookieConsent from "@/components/CookieConsent";
import FloatingStack from "@/components/FloatingStack";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { I18nProvider } from "@/components/I18nProvider";
import Preloader from "@/components/Preloader";
import { SavedProvider } from "@/components/SavedProvider";
import ScrollTop from "@/components/ScrollTop";
import TemplateMotion from "@/components/TemplateMotion";
import { site } from "@/lib/data/site";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "African grains",
    "fonio",
    "teff",
    "moringa",
    "baobab",
    "sorghum",
    "millet",
    "hibiscus",
    "zobo",
    "amaranth",
    "bambara groundnut",
    "indigenous crops",
    "African recipes",
    "sourcing stories",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.oneLiner,
    url: site.url,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name}: ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.oneLiner,
    images: ["/images/og.png"],
  },
  icons: {
    icon: [{ url: "/images/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "512x512", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#116530",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        {/* Template fonts, preserved exactly: Open Sans + Marcellus */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Marcellus:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider initialLocale={locale}>
          <SavedProvider>
            <a className="cg-skip-link" href="#main">
              Skip to main content
            </a>
            <Header />
            <main id="main" className="main">
              {children}
            </main>
            <Footer />
            <ScrollTop />
            <FloatingStack />
            <CookieConsent />
            <Preloader />
            <TemplateMotion />
          </SavedProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
