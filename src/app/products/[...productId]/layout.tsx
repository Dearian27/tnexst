import Head from 'next/head';

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
    <>
      {children}
      <p>Featured product</p>
    </>
  )
}
