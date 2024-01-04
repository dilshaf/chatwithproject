import axios from "axios";

export const getUserById = async () => {
 
  
  try {
    let response = await axios.get(
      `http://localhost:7000/api/admin/user/${localStorage.getItem("id")}`
    );
    console.log(response.data,'loiuyytfgfgfg');
    return response.data;
  } catch (error) {
    return error;
  }
};


