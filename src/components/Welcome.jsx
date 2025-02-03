import { useSelector } from "react-redux"

function Welcome() {
    const { user } = useSelector((state) => state.auth)

    return (
        <div>
            <h1 className="text-5xl font-bold tracking-tighter">Dashboard</h1>
            <h2 className="text-2xl font-medium tracking-tighter capitalize text-white/50">Welcome Back <span className="font-bold text-white">{user && user.name}</span></h2>
        </div>
    )
}

export default Welcome
