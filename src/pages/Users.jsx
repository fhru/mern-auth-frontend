import { useEffect } from "react"
import UserList from "../components/UserList"
import Layout from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getMe } from "../features/authSlice"

function Users() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isError, user } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    useEffect(() => {
        if (isError) {
            navigate('/')
        }
        if (user && user.role !== 'admin') {
            navigate('/dashboard')
        }
    }, [isError, navigate, user])

    return (
        <Layout>
            <UserList />
        </Layout>
    )
}
export default Users
