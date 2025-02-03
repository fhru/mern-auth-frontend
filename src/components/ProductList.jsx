import axios from 'axios'
import { useEffect, useState } from 'react'
import { HiPlus } from 'react-icons/hi2';
import { Link } from 'react-router-dom'

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products')
        console.log(response.data);
        setProducts(response.data)
    }

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/products/${productId}`)
        getProducts()
    }

    return (
        <div>
            <div className='flex w-full justify-between items-center'>
                <div>
                    <h1 className="text-5xl font-bold tracking-tighter">Products</h1>
                    <h2 className="text-xl font-medium text-white/50 tracking-tighter">List Of Product</h2>
                </div>
                <Link to={"/products/add"} className='flex items-center gap-1 py-2.5 px-4 bg-blue-600 font-medium rounded-md hover:bg-blue-800 transition-all'>
                    <HiPlus className='size-5' />
                    Add
                </Link>
            </div>
            <div className="relative overflow-x-auto mt-4">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-orange-500 uppercase bg-orange-950">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created By
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                                <tr className="border-b bg-neutral-900 border-gray-700" key={product.uuid}>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap ">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.user.name}
                                    </td>
                                    <td className="px-6 py-4 space-x-2">
                                        <Link
                                            to={`/products/edit/${product.uuid}`}
                                            className='py-2.5 px-4 bg-blue-600 rounded-md text-white font-medium text-sm hover:bg-blue-800 transition-all hover:text-white/50'
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type='button'
                                            className='px-4 py-2.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-800 hover:text-white/50 transition-all'
                                            onClick={() => deleteProduct(product.uuid)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ProductList
