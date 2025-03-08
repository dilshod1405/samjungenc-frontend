import axios from "axios";

export const login = async (username, password) => {
  try {
    // 1️⃣ Login request (does NOT return token, only user info)
    const loginResponse = await axios.post(`${process.env.REACT_APP_API_URL}/user/login/`, { username, password });

    const { role } = loginResponse.data; // Extract user role

    // 2️⃣ Fetch token from `/token/` endpoint
    const tokenResponse = await axios.post(`${process.env.REACT_APP_API_URL}/token/`, { username, password });
    

    return { access: tokenResponse.data.access, role, refresh: tokenResponse.data.refresh };
  } catch (error) {
    throw error.response?.data?.message || "로그인 또는 비밀번호가 올바르지 않습니다 !";
  }
};
