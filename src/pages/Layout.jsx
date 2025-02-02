/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="w-12 lg:w-64">
                    <Sidebar />
                </div>
                <div className="flex-grow p-2 lg:p-8">
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}

export default Layout
