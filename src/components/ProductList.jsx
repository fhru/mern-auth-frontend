import axios from 'axios'
import { useEffect, useState } from 'react'
import { HiOutlineTrash, HiPencilSquare, HiPlus } from 'react-icons/hi2';
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
                <Link to={"/products/add"} className='flex items-center gap-1 p-2.5 bg-blue-950 font-medium rounded-md hover:bg-blue-900 transition-all text-blue-600'>
                    <HiPlus className='size-4' />
                    Add
                </Link>
            </div>
            <div className="relative overflow-x-auto mt-4">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-orange-500 uppercase bg-orange-950">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-tl-lg">
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
                            <th scope="col" className="px-6 py-3 rounded-tr-lg">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            const isLastRow = index === products.length - 1;
                            return (
                                <tr className={`bg-neutral-900 ${isLastRow ? 'rounded-br-lg rounded-bl-lg' : 'border-b border-gray-700'}`} key={product.uuid}>
                                    <th scope="row" className={`px-6 py-4 font-medium text-white whitespace-nowrap ${isLastRow ? 'rounded-bl-lg' : ''}`}>
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.price}
                                    </td>
                                    <td className="px-6 py-4 capitalize">
                                        {product.user.name}
                                    </td>
                                    <td className={`px-6 py-4 space-x-2 ${isLastRow ? 'rounded-br-lg' : ''}`}>
                                        <Link
                                            to={`/products/edit/${product.uuid}`}
                                            className='py-2.5 px-4 bg-blue-950 rounded-md text-blue-600 font-medium text-sm hover:bg-blue-900 transition-all inline-flex items-center gap-1'
                                        >
                                            <HiPencilSquare className='size-4' />
                                            Edit
                                        </Link>
                                        <button
                                            type='button'
                                            className='px-4 py-2.5 bg-red-950 text-red-600 text-sm rounded-md hover:bg-red-900  transition-all inline-flex items-center gap-1'
                                            onClick={() => {
                                                if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
                                                    deleteProduct(product.uuid);
                                                }
                                            }}
                                        >
                                            <HiOutlineTrash className='size-4' />
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
