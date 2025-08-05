export default function DashboardLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <>
      <h1 className="font-bold">SIDEBAR DO LAYOUT</h1>
      {children}
    </>
  )
}