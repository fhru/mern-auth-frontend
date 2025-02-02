import { HiChevronDown } from "react-icons/hi2"

function FormAddUser() {
    return (
        <div>
            <p className="text-5xl font-bold tracking-tighter">Users</p>
            <p className="text-2xl font-medium text-white/50 tracking-tighter">Add New User</p>
            <form action="" method="post" className="p-6 flex flex-col rounded-xl bg-neutral-900 border-neutral-600 gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-bold text-xl tracking-tighter">Name</label>
                    <input type="text" placeholder="Name" id="name" className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700" name="name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-bold text-xl tracking-tighter">Email</label>
                    <input type="email" placeholder="example@mail.com" id="email" className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700" name="email" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-bold text-xl tracking-tighter">Password</label>
                    <input type="password" id="password" className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700" name="password" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword" className="font-bold text-xl tracking-tighter">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700" name="confirmPassword" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="role" className="font-bold text-xl tracking-tighter">Role</label>
                    <div className="relative">
                        <select name="role" id="role" className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700 appearance-none w-full">
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

export default FormAddUser
