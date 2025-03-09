import React from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
    const [open, setOpen] = React.useState(false);

  
  return (
    <div className='flex flex-row'>
        <Sidebar open={open}/>
        <Header open={open} setOpen={setOpen} title="계기반"/>
    </div>
  )
}

export default Dashboard