import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Service = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='flex flex-row'>
        <Sidebar open={open}/>
        <Header title="서비스" open={open} setOpen={setOpen} />
    </div>
  )
}

export default Service