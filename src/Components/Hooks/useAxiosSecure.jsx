import { AuthContext } from "@/app/Authentication/AuthProvider/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useRouter();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate.push("/Authentication/login");
          localStorage.removeItem("access-token");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
