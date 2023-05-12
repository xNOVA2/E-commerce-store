import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, quantityAdd, quantityRemove } from '../../store/CartSlice'
import './CartPage.css'

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items)
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const handleRemove = (item) =>{
    dispatch(remove(item));
  }

  const increment = (item) =>{
    dispatch(quantityAdd({ id: item.id, quantity: 1, price: item.price }))
  }

  const decrement = (item) =>{
    dispatch(quantityRemove({ id: item.id, quantity: 1, price: item.price }))
  }

  return (
    <div className='CartMainDiv'>
      {items.map(item => {
        return (
          <div className='CartCard' key={item.id}>
            {item.title}
            <br />
            <img src={item.image} width={100} height={100} />
            <h3>${item.price}</h3>

            <button className='btnCartt' onClick={() => increment(item)}>+</button>  
        
            <button className='btnCartt' onClick={() => decrement(item)}>-</button>
            <br />
            <button className='RemoveBtn' onClick={() => handleRemove(item)}>Remove</button>
          </div>
        )
      })}
      {
        items.length>0?<button class="button-53" role="button">Check Out ${totalPrice}</button>:null
      }
    

    </div>
  )
}

export default CartPage
