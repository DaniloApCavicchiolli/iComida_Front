import React from 'react'
import Navigation from './src/routes/Navigation'
import ThemeProvider from './src/themes/ThemeProvider'

export default function(){
  return(
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
}