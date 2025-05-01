// import InputField from "../../components/user/commonComponents/InputField.tsx";
// import { Button } from "@mui/material";
// import { ISignUpForm } from "../../utility/types/userFormtypes/UserForms.ts";
// import React from "react";
//
// const SignUpForm: React.FC<ISignUpForm> = ({
//     err,
//     handleInputData,
//     handleSubmit,
//     inputData,
// }) => {
//     return (
//         <div className=" h-screen w-full flex justify-center items-center">
//             <div
//                 className=" w-[40%] p-10 max-sm:w-[95%] "
//                 style={{
//                     borderRadius: "10px",
//                     boxShadow: "0 0 7px #000",
//                 }}
//             >
//                 <h1 className="text-center text-2xl font-bold mb-5 text-blue-950">
//                     Create Your Account
//                 </h1>
//                 <form action="" onSubmit={handleSubmit}>
//                     <InputField
//                         inputName="first_name"
//                         type="text"
//                         label="Enter Your First Name"
//                         placeholder="First Name"
//                         errorMessage={err.first_name}
//                         onchange={handleInputData}
//                         inputData={inputData.first_name}
//                     />
//                     <InputField
//                         inputName="last_name"
//                         type="text"
//                         label="Enter Your Last Name"
//                         placeholder="Last Name"
//                         errorMessage={err.last_name}
//                         onchange={handleInputData}
//                         inputData={inputData.last_name}
//                     />
//                     <InputField
//                         inputName="email"
//                         type="text"
//                         label="Enter Your Email"
//                         placeholder="example@123.com"
//                         errorMessage={err.email}
//                         onchange={handleInputData}
//                         inputData={inputData.email}
//                     />
//                     <InputField
//                         inputName="password"
//                         type="password"
//                         label="Enter Your Password"
//                         placeholder="password"
//                         errorMessage={err.password}
//                         onchange={handleInputData}
//                         inputData={inputData.password}
//                     />
//                     <InputField
//                         inputName="confirmPassword"
//                         type="password"
//                         label="Confirm Your Password"
//                         placeholder="Re-type Password"
//                         errorMessage={err.confirmPassword}
//                         onchange={handleInputData}
//                         inputData={inputData.confirmPassword}
//                     />
//                     <Button type="submit" className="bg-blue-500 w-full">
//                         Submit
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignUpForm;

import { ISignUpForm } from "../../utility/types/userFormtypes/UserForms.ts";
import React from "react";
import { Link } from "react-router";

const SignUpForm: React.FC<ISignUpForm> = ({
    err,
    handleInputData,
    handleSubmit,
    inputData,
}) => {
    return (
        <div className='w-full h-screen bg-[url("../../../public/signup.jpg")] bg-center bg-cover bg-no-repeat]'>
            <div className='w-full h-full backdrop-blur-2xl flex  justify-center items-center'>
                <div className=' w-[50%] h-[750px] flex '>
                    <div className='w-[50%] h-full bg-black opacity-80  rounded-tl-2xl rounded-bl-2xl flex justify-center items-center roun'>
                        <div className=' w-[90%] h-[90%] flex justify-center  flex-col'>
                            <div className='flex flex-col text-white'>
                                <h1 className='font-bold text-3xl sm:text-4xl mb-2'> Welcome to Smart PC</h1>
                                <span className="opacity-70 mb-6">Please enter your details</span>
                            </div>
                            <div className=''>
                                <div className=' flex flex-col gap-2'>
                                    <label className='text-white font-semibold' htmlFor="first_name">First Name</label>
                                    <p className='text-red-500 text-sm transition'>
                                        {err.first_name}
                                    </p>
                                    <input onChange={handleInputData} value={inputData.first_name} className='p-2 border border-white/30 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#fefbbe]' type="text" name="first_name" id="first_name" />
                                </div>
                                <div className='mt-2 flex flex-col gap-2'>
                                    <label className='text-white font-semibold'  htmlFor="last_name">Last Name</label>
                                    <p className='text-red-500 text-sm transition'>{err.last_name}</p>
                                    <input onChange={handleInputData}  value={inputData.last_name}  className='p-2 border border-white/30 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#fefbbe]'  type="text" name="last_name" id="last_name" />
                                </div>
                                <div className='mt-2 flex flex-col gap-2'>
                                    <label className='text-white font-semibold'  htmlFor="Email">Email</label>
                                    <p className='text-red-500 text-sm transition'>{err.email}</p>
                                    <input onChange={handleInputData}  value={inputData.email}  className='p-2 border border-white/30 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#fefbbe]'  type="email" name="email" id="email" />
                                </div>
                                <div className='mt-2 flex flex-col gap-2'>
                                    <label className='text-white font-semibold'  htmlFor="Password">Password</label>
                                    <p className='text-red-500 text-sm transition'>{err.password}</p>
                                    <input onChange={handleInputData}  value={inputData.password}  className='p-2 border border-white/30 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#fefbbe]'  type="password" name="password" id="password" />
                                </div>
                                <div className='mt-2 flex flex-col gap-2'>
                                    <label className='text-white font-semibold'  htmlFor="confirmPassword">Confirm Password</label>
                                    <p className='text-red-500 text-sm transition'>{err.confirmPassword}</p>
                                    <input onChange={handleInputData} value={inputData.confirmPassword}  className='p-2 border border-white/30 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#fefbbe]'  type="password" name="confirmPassword" id="confirmPassword" />
                                </div>
                            </div>
                            <div>
                                <button onClick={handleSubmit} className="mt-8 w-full h-[50px] rounded-md bg-white hover:bg-[#00d1f3] text-black text-lg font-semibold transition">Sign Up</button>
                            </div>
                            <div className='mt-5 text-white flex justify-center items-center gap-2 text-sm'>
                                <span className='font-semibold'>Already have an account ?</span>
                                <Link className='hover:underline hover:text-[#00d1f3]' to='/user/signin'>Sign in</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] h-full bg-[url("../../../public/signup.jpg")] rounded-tr-2xl rounded-br-2xl bg-center bg-cover' ></div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
