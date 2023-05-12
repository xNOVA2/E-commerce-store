import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import './Navbar.css'
const Navbar = () => {
    const item = useSelector(item=>item.cart.items)
    return (
        <div className='Navbar'>
            <div className="LogoContainer">
                <Link to={'/'} className='Logo'><img src="https://tse3.mm.bing.net/th?id=OIP.FvTqhlInl06Y-I1jvnaTLAHaHa&pid=Api&P=0" width={40} height={40} /></Link>
                <h2 className='LogoName'>Flexico</h2>
            </div>
            <div className='CartContainer'>
            <Link className='CartIcon' to={'/cart'}> {<AiOutlineShoppingCart size={30}/>} </Link>   
            <p className='itemLength'>{item.length}</p>
            </div>

        </div>
    )
}

export default Navbar