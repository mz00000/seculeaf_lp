import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'SecureCheck - 定額脆弱性診断サービス',
  description: '中小企業向けの定額制脆弱性診断サービス。高額な診断費用に悩む企業のための、手頃な価格で信頼を証明。',
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
