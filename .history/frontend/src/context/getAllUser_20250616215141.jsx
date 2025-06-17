import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import API from "../api"; // Assuming you have an API.js file for base URL
const useGetAllUsers = () => {
  const [getAllUser, setGetAllUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("jwt");
        const response = await API.get("/api/users/getallusers", {
          headers: {
            credentials: "include",
            Authorization: `Bearer ${token}`,
          },
        });
        setGetAllUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { getAllUser, loading };
};

export default useGetAllUsers;
