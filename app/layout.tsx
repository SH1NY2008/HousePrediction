import type { Metadata } from 'next'
import './globals.css'
import { SparklesCore } from '@/components/sparkles-core'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'House Price Prediction',
  description: 'AI-powered house price prediction application',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="fixed inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              particleColor="#3772FF"
              particleDensity={80}
              speed={0.8}
              className="h-full w-full"
            />
          </div>
          <div className="relative z-10 animate-in fade-in duration-500">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
