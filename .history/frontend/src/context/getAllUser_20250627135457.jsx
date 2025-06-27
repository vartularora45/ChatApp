import { useState, useEffect } from "react";
import API from "../api";

const useGetAllUsers = () => {
  const [getAllUser, setGetAllUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const response = await API.get("/api/users/getallusers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
