import { useEffect } from 'react'
import { useState } from 'react'

import { Paginacion } from '../Paginacion'


export const ProductList = () => {

    const [products, setProducts] = useState([])

    const totalProducts = products.length
    const [productsPerPage, setProductsPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    const productList = async () => {

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        setProducts(data)
    }

    useEffect(() => {
        productList()
    }, [])

    return (
        <>
            <div className='container-post'>
                {products.map(post => (
                    <div className='card-post' key={post.id}>

                        <div className='card'>
                            <h3 className='title'>{post.id}. {post.title}</h3>
                            <p >{post.body}</p>
                            <button onClick={() => { alert('funcionando') }}>Anadir Favorito</button>
                        </div>
                    </div>
                )).slice(firstIndex, lastIndex)}

            </div>
            <Paginacion
                productsPerPage={productsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProducts={totalProducts}
            />
        </>

    )
}
