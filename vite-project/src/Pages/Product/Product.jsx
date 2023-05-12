import React, { useEffect } from 'react'
import Screen from '../../components/Screen/Screen'
import './Product.css'
import axios from 'axios'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../store/CartSlice'
const Product = () => {
  const dispatch = useDispatch();
const [Data, setData] = useState([])
  useEffect(() => {
    Products();

  }, [])
  
  const Products = async () =>{
    const result = await axios.get(`http://localhost:4000/`)
    setData(result.data);
  }

  const HandleAdd = (item) =>{
    dispatch(add(item));
  }
  return (
    <div className='MainContainerOfProductPage'>
    <Screen/>
    <h1 className='HandBagText'>HandBags</h1>
    <div className='Items'>
      {Data.map((Product)=>{
        return(
          <div className='itemsCard'>
            <h4 className='ProductTitle'>{Product.title}</h4>
           <Link to={`/Product/${Product.id}`}><img src={Product.image}  width={200} height={200}/></Link> 
            <h5 className='ProductPrice'>Price:{Product.price}</h5>
            <button class="button-1" onClick={()=>HandleAdd(Product)}>Add to Cart</button>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Product