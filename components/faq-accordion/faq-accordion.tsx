'use client'

import { ReactNode, useState, useId } from 'react'
import s from './faq-accordion.module.scss'

type FaqAccordionProps = {
  question: ReactNode
  answer: ReactNode
}

export function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <div className={s.item}>
      <button
        className={s.trigger}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(v => !v)}
      >
        <h4 className={s.question}>{question}</h4>
        <span aria-hidden="true" className={`${s.icon} ${open ? s.open : ''}`}>+</span>
      </button>
      <div id={id} className={`${s.body} ${open ? s.expanded : ''}`}>
        <div className={s.inner}>
          <div className={s.answer}>{answer}</div>
        </div>
      </div>
    </div>
  )
}
