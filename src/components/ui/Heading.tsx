

export default function Heading({children, color, mb, }: {children: string, color: string, mb: string}) {
  return (
    <h2 
      className={`text-4xl font-bold ${color} ${mb}`}
    >{children}</h2>
  )
}