import React from "react";



const getAllUser = async () => {
    const [getAllUser, setGetAllUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllUsers  = async () => {
        try {
            if (loading) {
                const response = await axios.get("http://localhost:3000/api/users/getAllUser");
                setGetAllUser(response.data);
                setLoading(false);
            }
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

}