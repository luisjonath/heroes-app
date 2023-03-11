import React from 'react'
import { AuthProvider } from './auth'
import AppRouter from './router/AppRouter'

const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter></AppRouter>
    </AuthProvider>
  )
}

export default HeroesApp