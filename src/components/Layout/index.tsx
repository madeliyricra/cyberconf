import React from 'react'
import Header from '../Header'

interface IProps {
  children: JSX.Element,
}

const Layout = ({children} : IProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout