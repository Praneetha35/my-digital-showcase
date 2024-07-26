import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: "Praneetha",
    template: "%s | Praneetha",
  },
  openGraph: {
    title: "Praneetha",
    siteName: "Praneetha's Portfolio",
    images: [
      {
        url: "https://i.pinimg.com/474x/70/8d/f8/708df807416f14743bb08ffee72cd544.jpg",
        width: 421,
        height: 421,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/female-dev.jpeg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        {/* <Analytics /> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W5YHY3JSFV"></script>
        <Script id = 'google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W5YHY3JSFV');
          `
        }
      </Script>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
