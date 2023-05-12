import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Detail.css';
import { useDispatch } from 'react-redux';
import { add } from '../../../store/CartSlice';
const Detail = () => {
  const [result, setResult] = useState([]);
  const params = useParams();
const dispatch = useDispatch();
  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = () => {
    axios.get(`http://localhost:4000/product/${params.id}`).then((res) => {
      setResult(res.data);
    });
  };
  const HandleAddSingleProduct = (product) =>{
    dispatch(add(product));
  }
  const backgroundColor = result.length > 0 ? result[0].color : "white";
  const color = params.id ==9?'black':'white'
  return (
    <div className="Detail">
      {result.map((item) => {
        return (
          <>
            <div className='MainDivOfSinglePage'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <img src={item.image} width={400} height={400} />
              <h5>Bag Size:{item.size}</h5>
              <h4>Price{item.price}</h4>
              <button style={{ backgroundColor: backgroundColor,color:color }} className='btnCart' onClick={()=>HandleAddSingleProduct(item)}>Add to card</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Detail;
