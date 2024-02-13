export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <div style={{margin: '0 auto'}}>
      <h2 style={{margin: '0 auto'}}>Auth page</h2>
      {children}
    </div>
    </>
  )
}