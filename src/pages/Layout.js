import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <nav>
        <>
            <Link>Account</Link>
        </>
        <>
            <Link>Apparel</Link>
        </>
    </nav>
  )
}

export default Layout