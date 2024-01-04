import React, { useContext, useState } from "react";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { getUser } from "./Userrequest";
import { AuthContext } from "../../context/AuthContext";
import { io } from "socket.io-client";
import { getUserById } from "../../services/apiService";


const Conversation = ({ data, currentUserId, online }) => {
 
  const [userData, setUserData] = useState("")
  const [fetchUserData, setFetchserData] = useState({})
  const {obj} = useContext(AuthContext)
//   const dispatch = useDispatch()
const user=localStorage.getItem("id")

  useEffect(()=> {
    // const fetchData = async () => {
  
     
        // try {
       
          // refreshUseEffectMethod()
        // } catch (error) {
          // console.log(error.message);
        // }

      // setData(response);
      // obj.GetUser(response)
    // };
    // socket.current = io("http://localhost:8800");

    const userId = data.members.find((id)=>id!==currentUserId)
    console.log(userId,'checking userId conversation');
   
    const getUserData = async ()=> {
      try
      {
          const {data} =await getUser(userId)
          setUserData(data)
          const response = await getUserById();
          console.log(setFetchserData(response),'response')

      }
      catch(error)
      {
        console.log(error.message)
      }
    }

    getUserData();
  }, [])

  // const handleChatWithFollower = (id)=>{
  //   console.log(id,'iddd');
  //   // socket.current.emit("new-user-add", {you:user,reciver:id});
  // }

  return (
    <>

    <h2>friends</h2>
   
    {/* {
      fetchUserData.followers.map(({username,_id})=>{
        return (
          <>
          
          <p style={{color:"white",backgroundColor:"black",padding:"5px 10px"}}>{username}</p>
          </>
        )
      })
    } */}
    {/* {
      JSON.stringify(fetchUserData.followers)
    } */}




      {/* <div className="follower conversation">
        <div>
         
          {online && <div className="online-dot"></div>}
          <img
            src={`http://localhost:7000/uploads/${userData.image}`}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <p>llllll</p>
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData?.username} </span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div> */}
      {/* <hr style={{ width: "85%", border: "0.1px solid #ececec" }} /> */}
    </>
  );
};

export default Conversation;



// import React, { useState, useEffect } from "react";
// import { getUser } from "./Userrequest";
// import './Conversation.css'

// const Conversation = ({ data, currentUserId, online }) => {
//   const [userData, setUserData] = useState("");

//   useEffect(() => {
//     const userId = data.members.find((id) => id !== currentUserId);

//     const getUserData = async () => {
//       try {
//         const { data } = await getUser(userId);
//         setUserData(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getUserData();
//   }, [data.members, currentUserId]);

//   return (
//     <div className="conversation-container">
//       <div className={`follower conversation ${online ? "online" : "offline"}`}>
//         <div>
//           {online && <div className="online-dot"></div>}
//           <img
//             src={`http://localhost:7000/uploads/${userData.image}`}
//             alt="Profile"
//             className="followerImage"
//           />
//           <div className="name">
//             <span>{userData?.username}</span>
//             <span>{online ? "Online" : "Offline"}</span>
//           </div>
//         </div>
//       </div>
//       <hr className="conversation-separator" />
//     </div>
//   );
// };

// export default Conversation;
