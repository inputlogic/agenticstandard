import s from './skip-link.module.scss'

export function SkipLink() {
  return (
    <a href="#main" className={s.link}>
      Skip to content
    </a>
  )
}
