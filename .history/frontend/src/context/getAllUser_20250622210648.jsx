import { useState, useEffect } from "react";
import API from "../api";

const useGetAllUsers = () => {
  const [getAllUser, setGetAllUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/api/users/getallusers");
        setGetAllUser(response.data);
      } catch (error) {
        console.error("🚨 Error fetching users:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { getAllUser, loading };
};

export default useGetAllUsers;
