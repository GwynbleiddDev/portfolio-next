

export default function Heading({children, color, mb, aos}: {children: string, color: string, mb: string, aos?: string}) {
  return (
    <h2 
      className={`text-4xl font-bold ${color} ${mb}`}
      data-aos={`${aos}`}
    >{children}</h2>
  )
}