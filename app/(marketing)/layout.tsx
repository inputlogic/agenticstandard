import { ReactNode } from 'react'
import { SkipLink } from 'components/skip-link'
import { SiteNav } from 'components/site-nav'
import { SiteFooter } from 'components/site-footer'
import { ScrollProgress } from 'components/scroll-progress'
import { NetworkBg } from 'components/network-bg'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <NetworkBg />
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  )
}
