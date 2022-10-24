import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../common/nav'

export const render = () => (
  <div className="showcase">
    <Nav navItems={[
      { to: 'package-name', text: 'PackageName' },
    ]}
    />
    <Outlet />
  </div>
)

export default render
