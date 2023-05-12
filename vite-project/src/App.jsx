import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Product from './Pages/Product/Product'
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Detail from './Pages/Product/DetailPage/Detail'
import CartPage from './Pages/Product/CartPage'
function App() {

  return (
<>
<Router>
<Navbar/>
<Routes>
  <Route path='/' element={<Product/>}/>
  <Route path='/Cart' element={<CartPage/>}/>
 <Route path='/Product/:id' element={<Detail/>}/>
</Routes>
</Router>
</>


  )
}

export default App
