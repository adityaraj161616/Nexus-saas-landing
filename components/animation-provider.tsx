'use client'

import { ReactNode } from 'react'

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  return <>{children}</>
}
