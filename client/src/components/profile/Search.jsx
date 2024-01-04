import React,{useState,useEffect, useRef, useContext} from "react";
import "./Search.css";
import PostSession from "./PostSession";
import Postemp from "./Postemp";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {successToast,errorToast} from '../../Toastify/Toast'
import { getUserById } from "../../services/apiService";


const Search = () => {

  const cameraBtn = useRef()
  
 
  const [formData, setFormData] = useState({
    description: "",
    image:null,
    privacy: "public",
  
  });
  const [details,setDetails]=useState({})
  const [privacy, setPrivacy] = useState('public');
  const [refresh, setRefresh] = useState(false);
  
  const [isToggled, setToggled] = useState(false);
  console.log(formData,'ddd');

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],  // Set the image property to the file object
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // const handleSubmitData = async (e) => {
  //   e.preventDefault();
  //   console.log('FormData:',formData);
  
   
  //   const data = new FormData();
  //   data.append("description", formData.description);
  //   data.append("image", formData.image);
  //   data.append("userId",localStorage.getItem("id"))

  //   console.log(formData,'dataaaaaaaaaaaa');
  //   try {
  //     const response = await axios.post("http://localhost:7000/api/posts/search",data );

  //     console.log(response, "responsekkijsjbj");
  //     if (response.data) {
  //       successToast("success");
  //     }
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //     errorToast(error.response.data.message);
  //   }
  // };



  const handleSubmitData = async (e) => {
    e.preventDefault();
    console.log('FormData:', formData);
  
    const data = new FormData();
    data.append("description", formData.description);
    data.append("image", formData.image);
    data.append("userId", localStorage.getItem("id"));
    data.append("privacy", isToggled ? "public" : "private");
    // data.append("username",formData.username)
  
    console.log(data, 'dataaaaaaaaaaaa'); // Log the 'data' variable instead of 'formData'
    try {
      const response = await axios.post("http://localhost:7000/api/posts/search", data);
  
      console.log(response, "responsekkijsjbj");
      if (response && response.data) {
        successToast("successfully Posted");
        setRefresh((prevRefresh) => !prevRefresh);
        setFormData({
          description: "",
          
        });
        // description('')
        // username('')
      
      } else {
        console.error("Response or its 'data' property is undefined");
      }
    } catch (error) {
      console.log(error.response?.data?.message || "An error occurred");
      errorToast(error.response?.data?.message || "An error occurred");
    }
  };

  const handleClickToggle = (event) => {
    setPrivacy(event.target.value);
    setToggled(!isToggled);
    const toastMessage = isToggled
    ? 'Toggle button set to private successfully!'
    : 'Toggle button set to public successfully!';

  successToast(toastMessage);
  };

  const fetchData = async()=>{
    const response = await getUserById()
    setDetails(response)
    console.log(response,'responseeeeeeeeeee');
  }
  // console.log(refresh,'refresh');

  useEffect(()=>{
    console.log('log');
    fetchData()
  },[])

  const handleCamera=()=>{
    cameraBtn.current.click()
  }

 
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "unset",
        alignItems: "center",
        marginLeft:"-3rem"
      }} className="postemp"
    >
      <form className="post-container" onSubmit={handleSubmitData} style={{marginLeft:"14rem"}}>
        <div className="post-header">
          <img
            className="post-avatar"
            src={`http://localhost:7000/uploads/${details.image}`}
            alt="User Avatar"
          />
          <div className="post-user-info">
            {/* <input
              type="text"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Post here..."
            /> */}
             <input
                    name="description"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.description}
                    onChange={handleInputChange}
                  />

            {/* <label
              htmlFor="pic"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo upload
            </label> */}
            <div className="mt-2">
              
              <input
                id="pic"
                name="image"
                type="file"
                autoComplete="file"
                style={{display:"none"}}
                accept="image/*"
                required
                ref={cameraBtn}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                // value={formData.image}
                onChange={handleInputChange}
              />
            </div>

{/* <div>

            <input
  name="privacy"
  type="text"
  required
  className="block w-full rounded-md border-2 border-gray-300 py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  // value={formData.privacy}
  onChange={handleInputChange}
  placeholder="You can choose post is private or public"
/>
</div> */}


<select name="" id="" onChange={handleClickToggle} value={isToggled ? "public" : "private"} style={{marginLeft:"28rem",
    backgroundColor: "antiquewhite"}}>
      
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>




          </div>
        </div>

        <div className="post-actions">
          <div className="action-button">


            <i className="fa-solid fa-camera" onClick={handleCamera}></i>

            <i className="fa-solid fa-photo-film"></i>
          </div>

          <div>
          <Button as="input" type="submit" value="Post" />
          {/* <button type="button" as="input"  value="Post" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Share</button> */}
          </div>
        </div>
      </form>

      {/* <PostSession/> */}
      <Postemp refresh={refresh}/>
    </div>
  );
};

export default Search;
