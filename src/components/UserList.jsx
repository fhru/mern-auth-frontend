function UserList() {
    return (
        <div>
            <h1 className="text-5xl font-bold tracking-tighter">Users</h1>
            <h2 className="text-xl font-medium text-white/50 tracking-tighter">List Of User</h2>
            <div className="relative overflow-x-auto mt-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-orange-500 uppercase bg-orange-950">
                        <tr>
                            <th scope="col" className="px-6 py-3">
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
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-neutral-900 border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap ">
                                Woi
                            </th>
                            <td className="px-6 py-4">
                                Anjing
                            </td>
                            <td className="px-6 py-4">
                                Anjing
                            </td>
                            <td className="px-6 py-4">
                                Anjing
                            </td>
                            <td className="px-6 py-4">
                                Anjing
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserList
