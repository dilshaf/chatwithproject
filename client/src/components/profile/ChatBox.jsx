// import React, { useEffect, useRef, useState } from "react";
// import { getUser } from "./Userrequest";
// import { addMessage, getMessages } from "./Messagerequest";
// import { format } from "timeago.js";
// import InputEmoji from 'react-input-emoji';

// const ChatBox = ({ chat, reciever, currentUser, setSendMessage, receivedMessage }) => {
//   const [userData, setUserData] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const scroll = useRef();

//   const handleChange = (newMessage) => {
//     setNewMessage(newMessage);
//   };

//   useEffect(() => {
//     const userId = chat?.members?.find((id) => id !== currentUser);

//     const getUserData = async () => {
//       try {
//         const { data } = await getUser(userId);
//         setUserData(data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     if (chat !== null) getUserData();
//   }, [chat, currentUser]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         if (chat) {
//           const { data } = await getMessages(chat._id);
//           setMessages(data);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (chat !== null) fetchMessages();
//   }, [chat]);

//   useEffect(() => {
//     scroll.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = async (e) => {
//     e.preventDefault();

//     if (!chat) {
//       console.error("Chat is not available");
//       return;
//     }

//     const message = {
//       senderId: currentUser,
//       text: newMessage,
//       chatId: chat._id,
//       receiverId: reciever,
//     };

//     const receiverId = chat.members.find((id) => id !== currentUser);

//     setSendMessage({ ...message, receiverId });

//     try {
//       const { data } = await addMessage(message);
//       setMessages([...messages, data]);
//       setNewMessage("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (receivedMessage !== null && receivedMessage.chatId === chat?._id) {
//       setMessages([...messages, receivedMessage]);
//     }
//   }, [receivedMessage, chat, messages]);

//   return (
//     <>
//       <div className="ChatBox-container">
//         {chat ? (
//           <>
//             <div className="chat-header">
//               <div className="follower">
//                 <div>
//                   <img
//                     src={`http://localhost:7000/uploads/${userData?.image}`}
//                     alt="Profile"
//                     className="followerImage"
//                     style={{ width: "50px", height: "50px" }}
//                   />
//                   <div className="name" style={{ fontSize: "0.9rem" }}>
//                     <span>{userData?.username}</span>
//                   </div>
//                 </div>
//               </div>
//               <hr
//                 style={{
//                   width: "95%",
//                   border: "0.1px solid #ececec",
//                   marginTop: "20px",
//                 }}
//               />
//             </div>
//             <div className="chat-body">
//               {messages.map((message) => (
//                 <div
//                   key={message._id}
//                   ref={scroll}
//                   className={
//                     message.senderId === currentUser
//                       ? "message own"
//                       : "message"
//                   }
//                 >
//                   <span>{message.text}</span>{" "}
//                   <span>{format(message.createdAt)}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="chat-sender">
//               <div>+</div>
//               <InputEmoji
//                 value={newMessage}
//                 onChange={handleChange}
//               />
//               <div
//                 className="send-button button"
//                 onClick={handleSend}
//               >
//                 Send
//               </div>
//               <input type="file" name="" id="" style={{ display: "none" }} />
//             </div>
//           </>
//         ) : (
//           <span className="chatbox-empty-message">
//             Tap on a chat to start a conversation...
//           </span>
//         )}
//       </div>
//     </>
//   );
// };

// export default ChatBox;




import React, { useEffect, useRef, useState } from "react";
import { getUser } from "./Userrequest";
// import { useRef } from "react";
// import { addMessage, getMessages } from "../../api/MessageRequests";
// import { getUser } from "../../api/UserRequests";
import "./ChatBox.css";
import { addMessage, getMessages } from "./Messagerequest";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'

const ChatBox = ({ chat, currentUser, setSendMessage,  receivedMessage }) => {
   
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll=useRef()

  const handleChange = (newMessage)=> {
    setNewMessage(newMessage)
  }

  // fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    console.log(userId,"chatbox userId")
  
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        console.log(data,'chatBox data is working with that user details');
      } catch (error) {
        console.log(error.message);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        console.log(data,'getmessage with  one user');
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);


  // Always scroll to last Message
  useEffect(()=> {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])



  // Send Message
  const handleSend = async(e)=> {
    e.preventDefault()
    const message = {
      senderId : currentUser,   
      text: newMessage,
      chatId: chat._id,
  }
  const receiverId = chat.members.find((id)=>id!==currentUser);
  // send message to socket server
  setSendMessage({...message, receiverId})
  // send message to database  database conncted
  try {
    const { data } = await addMessage(message);
    setMessages([...messages, data]);
    setNewMessage("");
  }
  catch
  {
    console.log("error")
  }
}

// Receive Message from parent component
useEffect(()=> {
//   console.log("Message Arrived: ", receivedMessage)
  if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
    setMessages([...messages, receivedMessage]);
  }

},[receivedMessage])



//   const scroll = useRef();
//   const imageRef = useRef();
  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div>
                  <img
                    src={`http://localhost:7000/uploads/${userData?.image}`}
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>
                      {userData?.username} 
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
              {messages.map((message) => (
                <>
                  <div 
                  ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div >+</div>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <div className="send-button button"
               onClick = {handleSend}
               >Send</div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                // ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>

  
  );
};

export default ChatBox;
