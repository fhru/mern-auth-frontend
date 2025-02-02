import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="sticky top-0 border-b border-neutral-800">
            <nav className="bg-white border-neutral-200 dark:bg-neutral-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 40 40"><path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path><path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Authflow</span>
                    </NavLink>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <NavLink to={"/"} className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login</NavLink>

                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-neutral-100 rounded-lg bg-neutral-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-neutral-700">
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-white bg-orange-700 rounded-sm md:bg-transparent md:text-orange-700 md:dark:text-orange-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-neutral-900 rounded-sm hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-neutral-900 rounded-sm hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-neutral-900 rounded-sm hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
