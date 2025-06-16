import React from "react";



const getAllUser = async () => {
    const [getAllUser, setGetAllUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const token = Cookies.get("jwt");
                const response = await axios.get("http://localhost:3000/api/users", {
                    headers: {
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

}