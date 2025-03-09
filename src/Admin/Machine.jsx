import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Machine = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='flex flex-row'>
        <Sidebar open={open}/>
        <Header title="기계" open={open} setOpen={setOpen} />
    </div>
  )
}

export default Machine