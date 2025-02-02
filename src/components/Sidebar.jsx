
import { HiOutlineChartPie, HiOutlineUsers, HiOutlineShoppingBag, HiArrowRightOnRectangle } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-neutral-500 rounded-lg sm:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-orange-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-50 dark:bg-neutral-900">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink to={"/dashboard"} className="flex items-center p-2 text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 group">
                                <HiOutlineChartPie className="size-6 text-orange-600 group-hover:text-orange-600/50" />
                                <span className="ms-3">Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/users"} className="flex items-center p-2 text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 group">
                                <HiOutlineUsers className="size-6 text-orange-600 group-hover:text-orange-600/50" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </NavLink>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 group">
                                <HiOutlineShoppingBag className="size-6 text-orange-600 group-hover:text-orange-600/50" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 group">
                                <HiArrowRightOnRectangle className="size-6 text-orange-600 group-hover:text-orange-600/50" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

        </div>
    )
}
export default Sidebar
