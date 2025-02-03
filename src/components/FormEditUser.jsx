import axios from "axios"
import { useEffect, useState } from "react"
import { HiChevronDown } from "react-icons/hi2"
import { useNavigate, useParams } from "react-router-dom"

function FormEditUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [role, setRole] = useState('')
    const [msg, setMsg] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${id}`)
                setName(response.data.name);
                setEmail(response.data.email)
                setPassword(response.data.password)
                setConfirmPassword(response.data.password)
                setRole(response.data.role)
                console.log(response.data);

            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg)
                }
            }
        }
        getUserById()
    }, [id])

    const updateUser = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                role: role
            });
            navigate('/users')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div>
            <p className="text-5xl font-bold tracking-tighter">Users</p>
            <p className="text-2xl font-medium text-white/50 tracking-tighter">Edit User</p>
            <form action="" method="post" className="p-6 flex flex-col rounded-xl bg-neutral-900 border-neutral-600 gap-4 mt-4" onSubmit={updateUser}>
                {msg && <p className='text-red-600 p-2.5 bg-red-950/50 rounded-lg border border-red-600 w-full text-center '>{msg}</p>}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-bold text-xl tracking-tighter">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-bold text-xl tracking-tighter">Email</label>
                    <input
                        type="email"
                        placeholder="example@mail.com"
                        id="email"
                        className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-bold text-xl tracking-tighter">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword" className="font-bold text-xl tracking-tighter">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="role" className="font-bold text-xl tracking-tighter">Role</label>
                    <div className="relative">
                        <select
                            id="role"
                            className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700 appearance-none w-full"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <HiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="rounded-lg bg-blue-600 py-2.5 px-6 hover:bg-blue-800 transition-all">Save</button>
                </div>
            </form>
        </div>
    )
}

export default FormEditUser
