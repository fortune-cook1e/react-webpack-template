import React from 'react'
import RouteComponent from '@/router'
import Layout from '@/layout'

const App:React.FC = () => {
  return (
    <Layout>
      <RouteComponent auth />
    </Layout>
  )
}

export default App