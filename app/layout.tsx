import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { VercelAnalytics } from './lib/analytics/analytics'
import { VercelSpeedInsights } from './lib/analytics/speed-insights'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'justin bather',
  description:
    'Senior Software Engineer at Napier AI, based in Belast, UK',
  keywords: [
    'software engineer',
    'software developer',
    'developer',
    'Belfast',
    'full stack',
    'go',
    'kafka',
    'java',
    'AWS',
    'aws',
  ],
  authors: [{ name: 'Justin Bather' }],
  creator: 'Justin Bather',
  openGraph: {
    title: 'Justin Bather - Senior Software Engineer',
    description: 'Senior Software engineer based in Belfast, United Kingdom',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={inter.variable}
      // Suppress hydration warning being emitted by next-themes.
      // This property only applies one level deep, so it won't block hydration warnings on other elements.
      suppressHydrationWarning
    >
      <body className={'antialiased'}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
        <VercelAnalytics />
        <VercelSpeedInsights />
      </body>
    </html>
  )
}
