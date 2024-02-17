"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

type RouteButtonProps = {
  route: string
  children: React.ReactNode
}

const RouteButton: React.FC<RouteButtonProps> = ({route, children}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(route)}
    >
      {children}
    </button>
  )
}

export default RouteButton;