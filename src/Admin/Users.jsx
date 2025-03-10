import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import UsersManagaTable from '../components/UsersManageTable';

const Users = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='flex flex-row'>
        <Sidebar open={open}/>
        <main className='md:w-full h-screen z-0 w-4/5'>
          <Header title="사용자" open={open} setOpen={setOpen} />
          <UsersManagaTable />
        </main>
    </div>
  )
}

export default Users