import type { Metadata } from 'next'
import React from 'react'
//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css'
//core
import 'primereact/resources/primereact.min.css'

import 'primeicons/primeicons.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <main className=''>{children}</main>
    </React.Fragment>
  )
}
