import React from 'react'
import Container from '../components/utils/Container'
import ShopSidbar from '../components/screens/shop/ShopSidbar'
import AllProduct from '../components/screens/shop/AllProduct'

const Shop = () => {
  return (
    <section>
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