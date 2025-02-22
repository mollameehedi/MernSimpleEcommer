import React, { useEffect, useState } from 'react'
import Container from '../components/utils/Container'
import ShopSidbar from '../components/screens/shop/ShopSidbar'
import AllProduct from '../components/screens/shop/AllProduct'
import { CiFilter } from "react-icons/ci";

const Shop = () => {
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    function ResizeScreen(){
       
      if(window.innerWidth < 667){
        setFilter(false)
      }else{
        setFilter(true)
      }
    }
    
    window.addEventListener("resize",ResizeScreen)
  },[])
  return (
    <section className='mt-5'>
        <Container>
          
          <div className="grid grid-cols-12">
            <div className="lg:col-span-3 col-span-12 ">
          <h3 className='flex justify-between text-2xl p-2 bg-white lg:hidden'><span>Filter</span> <CiFilter onClick={() => setFilter(!filter)} className='lg:hidden text-white bg-primary p-1 text-4xl'/></h3>
          {filter ?  <ShopSidbar/>: ''}
            </div>
            <div className='lg:col-span-9 col-span-12'> 
                <AllProduct/>
            </div>
          </div>
        </Container>
    </section>
  )
}

export default Shop