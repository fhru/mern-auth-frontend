import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineTrash, HiOutlineUserPlus, HiPencilSquare, HiPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users')
        console.log(response.data);
        setUsers(response.data)
    }

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`)
        getUsers()
    }

    return (
        <div>
            <div className='flex w-full justify-between items-center'>
                <div>
                    <h1 className="text-5xl font-bold tracking-tighter">Users</h1>
                    <h2 className="text-xl font-medium text-white/50 tracking-tighter">List Of User</h2>
                </div>
                <Link to={"/users/add"} className='flex items-center gap-1 p-2.5 bg-blue-950 font-medium rounded-md hover:bg-blue-900 transition-all text-blue-600'>
                    <HiOutlineUserPlus className='size-4' />
                    Add
                </Link>
            </div>
            <div className="relative overflow-x-auto mt-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-orange-500 uppercase bg-orange-950">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-tl-lg">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-tr-lg">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            const isLastRow = index === users.length - 1;
                            return (
                                <tr className={`bg-neutral-900 ${isLastRow ? 'rounded-br-lg rounded-bl-lg' : 'border-b border-gray-700'}`} key={user.uuid}>
                                    <th scope="row" className={`px-6 py-4 font-medium text-white whitespace-nowrap ${isLastRow ? 'rounded-bl-lg' : ''}`}>
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.role}
                                    </td>
                                    <td className={`px-6 py-4 space-x-2 ${isLastRow ? 'rounded-br-lg' : ''}`}>
                                        <Link
                                            to={`/users/edit/${user.uuid}`}
                                            className='py-2.5 px-4 bg-blue-950 rounded-md text-blue-600 font-medium text-sm hover:bg-blue-900 transition-all inline-flex items-center gap-1'
                                        >
                                            <HiPencilSquare className='size-4' />
                                            Edit
                                        </Link>
                                        <button
                                            type='button'
                                            className='px-4 py-2.5 bg-red-950 text-red-600 text-sm rounded-md hover:bg-red-900  transition-all inline-flex items-center gap-1'
                                            onClick={() => {
                                                if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
                                                    deleteUser(user.uuid);
                                                }
                                            }}
                                        >
                                            <HiOutlineTrash className='size-4' />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserList
