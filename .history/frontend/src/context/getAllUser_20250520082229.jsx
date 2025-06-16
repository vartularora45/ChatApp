import React from "react";



const getAllUser = async () => {
    const [getAllUser, setGetAllUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllUsers  = async () => {
        try {
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

}