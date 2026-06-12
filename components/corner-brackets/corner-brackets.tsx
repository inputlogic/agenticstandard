type CornerBracketsProps = {
  size?: number
  inset?: number
  className?: string
}

export function CornerBrackets({ size = 40, inset = 14, className = '' }: CornerBracketsProps) {
  const style = {
    width: size,
    height: size,
    position: 'absolute' as const,
    color: 'var(--accent)',
    pointerEvents: 'none' as const,
  }

  return (
    <span aria-hidden="true" className={className}>
      <svg viewBox="0 0 60 60" fill="none" style={{ ...style, top: inset, left: inset }}>
        <path d="M 4 34 L 4 4 L 34 4" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      </svg>
      <svg viewBox="0 0 60 60" fill="none" style={{ ...style, bottom: inset, right: inset }}>
        <path d="M 56 26 L 56 56 L 26 56" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      </svg>
    </span>
  )
}
