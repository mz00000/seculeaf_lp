import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Seculeaf 運用診断 - 中小企業向けセキュリティ診断サービス',
  description: '中小企業向けのセキュリティ運用診断サービス。高額な診断費用に悩む企業のための、手頃な価格で説明責任を果たす。',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
