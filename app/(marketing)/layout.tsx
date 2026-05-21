import { ReactNode } from 'react'
import { SkipLink } from 'components/skip-link'
import { SiteNav } from 'components/site-nav'
import { SiteFooter } from 'components/site-footer'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  )
}
