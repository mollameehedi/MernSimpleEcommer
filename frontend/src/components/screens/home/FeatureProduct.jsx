import React from 'react'
import Container from '../../utils/Container'
import Title from '../../utils/Title'
import ProductCard from '../../common/ProductCard'

const FeatureProduct = () => {
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
    ]
  return (
    <section className='py-5'>
        <Container>
            <Title title='Feature Product'/>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-5">
                {products.map((product,index) => (
                    <ProductCard key={index}/>

                ))}
            </div>
        </Container>
    </section>
  )
}

export default FeatureProduct