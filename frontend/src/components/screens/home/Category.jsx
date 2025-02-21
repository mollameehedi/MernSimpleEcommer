import React from 'react'
import Container from '../../utils/Container'
import Title from '../../utils/Title'
import category_img from '../../../assets/category-2.jpg';
import category_img3 from '../../../assets/category-3.jpg';
import category_img4 from '../../../assets/category-4.jpg';
import category_img5 from '../../../assets/category-5.jpg';
import Image from '../../utils/Image';

const Category = () => {
    let categories = [
        {
            name:'shirt',
            image:category_img
        },
        {
            name:'Punjabi',
            image:category_img5
        },
        {
            name:'Food',
            image:category_img3
        },
        {
            name:'Pant',
            image:category_img4
        },
    ]
  return (
    <section className='my-5'>
        <Container>
           <Title  title="Category"/>
            <div  className='grid lg:grid-cols-5 gap-2 mt-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
                {categories.map((category,index) => (
                    <div className="border rounded-md border-gray-400 p-2 text-center" key={index}>
                        <Image className="w-full h-[150px]  lg:h-[250px] rounded-md object-cover" src={category.image}/>
                        <h3 className='py-2 text-lg font-roboto'>{category.name}</h3>
                    </div>

                ))}
            </div>
        </Container>
    </section>
  )
}

export default Category