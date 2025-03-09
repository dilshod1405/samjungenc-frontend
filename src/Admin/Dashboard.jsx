import React from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import UsersInfoTable from '../components/UsersInfoTable';


const Dashboard = () => {
    const [open, setOpen] = React.useState(false);

  
  return (
    <div className='flex flex-row w-full'>
        <Sidebar open={open}/>
        <main className='md:w-full h-screen z-0 w-4/5'>
          <Header open={open} setOpen={setOpen} title="계기반"/>
          <InfoCard />
          <UsersInfoTable data-aos = "fade-up" data-aos-duration="2000"/>
        </main>
    </div>
  )
}

export default Dashboard