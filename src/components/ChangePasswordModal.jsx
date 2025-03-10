import React, { useState } from 'react';
import { Backdrop, Box, Modal, Fade, Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function ChangePasswordModal({ userId, handlePasswordChange }) {
    const [open, setOpen] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        handlePasswordChange(userId, newPassword, setMessage, setLoading);
    };

    return (
        <div>
            <Button onClick={() => setOpen(true)} style={{ backgroundColor: '#001a6ecc' }} color="primary" size="small" variant="contained">
                <EditIcon fontSize='small' /> 편집
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{ backdrop: { timeout: 500 } }}
            >
                <Fade in={open}>
                    <Box sx={style} className="flex flex-col">
                        <h2 id="transition-modal-title">비밀번호 변경</h2>
                        <TextField
                            required
                            style={{ marginBottom: 20, marginTop: 20 }}
                            label="새 비밀번호"
                            type="password"
                            variant="outlined"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {message && <p className="text-red-500 text-center">{message}</p>}
                        <Button onClick={handleSubmit} disabled={loading} variant="contained" style={{ backgroundColor: '#001a6ecc' }}>
                            {loading ? "변경 중..." : "변경"}
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
