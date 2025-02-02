function FormEditProduct() {
    return (
        <div>
            <p className="text-5xl font-bold tracking-tighter">Products</p>
            <p className="text-2xl font-medium text-white/50 tracking-tighter">Edit Product</p>
            <form action="" method="post" className="p-6 flex flex-col rounded-xl bg-neutral-900 border-neutral-600 gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-bold text-xl tracking-tighter">Name</label>
                    <input type="text" placeholder="Product Name" id="name" className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700" name="name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="price" className="font-bold text-xl tracking-tighter">Price</label>
                    <input type="text" placeholder="Price" id="price" className="p-2.5 rounded-lg outline-none placeholder:text-white/50 focus:ring-2 ring-neutral-700" name="price" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="rounded-lg bg-blue-600 py-2.5 px-6 hover:bg-blue-800 transition-all">Save</button>
                </div>
            </form>
        </div>
    )
}

export default FormEditProduct
