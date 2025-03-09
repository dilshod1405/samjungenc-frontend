import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Orders = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='flex flex-row'>
        <Sidebar open={open}/>
        <Header title="주문" open={open} setOpen={setOpen} />
    </div>
  )
}

export default Orders