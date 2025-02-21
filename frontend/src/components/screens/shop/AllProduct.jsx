import React from 'react'
import ProductCard from '../../common/ProductCard'
import Title from '../../utils/Title'
import Paginate from '../../common/Paginate'

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
    <aside className='bg-white p-5 rounded-md'>
          <Title title="All Product"/>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-5">
                {products.map((product,index) => (
                    <ProductCard key={index}/>

                ))}
            </div> */}
                <Paginate itemsPerPage={6}/>
    </aside>
  )
}

export default AllProduct