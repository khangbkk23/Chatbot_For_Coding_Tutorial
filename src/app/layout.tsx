import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ChatGPT Assistant - AI Trợ Lý Thông Minh",
    template: "%s | ChatGPT Assistant",
  },
  description:
    "Trợ lý AI thông minh được hỗ trợ bởi OpenAI GPT-4. Giải đáp thắc mắc, hỗ trợ học tập và sáng tạo nội dung.",
  keywords: ["AI", "ChatGPT", "Assistant", "Trợ lý AI", "OpenAI", "GPT-4"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Company",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://your-domain.com",
    siteName: "ChatGPT Assistant",
    title: "ChatGPT Assistant - AI Trợ Lý Thông Minh",
    description: "Trợ lý AI thông minh được hỗ trợ bởi OpenAI GPT-4",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ChatGPT Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Assistant - AI Trợ Lý Thông Minh",
    description: "Trợ lý AI thông minh được hỗ trợ bởi OpenAI GPT-4",
    images: ["/twitter-image.jpg"],
    creator: "@yourusername",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning className={inter.variable}>
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased`}
      >
        <main id="main-content">{children}</main>

        {/* Accessibility: Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}