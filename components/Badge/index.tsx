interface BadgeProps {
  children: string | React.ReactNode
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="badge bg-secondary">{children}</span>
  )
}