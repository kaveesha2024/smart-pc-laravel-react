import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store.ts";
import { IAllUsers } from "../../../utility/types/adminPanel/AdminPanel.ts";

const TotalUsers: React.FC = () => {
    const [allUsersDetails, setAllUsersDetails] = useState([]);
    useEffect(() => {
        fetchAllUsers();
    }, [])
    const token = useSelector((state: RootState) => state.authentication.token);
    const fetchAllUsers = async (): Promise<void> => {
        try {
            const response = await axios.get('/api/users', {headers : { Authorization: `Bearer ${token}` }});
            setAllUsersDetails(response.data);
        }catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='p-20 h-full '>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th><th scope="col" className="px-6 py-3">
                            First Name
                        </th><th scope="col" className="px-6 py-3">
                            Last Name
                        </th><th scope="col" className="px-6 py-3">
                            Role
                        </th><th scope="col" className="px-6 py-3">
                            Email Address
                        </th><th scope="col" className="px-6 py-3">
                            Crated At
                        </th>

                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {allUsersDetails.length > 0 ? allUsersDetails.map((user: IAllUsers, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.id}
                                </th>
                                <td className="px-6 py-4">
                                    {user.first_name}
                                </td>
                                <td className="px-6 py-4">
                                    {user.last_name}
                                </td>
                                <td className="px-6 py-4">
                                    {user.role}
                                </td>
                                <td className="px-6 py-4">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4">
                                    {user.created_at}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className=" ml-5 p-2 font-semibold bg-black/80 text-white  hover:shadow-2xl rounded-sm hover:cursor-pointer">Update</button>
                                    <button className=" ml-5 p-2 font-semibold bg-red-500 text-blue-950 hover:shadow-2xl rounded-sm hover:cursor-pointer">Delete</button>
                                </td>
                            </tr>
                        )): <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4">
                                No Users Found
                            </td>
                        </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalUsers;
