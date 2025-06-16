import React, { useState } from "react";
import useConversation from "../../components/zustand/useConversation";
import useGetAllUsers from "../../context/getAllUser";

const search = () => {

  const {search,setSearch} = useState("");
  const { setSelectedConversation } =useConversation();
  const {getAllUser} = useGetAllUsers();

  return (
    <div className="flex-col flex items-center  justify-center h-16 shadow-md mt-6">
      <div class="flex items-center gap-3 ">
       <form action=""></form>
      </div>
    </div>
  );
};

export default search;
