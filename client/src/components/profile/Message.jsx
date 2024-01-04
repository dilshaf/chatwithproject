import React, { useRef, useState } from "react";
import LogoSearch from "../profile/LogoSearch"
import { useEffect } from "react";
import { userChats } from "./Chatrequest";
import ChatBox from "./ChatBox";
import { io } from "socket.io-client";
import { getUserById } from "../../services/apiService";

const Message = () => {
  const socket = useRef();
  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
const [chatUser,setChatUsers] = useState([])

  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const user=localStorage.getItem("id")

const [userObject,setUserObject] = useState({})
  // Get the chat in chat section
  useEffect(() => {
    socket.current = io("http://localhost:8800");

    const getChats = async () => {
      try {
        const { data } = await userChats(user);
       
      
        setChats(data);
        
      } catch (error) {
        console.log(error.message);
      }
    };
    getChats();

    const fetchUser = async()=>{
     const response = await getUserById();
     setUserObject(response)

    }
    fetchUser()
  }, [user]);

 

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      console.log(onlineUsers,'onlineUsers');
    });
    socket.current.emit("connect_friends",user,(data)=>{
      console.log(data,'dataaaaaaaaaaaaaaaaaa');
    
      setChatUsers(data)
    });

  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      setReceivedMessage(data);
    }

    );
  }, []);


  // const checkOnlineStatus = (chat) => {
  //   const chatMember = chat.members.find((member) => member !== user);
  //   const online = onlineUsers.find((user) => user.userId === chatMember);
  //   return online ? true : false;
  // };

  const handleUserByChat = async(id)=>{
   
    socket.current.emit("new-user-add", {you:user,reciver:id});

  }

  return (

    <>
    
    
    
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          {JSON.stringify(userObject.followers)}
      {
      userObject.followers?.map(({username,_id,friends})=>{
        return (            
          <>
          
          <p onClick={()=>handleUserByChat(_id)} style={{color:"white",backgroundColor:"black",padding:"5px 10px"}}  >{username}</p>
          {/* <p  onClick={()=>handleUserByChat(_id)}>{reciver}</p> */}
          </>
        )
      })
    } 

{/* 
    {
      chatUser.map(({you,reciver})=>{
        
      */}
        {/* return(
        <> */}
           {/* {chats.map((chat) =>
           
           (  
            
              <div onClick={() =>setCurrentChat(chat)} ><p>{'chat'}</p></div>))} */}
{/*             
          
          </> */}
        {/* )
      })
    } */}
        </div>
      </div>
      {/* Right Side */}

       <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          {/* <NavIcons /> */}
        </div>
        {/* <ChatBox
          chat={currentChat}
          
          currentUser={user}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        /> */}
      </div> 
    </div>
    </>

  );
};

export default Message;