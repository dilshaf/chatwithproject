// import { useState ,useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import { errorToast, successToast } from "../../Toastify/Toast";
// import axios from "axios";

// export default function Example() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     image: "",
//     privacy: "public",
//   });
  
//   const [usernameError, setUsernameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [fileError, setFileError] = useState('');
  
//   const [isToggled, setToggled] = useState(false);
//   const navigate = useNavigate();


  

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     if (formData.username) {
//       if (!formData.username.match(/^[a-zA-Z\s]+$/)) {
//         setUsernameError('Invalid username');
//       } else {
//         setUsernameError('');
//       }
//     }

//     if (formData.email) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!formData.email.match(emailRegex)) {
//         setEmailError('Invalid email address');
//       } else {
//         setEmailError('');
//       }
//     }
//     if (formData.password) {
//       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//       if (!formData.password.match(passwordRegex)) {
//         setPasswordError("Invalid password. Password must have at least 8 characters,oneuppercase letter, one lowercase letter, and one digit");
//       } else {
//         setPasswordError('');
//       }
//     }

//     if (formData.file) {
//       const allowedFileTypes = ['image/jpeg', 'image/png'];
  
//       if (
//         formData.file.length === 0 ||
//         !allowedFileTypes.includes(formData.file[0].type)
//       ) {
//         setFileError('Invalid file. Please upload a valid image file.');
//         error = true;
//         errorMessage = 'Invalid file';
//       } else {
//         setFileError('');
//       }
//     }
    
//   }, [formData]);


  




//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmitData = async (e) => {
//     e.preventDefault();

//     console.log("Form Data:", formData);

//     const data = new FormData();
//     data.append("username", formData.username);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("image", formData.image);
//     data.append("privacy", isToggled ? "public" : "private");
//     // console.log(formData.image,'poiuyt');
    

//     try {
//       const response = await axios.post(
//         "http://localhost:7000/api/admin/register",
//         data
//       );

//       console.log(response, "response");
//       if (response.data) {
//         navigate("/");
//         successToast("success");
//       }
//     } catch (error) {
//       console.log(error.response.data.message);
//       errorToast(error.response.data.message);
//     }
//   };

  

//   const handleClickToggle = () => {
//     setToggled(!isToggled);
//   };

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"   style={{
//         backgroundImage: 'url("https://img.freepik.com/free-vector/purple-themed-mobile-phone-surrounded-by-colorful-apps_52683-23827.jpg?size=626&ext=jpg&ga=GA1.1.708491610.1695062581&semt=ais")',
//         backgroundSize: 'cover', // Adjust this based on your requirements
//         // backgroundPosition: 'center', // Adjust this based on your requirements
//         backgroundRepeat: 'no-repeat',
//         width: '100rem',
//         // Adjust this based on your requirements
//       }}>
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
//             <h2 style={{
//       fontStyle:" italic",
     
//      marginLeft:"-6 rem",
//       color: "aliceblue",
     
//     }}>
//       Register Now
//     </h2>
        
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" style={{marginLeft:" 26rem"}}>
//           <form
//             onSubmit={handleSubmitData}
//             className="space-y-6"
//             action="#"
//             method="POST"
            
//           >
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//                 style={{fontWeight: "900",
//                 fontStyle: "inherit",
//                 color: "darkblue",
//                 boxShadow: "purple 2px 1px 6px",
//                 width: "108px"}}>
//                 Username
//               </label>
//               <div className="mt-2">
//                 <input
//                   name="username"
//                   type="text"
//                   required
//                   className="block w-full rounded-md  py-1.5 text-gray-900ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                  style={{ padding: "10px",
//                   border: "1px solid purple",
//                   boxShadow:" 13px 10px 15px purple",color:"white",    backgroundColor: "blueviolet"}}
//                   placeholder="Enter Your Username"
//                 />
               

// {usernameError && <div style={{color:"red"}}>{usernameError}</div>}
//               </div>
//             </div>



       





// <select name="" id="" onChange={handleClickToggle} value={isToggled ? "public" : "private"} style={{backgroundColor:"blueviolet",color:"white"}}>
//         <option value="public">Public</option>
//         <option value="private">Private</option>
//       </select>






//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//                 style={{fontWeight: "900",
//                 fontStyle: "inherit",
//                 color: "darkblue",
//                 boxShadow: "purple 2px 1px 6px",
//                 width: "108px"}}>
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   value={formData.email}
//                   style={{ padding: "10px",
//                   border: "1px solid purple",
//                   boxShadow:" 13px 10px 15px purple",    backgroundColor: "blueviolet",color:"white"}}
//                   onChange={handleInputChange}
                 
//                   placeholder="Enter Your Email Address"
//                 />
//               </div>

             

// {emailError && <div style={{color:"red"}}>{emailError}</div>}
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//                 style={{fontWeight: "900",
//                 fontStyle: "inherit",
//                 color: "darkblue",
//                 boxShadow: "purple 2px 1px 6px",
//                 width: "108px"}}>
//                 Photo upload
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="pic"
//                   name="pic"
//                   type="file"
//                   autoComplete="file"
//                   accept="image/*"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   // value={formData.image}
//                   onChange={handleImageChange}
//                   style={{ padding: "10px",
//                   color:"white",
//                   border: "1px solid purple",
//                   boxShadow:" 13px 10px 15px purple",    backgroundColor: "blueviolet"}}
//                   placeholder="File Upload"
//                 />
//                 {fileError && <div>{fileError}</div>}
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                   style={{fontWeight: "900",
//                     fontStyle:" inherit",
//                     color: "darkblue",
//                     boxShadow: "purple 2px 1px 6px",
//                     width: "108px"}}
//                 >
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a
//                     href="#"
//                     className="font-semibold text-indigo-600 hover:text-indigo-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   value={formData.password}
//                   style={{ padding: "10px",
//                   color:"white",
//                   border: "1px solid purple",
//                   boxShadow:" 13px 10px 15px purple",    backgroundColor: "blueviolet"}}
//                   onChange={handleInputChange}
                 
//                   placeholder="Enter Your Password"
//                 />

// {passwordError && <div style={{color:"red"}}>{passwordError}</div>}
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               style={{padding: "10px",
//                 borderRadius: "58rem",
//                 backgroundColor:" darkmagenta"}}>
//                 Sign up
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }





import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../Toastify/Toast";
import axios from "axios";

export default function Example() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    image: "",
    privacy: "public",
  });

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fileError, setFileError] = useState("");

  const [isToggled, setToggled] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (formData.username) {
            if (!formData.username.match(/^[a-zA-Z\s]+$/)) {
              setUsernameError('Invalid username');
            } else {
              setUsernameError('');
            }
          }
      
          if (formData.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.email.match(emailRegex)) {
              setEmailError('Invalid email address');
            } else {
              setEmailError('');
            }
          }
          if (formData.password) {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (!formData.password.match(passwordRegex)) {
              setPasswordError("Invalid password. Password must have at least 8 characters,oneuppercase letter, one lowercase letter, and one digit");
            } else {
              setPasswordError('');
            }
          }
      
          if (formData.file) {
            const allowedFileTypes = ['image/jpeg', 'image/png'];
        
            if (
              formData.file.length === 0 ||
              !allowedFileTypes.includes(formData.file[0].type)
            ) {
              setFileError('Invalid file. Please upload a valid image file.');
              error = true;
              errorMessage = 'Invalid file';
            } else {
              setFileError('');
            }
          }
          
  }, [formData]);

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("image", formData.image);
    data.append("privacy", isToggled ? "public" : "private");

    try {
      const response = await axios.post(
        "http://localhost:7000/api/admin/register",
        data
      );

      if (response.data) {
        navigate("/");
        successToast("Registration Sucessfully");
      }
    } catch (error) {
      errorToast(error.response.data.message);
    }
  };

  const handleClickToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-cover bg-center bg-no-repeat">
      <div className="bg-white p-8 rounded-md shadow-lg w-full md:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-800">
          Register Now
        </h2>

        <form onSubmit={handleSubmitData} className="space-y-4">
          {/* ... other form fields ... */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              UserName
            </label>
            <input
              name="username"
              type="text"
              autoComplete="text"
              required
              className="w-full border-2 border-purple-500 p-2 rounded-md"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter Your UserName"
            />
            {usernameError && <div className="text-red-500">{usernameError}</div>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Privacy
            </label>
            <select
              name="privacy"
              onChange={handleClickToggle}
              value={isToggled ? "public" : "private"}
              className="w-full border-2 border-purple-500 p-2 rounded-md"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          {/* ... other form fields ... */}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full border-2 border-purple-500 p-2 rounded-md"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email Address"
            />
            {emailError && <div className="text-red-500">{emailError}</div>}
          </div>

          {/* ... other form fields ... */}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Photo upload
            </label>
            <input
              name="pic"
              type="file"
              autoComplete="file"
              accept="image/*"
              required
              className="w-full border-2 border-purple-500 p-2 rounded-md"
              onChange={handleImageChange}
              placeholder="File Upload"
            />
            {fileError && <div className="text-red-500">{fileError}</div>}
          </div>

          {/* ... other form fields ... */}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full border-2 border-purple-500 p-2 rounded-md"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Your Password"
            />
            {passwordError && <div className="text-red-500">{passwordError}</div>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-500 focus:outline-none focus:ring focus:border-purple-300"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
