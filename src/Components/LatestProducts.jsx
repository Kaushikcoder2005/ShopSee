import React, { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../Context/Context'
import Items from './Items'


function LatestProducts() {

    const {products,input,setInput} = useContext(ShopContext)
    const [items, setItems] = useState([])

    const Search = ()=>{
      let productsCopys = products.slice()
      if (input) {
        productsCopys = productsCopys.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
      }
      setItems(productsCopys)
    }

    useEffect(()=>{
      Search()
    },[input])
  
    useEffect(() => {
      setItems(products.slice(0,15))
    
    }, [])
    
    
  return (
    <>
    <div className='text-center py-8 text-3xl'>

    <div className=' inline-flex gap-2 items-center mb-3 justify-center  '>
      <p className='w-8 sm:w-12 h-[2px] sm:h-[3px] bg-gray-700 '></p>
      <p className='text-3xl Fontstyle'>Latest Collections</p>
      <p className='w-8 sm:w-12 h-[2px] sm:h-[3px] bg-gray-700 mt-2'></p>
    </div>
    </div>
    <div className='grid gap-3 gap-y-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5  w-full  p-10'>    
        {
          items.map((item,index)=>(
            <Items  key={index}   id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}/>
          ))
        }
    </div>
            </>
  )
}

export default LatestProducts
