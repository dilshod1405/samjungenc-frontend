import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';

const UsersInfoTable = () => {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("access");

            if (!token) {
                setError("토큰을 찾을 수 없습니다! 로그인해 주세요.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/users/`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUsers(response.data); // Store all users in state
            } catch (error) {
                setError(error.message || "데이터를 불러오는 중 오류 발생!");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <CircularProgress style={{ color: '#001a6ecc', margin: 'auto', display: 'block' }} />;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="flex flex-col mt-8 md:w-6/7 mx-auto w-4/5">
            <h1 className="text-2xl font-bold text-[#001a6ecc]">직원의 정보</h1>
            <TableContainer component={Paper} className="mt-5">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><b>직원의 사용자 이름</b></TableCell>
                            <TableCell align="center"><b>직원의 성명</b></TableCell>
                            <TableCell align="center"><b>직원의 역할</b></TableCell>
                            <TableCell align="center"><b>직원의 ID</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell align="center">{user.username}</TableCell>
                                <TableCell align="center">{user.full_name}</TableCell>
                                <TableCell align="center">{user.role}</TableCell>
                                <TableCell align="center">{user.id}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default UsersInfoTable;
