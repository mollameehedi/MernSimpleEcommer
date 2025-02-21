import React from 'react'
import Container from '../components/utils/Container'
import ShopSidbar from '../components/screens/shop/ShopSidbar'
import AllProduct from '../components/screens/shop/AllProduct'
import Title from '../components/utils/Title'

const Shop = () => {
  return (
    <section className='mt-5'>
        <Container>
          
          <div className="grid grid-cols-12">
            <div className="col-span-3">
                <ShopSidbar/>
            </div>
            <div className='col-span-9'> 
                <AllProduct/>
            </div>
          </div>
        </Container>
    </section>
  )
}

export default Shop