import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Users = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='flex flex-row'>
        <Sidebar open={open}/>
        <Header title="사용자" open={open} setOpen={setOpen} />
    </div>
  )
}

export default Users