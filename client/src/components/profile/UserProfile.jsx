import React, { useContext, useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Searchsession from './Searchsession';
import FriendsList from './FriendsList';
import axios from 'axios'
import { getUserById } from '../../services/apiService';
import { AuthContext } from '../../context/AuthContext';
import './UserProfile.scss'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';



export default function Basic() {

 

  const {obj} = useContext(AuthContext)
  const [datas,setDatas]=useState([])

  const { selectedPost } = useContext(AuthContext);

  
  const getPost=async(req,res)=>{
    try {
      let response=await axios.get(`http://localhost:7000/api/posts/get/${localStorage.getItem("id")}`)
      console.log(response,"res");
      setDatas(response.data)
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  
  const [data,setData] = useState({})

  const fetchData = async () => {
    let response;

    if (selectedPost) {
    
      response = selectedPost;
      // set
      console.log(response,'selectedpost');
    } else {
    
      try {
        response = await getUserById();
        // refreshUseEffectMethod()
      } catch (error) {
        console.log(error.message);
      }
    }

    setData(response);
    obj.GetUser(response)
  };

  useEffect(() => {
    fetchData();
    getPost()
  }, [obj.refresh, selectedPost]);


 
  
console.log(data,'postlength');
  
  return (
    <>
    <div className="vh-100"   >
    
      
       


      <div class="frame">
  <div class="center">
    
		<div class="profile">
			<div class="image" >
			
        <Avatar
      alt="Mark Zuckerberg"
      style={{marginLeft:"1rem"}}
      src={`http://localhost:7000/uploads/${data.profilepic || data.image}`}
      className="leaderboard__picture"
    />
			</div>
			
			<div class="name">{data.username}</div>
			<div class="job">{data.email}</div>

      {/* <div class="actions">
				
				<button class="btn">videocall</button>
			</div> */}
			
			<div class="actions">
     <Link to={"vdocall"}><button class="btn">videocall</button></Link> 
				{/* <Link to={'message'}><button class="btn">Message</button></Link> */}
       <Link to={"audio"}><button class="btn">AudioChat</button></Link> 
			</div>
		</div>
		
		<div class="stats">
			<div class="box">
			<p className="value">{datas?.length}</p>
				<span class="parameter">Posts</span>
			</div>
			<div class="box">
				<span class="value">1387</span>
				<span class="parameter">Likes</span>
			</div>
			<div class="box">
      {selectedPost ? <p className="value">{data.friends?.length}</p> : <p className="value">{data.followers?.length}</p>}
				<span class="parameter">Follower</span>
			</div>
		</div>
  </div>
</div>
















      

     

    </div>
    
     <div style={{    marginTop:" 26rem",
    marginLeft: "-2rem"}} className='frnds'>
     <FriendsList followers={data.followers}/>
   </div>
   </>
  );
}