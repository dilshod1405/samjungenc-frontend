import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const DeleteUserButton = ({user}) => {
  return (
    <div>
        <Button 
            variant="contained" 
            color="error"
            size='small'
            onClick={() => {
                const token = localStorage.getItem("access");
                axios.delete(`${process.env.REACT_APP_API_URL}/admin/users/${user.id}/`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            }}
            startIcon={<DeleteIcon />}
        >
            삭제
        </Button>
    </div>
  )
}

export default DeleteUserButton