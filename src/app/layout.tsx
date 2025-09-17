import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Import Google Font Inter for better typography
const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'ChatGPT Assistant - AI Trợ Lý Thông Minh',
    template: '%s | ChatGPT Assistant'
  },
  description: 'Trợ lý AI thông minh được hỗ trợ bởi OpenAI GPT-4. Giải đáp thắc mắc, hỗ trợ học tập và sáng tạo nội dung.',
  keywords: ['AI', 'ChatGPT', 'Assistant', 'Trợ lý AI', 'OpenAI', 'GPT-4'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://your-domain.com',
    siteName: 'ChatGPT Assistant',
    title: 'ChatGPT Assistant - AI Trợ Lý Thông Minh',
    description: 'Trợ lý AI thông minh được hỗ trợ bởi OpenAI GPT-4',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChatGPT Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChatGPT Assistant - AI Trợ Lý Thông Minh',
    description: 'Trợ lý AI thông minh được hỗ trợ bởi OpenAI GPT-4',
    images: ['/twitter-image.jpg'],
    creator: '@yourusername',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="//api.openai.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Main content */}
        <main id="main-content">
          {children}
        </main>
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Analytics or other scripts can go here */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics example */}
            {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID" />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_TRACKING_ID');
              `}
            </Script> */}
          </>
        )}
      </body>
    </html>
  )
}