// import axios from "axios";

// const axiosSecure = axios.create({
//   baseURL: import.meta.env.VITE_API,
// });

// const useAxiosSecure = () => {
//   return axiosSecure;
// };

// export default useAxiosSecure;


import useAuth from '@/Provider/useAuth'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import useAuth from './useAuth'

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true,
})
const useAxiosSecure = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res
      },
      async error => {
        console.log('error tracked in the interceptor', error.response)
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout")
          await logOut()
          navigate('/login')
        }
        return Promise.reject(error)
      }
    )
  }, [logOut, navigate])

  return axiosSecure
}

export default useAxiosSecure