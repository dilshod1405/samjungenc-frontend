import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Counter from './Counter';


const InfoCard = () => {
    const [orderCount, setOrderCount] = React.useState(0)
    const [machineCount, setMachineCount] = React.useState(0)
    const [docCount, setDocCount] = React.useState(0)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)


    useEffect(() => {
        const fetchData = async () => {
          const token = localStorage.getItem("access"); // Get the token from localStorage
    
          if (!token) {
            setError("토큰을 찾을 수 없습니다! 로그인해 주세요.");
            setLoading(false);
            return;
          }

          try {
            const order = await axios.get(`${process.env.REACT_APP_API_URL}/order/orders/`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const machine = await axios.get(`${process.env.REACT_APP_API_URL}/chiller/chiller/`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const doc = await axios.get(`${process.env.REACT_APP_API_URL}/document/apps/`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });   
            
            const orderCount = order.data.filter((item) => item.is_canceled === false && item.is_done === false).length
            setOrderCount(orderCount)
            setMachineCount(machine.data.length)
            setDocCount(doc.data.length)
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [orderCount, docCount, machineCount]);



    const data = [
        {
            title: '주문',
            description: '배달을 기다리는 주문 수',
            color: 'bg-orange-100',
            count: orderCount
        },
        {
            title: '기계',
            description: '출하된 냉각기 총 수',
            color: 'bg-pink-100',
            count: machineCount
        },
        {
            title: '문서',
            description: '모든 직원 신청 건수',
            color: 'bg-blue-100',
            count: docCount
        },
    ]

  return (
    <div className='w-full flex flex-wrap justify-center gap-10 flex-col md:flex-row'>
        {data.map((item, index) => (
            <div key={index} className={`p-4 ${item.color} rounded-lg shadow-md m-4 md:w-1/4 animate__animated animate__zoomIn w-2/3`}>
                <h1 className='text-xl font-semibold'>* {item.title}</h1>
                <p className='text-sm text-gray-600 mt-2'>{item.description}</p>
                {error && <div className='text-red-500 text-center'>{error}</div>}
                {loading ? <div className='flex justify-center mt-5'><CircularProgress style={{color: 'white'}}/></div> : <p className='text-6xl text-center font-bold text-blue-950 mt-4'><Counter end={item.count} duration={2000}/></p>}
            </div>
        ))}
    </div>
  )
}

export default InfoCard