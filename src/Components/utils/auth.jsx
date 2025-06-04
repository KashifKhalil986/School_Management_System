import { jwtDecode } from 'jwt-decode';

export const getToken = () => {
  return localStorage.getItem("token"); 
};

export const decodeToken = () => {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

export const isAuthenticated = () => {
  return !!getToken();
};
