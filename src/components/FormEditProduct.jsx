import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function FormEditProduct() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [msg, setMsg] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/${id}`)
                setName(response.data.name);
                setPrice(response.data.price);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg)
                }
            }
        }
        getProductById()
    }, [id])

    const updateProduct = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/products/${id}`, {
                name: name,
                price: price
            });
            navigate('/products')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div>
            <p className="text-5xl font-bold tracking-tighter">Products</p>
            <p className="text-2xl font-medium text-white/50 tracking-tighter">Edit Product</p>
            <form action="" method="post" className="p-6 flex flex-col rounded-xl bg-neutral-900 border-neutral-600 gap-4 mt-4" onSubmit={updateProduct}>

                {msg && <p className='text-red-600 p-2.5 bg-red-950/50 rounded-lg border border-red-600 w-full text-center '>{msg}</p>}

                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-bold text-xl tracking-tighter">Name</label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        id="name"
                        className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="price" className="font-bold text-xl tracking-tighter">Price</label>
                    <input
                        type="text"
                        placeholder="Price"
                        id="price"
                        className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="rounded-lg bg-blue-600 py-2.5 px-6 hover:bg-blue-800 transition-all">Save</button>
                </div>
            </form>
        </div>
    )
}

export default FormEditProduct
