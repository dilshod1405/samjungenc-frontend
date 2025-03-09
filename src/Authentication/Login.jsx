import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { login } from './AuthService';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(false)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { access, role, refresh } = await login(username, password);

      // Store token securely (consider httpOnly cookies in production)
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      localStorage.setItem('role', role);
      
      // Redirect based on role
      const roleRoutes = {
        admin: '/admin',
        manager: '/manager',
        service_manager: '/service-manager',
        teamlead: '/teamlead',
        worker: '/worker',
      };

      navigate(roleRoutes[role] || '/');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-lg p-5 md:w-1/3 mx-auto mt-20 animate__animated animate__fadeIn'>
      <img src="logo_en.svg" alt="" className='mx-auto mb-5 w-1/2 md:w-1/3'/>
      <h1 className='text-2xl font-bold text-gray-500 text-center'>귀하의 계정에 로그인하세요</h1>
      <form className='mt-5' onSubmit={handleLogin}>
        <div className='mb-5 flex justify-center'>
          <TextField id="outlined-basic" label="로그인" variant="outlined" className='w-1/2' onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='mb-5 flex justify-center'>
          <TextField id="outlined-password-input" label="비밀번호" variant="outlined" type="password" autoComplete="current-password" className='w-1/2' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {error && <div className='mb-5 text-red-500 text-center'>{error}</div>}
        <div className='mb-5 flex justify-center'>
          <Button variant="contained" className='w-1/2 font-bold' style={{fontSize: '1.2rem', backgroundColor: '#001a6ecc'}} type='submit'>
            {loading ? <CircularProgress style={{color: 'white'}}/> : '로그인'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login