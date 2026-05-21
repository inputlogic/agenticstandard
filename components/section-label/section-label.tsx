import s from './section-label.module.scss'

type SectionLabelProps = {
  children: string
  accent?: boolean
}

export function SectionLabel({ children, accent = false }: SectionLabelProps) {
  return (
    <div className={`${s.label} ${accent ? s.accent : ''}`}>{children}</div>
  )
}
