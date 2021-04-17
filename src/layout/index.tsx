import React from 'react'
import Sidebar from './Sidebar'

const Layout:React.FC = (props) => {
  return (
    <div className='layout'>
      <Sidebar />
      {
        props.children
      }
    </div>
  )
}

export default Layout
