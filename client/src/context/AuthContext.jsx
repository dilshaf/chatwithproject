import React, { useState,  createContext } from 'react';
// import {getUser} from "../services/apiService"


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

  const [refresh,setRefresh] = useState(true)
  const [itSelfUser,setItSelfUser] = useState({})
  const [selectedPost, setSelectedPost] = useState(null)
  

    const refreshUseEffectMethod = ()=>{
      setRefresh(!refresh)
    }

    const handlePostClick = (post) => {
      setSelectedPost(post);
    };
    const GetUser = (user) => {
      // console.log(user,'user')
      setItSelfUser(user);
    };
    

    // const getUserById = ()=>{
    //   console.log('daaa');
    //   getUser(id)
    // }

    // const getAdminSetState = (e)=> setAdminData(e) 

    const obj = {
      // isLoggin,
      // getAdminSetState,
      // getUserById,
      refreshUseEffectMethod,
      refresh,
      GetUser,
      itSelfUser,
      adminData:true,
    }


  return (
    <AuthContext.Provider value={{obj,selectedPost,handlePostClick}}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;


