import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { getUserById } from "../../services/apiService";
import { AuthContext } from "../../context/AuthContext";
import {Link, useParams} from 'react-router-dom'
import './AllPost.css'
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SendIcon from '@mui/icons-material/Send';
import { successToast } from "../../Toastify/Toast";

const AllPost = ({ postid ,commentid}) => {
  const { obj } = useContext(AuthContext);

  // console.log(v,'vvvvv')
  const [refresh, setRefresh] = useState(false);
  const { handlePostClick } = useContext(AuthContext);
  const [text, setText] = useState('');
  
  

  const [details, setDetails] = useState([]);
  const [data, setData] = useState({});
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [friend, setFriend] = useState("");
const {id}=useParams()

  
  // const handleTextChange = (event) => {
  //   setText(event.target.value);
  // };

  // const handleUpdateComment = async (postid,commentid) => {
  //   try {
  //     const response = await axios.put(`http://localhost:7000/api/posts/${localStorage.getItem("id")}`, {
  //       postid: postid,
  //       commentid: commentid,
  //       text: text,
  //     });
  //     console.log(response,'update res');

  //     return true

  //     console.log(response.data); 

  //   } catch (error) {
  //     console.error('Error updating comment:', error.message);
    
  //   }
  // };

  const commentFunction = (e) => {
    setCommentText(e.target.value);
  };
  const currentDateTime = new Date();

  const likePost = async (postid) => {
    console.log(`  post ${postid}`);

    try {
      const userid = localStorage.getItem("id");

      if (!userid) {
        console.error("userid not found");
        return;
      }

      const response = await axios.post(
        "http://localhost:7000/api/posts/like",
        { userid, postid }
      );

      console.log(response, "likeresponse");
      successToast(response.data.message);
      setRefresh(!refresh)
      getAllPosts();
    } catch (error) {
      console.error("Error liking post:", error.message);
    }
  };
  const handleCommentSubmit = async (postid) => {
    try {
      const userid = localStorage.getItem("id");
      if (!userid) {
        console.log("user not found");
        return;
      }
      let response = await axios.post(
        "http://localhost:7000/api/posts/comment",
        { userid, text: commentText, postid }

      );
      console.log(response, "commentresponse");
      successToast("comment succesfully")
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const addFriend=async(postid)=>{
  //   try {
  //     const userid=localStorage.getItem("id")
  //     if(!userid){
  //       console.log('user not found');
  //       return
  //     }

  //     let response=await axios.post("http://localhost:7000/api/posts/addfriend",{userid,username:friend,postid})
  //     console.log(response.friends,'friendres');
  //   } catch (error) {
  //     console.log(error.message);

  //   }
  // }

  const toggleComments = () => {
    setShowComments(!showComments);
    setRefresh(!refresh)
  };

  // const getAllPosts = async () => {
  //   try {
  //     let response = await axios.get("http://localhost:7000/api/posts/get");
  //     console.log(response, "getallpost");
  //     const publicPosts = response.data.filter(post => post.privacy === "public");
  //     setDetails(publicPosts);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };


  // const getAllPosts = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:7000/api/posts/get");
  //     console.log(response, "getallpost");
  
  //     if (response && response.data) {
  //       const publicPosts = response.data.filter(post => post.privacy === "public");
  //       setDetails(publicPosts);
  //     } else {
  //       console.error('Invalid response format:', response);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const getAllPosts = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/posts/get");
      console.log(response, "getallpost");
  
      if (response && response.data) {
        const publicPosts = response.data.filter(post => post.privacy === "public");
        setDetails(publicPosts);
        // setRefresh(!refresh)
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    getAllPosts()
  },[refresh])
  
  

  const fetchData = async () => {
    const response = await getUserById();
    console.log(response, "responsegetdata");
    setData(response);
  };



  const addFriend = async (friendId) => {
    console.log(friendId, "friendId");

    try {
      const userId = localStorage.getItem("id");
      console.log(userId, "useridddd");

      if (!userId) {
        console.log("user not found");
      }
      let response = await axios.post(
        "http://localhost:7000/api/posts/addfriend",
        {
          userId,
          friendId,
        }
      );
      successToast(response.data.message)
      setRefresh((prevRefresh) => !prevRefresh);
      console.log("all posts");
      obj.refreshUseEffectMethod()
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // getAllPosts();
    fetchData();
    // console.log('new monuted')
  }, [obj.refresh]);
  return (
    <div className="allpost">
      <div style={{marginLeft:"5rem"}}>
        {details.map((items) => {
          console.log(items, "itemshenaaaaaaaaaaaaaaaaa");

          return (
            <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md mt-8">
              <div style={{ display: "flex", gap: "20rem" }}>
                <div className="flex items-center mb-4">
                  <img
                    src={`http://localhost:7000/uploads/${items.profilepic}`}
                    alt="Profile Image"
                    className="w-10 h-10 rounded-full mr-4"
                    onClick={() => handlePostClick(items)}
                  />

                  <div>
                    <h2 className="text-lg font-semibold">{items.username}</h2>
                    <p
                      className="text-gray-600"
                      style={{ display: "inline", color: "#666" }}
                    >
                      Posted on {currentDateTime.toLocaleString()}
                    </p>
                    {/* <input type="text" value={friend} onChange={handleFriendChange} /> */}
                  </div>
               









                  {items.userId !== localStorage.getItem("id") && (
                      
                      <button
                        onClick={() => addFriend(items.userId)}
                        style={{ marginLeft: "12rem" }}
                      >
                        {" "}
                        <PersonAddIcon fontSize="default" color="primary" />
                      </button>
                    )}




                </div>
              </div>

              <img
                src={`http://localhost:7000/uploads/${items.image}`}
                alt="Post Image"
                className="mb-4 rounded-lg w-full"
              />
              <div className="mb-4">
                <p className="text-gray-800">{items.description}</p>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <div
                  className="flex items-center"
                  style={{ display: "contents" }}
                >
                  <div className="mr-4 flex items-center space-x-2">
                    {/* <svg className="w-4 h-4 fill-current text-blue-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
              </svg> */}

                    {/* <span > <i class="fa-regular fa-heart"  id="likeIcon"></i> Like 0</span> */}

                    <span onClick={() => likePost(items._id)}>
                      <i
                        style={
                          items.likes.length > 0
                            ? { color: "red" }
                            : { color: "black" }
                        }
                        class="fa-solid fa-heart"
                      ></i>{" "}
                      Like {items.likes.length}
                    </span>
                  </div>
                  <div className="mr-4 flex items-center space-x-2">
                    {/* <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
              </svg> */}
                    <span onClick={toggleComments}>
                      <i class="fa-regular fa-comment"></i>Comment{" "}
                      {items.comments.length}
                    </span>
                  </div>
                  <div className="mr-4 flex items-center space-x-2 ">
                    {/* <svg className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
              </svg> */}




<span>
                {/* <Link to={`share/${items._id}`}>
                  <i className="fa-solid fa-share"></i> Share 0 */}
              <Link to={`/share/${items._id}`} style={{textDecoration:" none",
    color: "black"}}>
          
              <i className="fa-solid fa-share"></i>  Share 0
             
                </Link>
              </span>








                  </div>
                </div>
                {/* <div className="text-sm">
            <span className="mr-2">42 Likes</span>
            <span className="mr-2">18 Comments</span>
            <span>7 Shares</span>
          </div> */}
              </div>

              {/* {showComments && (
                <div className="comments-section border-t border-gray-200 pt-4">
                  {items.comments.map((item) => {
                    console.log(item, "itemmmmm");
                    return (
                      <>
                        <img
                          src={`http://localhost:7000/uploads/${item.image}`}
                          alt="Profile Image"
                          className="w-10 h-10 rounded-full mr-4"
                        />{" "}
                        <p>{item.username}</p>
                        <p>{item.text}</p>
                      </>
                    );
                  })}

                  <br />
                  <br />

                  <input
                    type="text"
                    placeholder="Add a comment"
                    value={commentText}
                    onChange={commentFunction}
                  />

                  <button
                    type="submit"
                    onClick={() => handleCommentSubmit(items._id)}
                    style={{ backgroundColor: "red" }}
                  >
                    post
                  </button>
                </div>
              )} */}


{showComments && (
<div class="w-full max-w-md">
  
{items.comments.map((item) => {

  return(
    <>

       
           
            <div class="flex space-x-4 mb-4" style={{marginTop:"4rem"}}>
                <img src={`http://localhost:7000/uploads/${item.image}`} alt="Profile Pic" class="w-10 h-10 rounded-full"/>
                <div>
                
  <h3 class="font-semibold">
{item.username} 
</h3>
                    <p class="text-gray-600">{item.text}</p>


                    {/* <div>
                    <input type="text" value={text} onChange={handleTextChange}  style={{backgroundColor:"red"}}/>
      <button onClick={()=> handleUpdateComment(items._id,item._id)}>Update Comment</button>
                    </div> */}







                </div>
            </div>

       
            
      

           
           
        

        
      
       
    </>
  )
        

}

)}
     <div class="bg-white p-4 rounded-md shadow-md">
          
          <div class="flex space-x-4 mb-4">
              {/* <img src={`http://localhost:7000/uploads/${items.profilepic}`} alt="Your Profile Pic" class="w-10 h-10 rounded-full"/> */}
              <input type="text" placeholder="Add your comment..."  value={commentText}
                    onChange={commentFunction} class="w-full border border-gray-300 p-2 rounded-md"/>  <SendIcon
                    onClick={() => handleCommentSubmit(items._id)}
                    variant="contained"
                    color="primary" style={{marginTop:"1rem"}}>
                   
                  </SendIcon>
          </div>


       

      </div> 




</div>

  )}








            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPost;
