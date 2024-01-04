import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { getUserById } from "../../../services/apiService";
import {useParams} from 'react-router-dom'
import './index.css'
import axios from "axios";
import { successToast } from "../../../Toastify/Toast";

function Settings() {
  const [image, setImage] = useState("");
  const [isToggled, setToggled] = useState(false);
  const [data, setData] = useState({
    username: "", 
    password: "",
    email: "",
    image: "",
    privacy: "public",
  });



  const fetchData = async () => {
   try {
    const response = await getUserById();
    setData(response);
    console.log(response, "response");
   } catch (error) {
    console.log(error.message);
   }
  };
  

 

  useEffect(() => {
    fetchData();
    
  }, []);

  
  const handleFileChange = (e) => {
    
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  


  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const {id}=useParams()
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('button clicked');
  

    const formData = new FormData();
    formData.append('username',data.username);
    formData.append('email',data.email);
    formData.append('password',data.password);
    formData.append('image',image);
    formData.append("privacy", isToggled ? "public" : "private");
    console.log(formData,'dddddddd');
    try {
      
      let response = await axios.put(`http://localhost:7000/api/admin/up/${localStorage.getItem('id')}`, formData);
      if(response.data){
        successToast("updated");
      }
      console.log(response,"dataaaaaaaaaaaaaa");
    } catch (error) {
      console.error('Error updating user profile:', error.message);
    }
  };
  const handleClickToggle = () => {
    setToggled(!isToggled);
  };
//edit to userid
  const handlePrivacy = async(postId,value)=>{
    // alert(e.target.value)
    if(value === '') return alert('plese click anyone')
    try {
      await axios.put('http://localhost:7000/api/admin/privacy',{postId,data:value})
    } catch (error) {
      
    }
  }

  return (
    <>
      <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" >
        <div class="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
          <h3 class="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Update Your Profile
          </h3>
        </div>
        <div className="styled-box">
         <p>Email:{data.email}</p>
          <p>Username:{data.username}</p>
          {/* <p>{data.password}</p> */}
          <p>Image:{data.image}</p>
        </div>




<form onSubmit={handleSubmit}  enctype="multipart/form-data">
        <div class="flex flex-col gap-4 p-6">
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              placeholder=""
              type="text"
              name="username"
              onChange={handleInputChange}
              class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              UserName
            </label>
          </div>
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              placeholder=""
              type="password"
              name='password'
              // value={data.password || ''}
              onChange={handleInputChange}
              class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
          </div>
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              placeholder=""
              type="email"
              name='email'
              // value={data.email || ''}
              onChange={handleInputChange}
              class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>


          {/* <select name="" id="" onChange={handleClickToggle} value={isToggled ? "public" : "private"}> */}
          <select name="" id="" onChange={(e)=>handlePrivacy(data._id,e.target.value)}>
            
            <option value="">select</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
            {/* <p>sdfdf {}</p> */}
        {/* <option value="public">Public</option> */}
        {/* <option value="private">Private</option> */}
      {/* </select> */}



          <div class="relative h-11 w-full min-w-[200px]">
            <input
              placeholder=""
              type="file"
              // value={data.image}
              accept="image/*" 
              name="image"
              onChange={handleFileChange}
              class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Your profile pic
            </label>
          </div>
          <div class="-ml-2.5">
            <div class="inline-flex items-center">
              <label
                data-ripple-dark="true"
                for="checkbox"
                class="relative flex cursor-pointer items-center rounded-full p-3"
              >
                <input
                  id="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-cyan-500 checked:bg-cyan-500 checked:before:bg-cyan-500 hover:before:opacity-10"
                  type="checkbox"
                />
                <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    stroke-width="1"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    class="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                for="checkbox"
                class="mt-px cursor-pointer select-none font-light text-gray-700"
              >
                Remember Me
              </label>
            </div>
          </div>
        </div>
        <div class="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="submit"
            class="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Update
          </button>
        </div>

        </form>




        
      </div>
    </>
  );
}

export default Settings;


// import React, { useState, useEffect } from "react";
// import { getUserById } from "../../../services/apiService";
// import { useParams } from 'react-router-dom';
// import axios from "axios";
// import { successToast } from "../../../Toastify/Toast";

// function Settings() {
//   const [image, setImage] = useState("");
//   const [isToggled, setToggled] = useState(false);
//   const [data, setData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     image: "",
//     privacy: "public",
//   });

//   const fetchData = async () => {
//     try {
//       const response = await getUserById();
//       setData(response);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleInputChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const { id } = useParams();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('username', data.username);
//     formData.append('email', data.email);
//     formData.append('password', data.password);
//     formData.append('image', image);
//     formData.append("privacy", isToggled ? "public" : "private");

//     try {
//       let response = await axios.put(`http://localhost:7000/api/admin/up/${localStorage.getItem('id')}`, formData);
//       if (response.data) {
//         successToast("updated");
//       }
//     } catch (error) {
//       console.error('Error updating user profile:', error.message);
//     }
//   };

//   const handleClickToggle = () => {
//     setToggled(!isToggled);
//   };

//   const handlePrivacy = async (postId, value) => {
//     if (value === '') return alert('please click anyone');
//     try {
//       await axios.put('http://localhost:7000/api/admin/privacy', { postId, data: value });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className=" max-w-md p-6">
//       {/* Header */}
//       <div className="bg-gradient-to-tr from-purple-600 to-violet-400 text-white text-center py-4 mb-6 rounded-t-xl">
//         <h3 className="text-3xl font-semibold">Update Your Profile</h3>
//       </div>

//       {/* User Information */}
//       <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//         <p>Email: {data.email}</p>
//         <p>Username: {data.username}</p>
//         <p>Image: {data.image}</p>
//       </div>

//       {/* Update Form */}
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         {/* Username Input */}
//         <div className="mb-4">
//           <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
//             Username
//           </label>
//           <input
//             type="text"
//             name="username"
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
//           />
//         </div>

//         {/* Password Input */}
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
//           />
//         </div>

//         {/* Privacy Dropdown */}
//         <div className="mb-4">
//           <label htmlFor="privacy" className="block text-gray-700 text-sm font-bold mb-2">
//             Privacy
//           </label>
//           <select
//             name="privacy"
//             onChange={(e) => handlePrivacy(data._id, e.target.value)}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
//           >
//             <option value="">Select</option>
//             <option value="public">Public</option>
//             <option value="private">Private</option>
//           </select>
//         </div>

//         {/* Profile Picture Input */}
//         <div className="mb-4">
//           <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
//             Your Profile Pic
//           </label>
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
//           />
//         </div>

//         {/* Remember Me Checkbox */}
//         <div className="flex items-center mb-4">
//           <input
//             id="checkbox"
//             type="checkbox"
//             className="h-5 w-5 mr-2 cursor-pointer"
//           />
//           <label
//             htmlFor="checkbox"
//             className="text-gray-700 cursor-pointer"
//           >
//             Remember Me
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div className="mb-6">
//           <button
//             type="submit"
//             className="w-full rounded-lg bg-gradient-to-tr from-purple-600 to-violet-400 py-3 px-6 text-center font-bold text-white shadow-md hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//           >
//             Update
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Settings;
