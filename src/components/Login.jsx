import { Link } from "react-router-dom"
import { HiEye, HiEyeSlash } from "react-icons/hi2"
import { useState } from "react"

function Login() {

    const [isVisible, setIsVisible] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container flex flex-col mx-auto h-screen items-center justify-center gap-8">
            <p className="text-4xl font-bold tracking-tighter">Welcome to <Link to={"/dashboard"} className="text-orange-700">Authflow.</Link></p>
            <form action="#" method="post" className="flex flex-col p-8 border border-neutral-800 rounded-2xl w-96 tracking-tighter" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4 gap-2">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input type="text" name="email" id="email" placeholder="example@mail.com" className="w-full p-2.5 rounded-lg outline-none text-white/50 placeholder:text-white/50 focus:ring-2 ring-neutral-800" />
                </div>
                <div className="flex flex-col mb-8 gap-2 relative">
                    <label htmlFor="password" className="font-semibold" >Password</label>
                    <input type={isVisible ? 'text' : 'password'} name="password" id="password" className="placeholder:text-white/50 w-full p-2.5 rounded-lg outline-none text-white/50 focus:ring-2 ring-neutral-800" placeholder='••••••••' />
                    <button onClick={() => setIsVisible((prev) => !prev)} className="absolute right-3 top-[2.9rem]">
                        {isVisible ? (
                            <HiEyeSlash />
                        ) : (
                            <HiEye />
                        )}
                    </button>
                </div>
                <button type="submit" className="bg-transparent border border-orange-950 text-orange-700 font-semibold hover:bg-orange-700 transition-all hover:text-white p-2.5 rounded-lg">Login</button>
            </form>
        </div>
    )
}

export default Login
