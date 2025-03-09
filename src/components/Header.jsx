import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';


const Header = (props) => {
  return (
    <div className='flex flex-col md:w-full p-4 md:p-8 bg-white sticky top-0 z-10 w-4/5'>
        <header className='flex flex-row justify-between items-center shadow-md md:p-4 mb-4 border-b border-gray-300'>
            <DehazeIcon style={{color: '#001a6ecc', cursor: 'pointer'}} onClick = {() => {props.setOpen(!props.open)}}/>
            <h1 className='md:text-2xl font-bold text-[#001a6ecc]'>{props.title}</h1>
        </header>
    </div>
  )
}

export default Header