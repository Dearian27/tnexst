export const metadata = {
  title: 'Next.js  Returns',
  description: 'Generated by Den',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}