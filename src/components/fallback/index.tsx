import React from 'react'
import Loading from '@/components/Loading'

const Fallback:React.FC = () => {
  return (
    <Loading loading>
      <div style={{ width: '100%', height: '400px' }} />
    </Loading>
  )
}

export default Fallback