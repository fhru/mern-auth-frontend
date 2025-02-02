import { Link } from "react-router-dom"
import { HiEye, HiEyeSlash } from "react-icons/hi2"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LoginUser, reset } from "../features/authSlice.js"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, isError, isLoading, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isSuccess) {
            navigate('/dashboard');
            dispatch(reset()); // Reset setelah navigasi berhasil
        }
    }, [isSuccess, dispatch, navigate]);


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(LoginUser({ email, password }));
    }

    return (
        <div className="container flex flex-col mx-auto h-screen items-center justify-center gap-8">
            <p className="text-4xl font-bold tracking-tighter">Welcome to <Link to={"/dashboard"} className="text-orange-700">Authflow.</Link></p>
            <form action="#" method="post" className="flex flex-col p-8 border border-neutral-800 rounded-2xl w-96 tracking-tighter" onSubmit={handleSubmit}>
                {isError && <div className="text-center bg-red-950/50 border border-red-700 text-red-700 mb-4 p-2.5 rounded-lg">{message}</div>}
                <div className="flex flex-col mb-4 gap-2">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="example@mail.com"
                        className="w-full p-2.5 rounded-lg outline-none text-white/50 placeholder:text-white/50 focus:ring-2 ring-neutral-800"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-8 gap-2 relative">
                    <label htmlFor="password" className="font-semibold" >Password</label>
                    <input
                        type={isVisible ? 'text' : 'password'}
                        name="password"
                        id="password"
                        className="placeholder:text-white/50 w-full p-2.5 rounded-lg outline-none text-white/50 focus:ring-2 ring-neutral-800"
                        placeholder='••••••••'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={() => setIsVisible((prev) => !prev)} className="absolute right-3 top-[2.9rem]">
                        {isVisible ? (
                            <HiEyeSlash />
                        ) : (
                            <HiEye />
                        )}
                    </button>
                </div>
                <button type="submit" className="bg-transparent border border-orange-950 text-orange-700 font-semibold hover:bg-orange-700 transition-all hover:text-white p-2.5 rounded-lg">
                    {isLoading ? 'Loading' : 'Login'}
                </button>
            </form>
        </div>
    )
}

export default Login
