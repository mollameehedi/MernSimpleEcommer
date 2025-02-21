import React from 'react'
import ProductCard from '../../common/ProductCard'

const AllProduct = () => {
    let products = [
        {
            name:'Leptop'
        },
        {
            name:'Leptop'
        },
        {
            name:'Leptop'
        },
        {
            name:'Leptop'
        },
        {
            name:'Leptop'
        },
        {
            name:'Leptop'
        },
        {
            name:'Leptop'
        },
        {
            name:'Leptop'
        },
        {
            name:'Leptop'
        },
    ]
  return (
    <aside>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-5">
                {products.map((product,index) => (
                    <ProductCard key={index}/>

                ))}
            </div>
    </aside>
  )
}

export default AllProduct