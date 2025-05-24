import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProductData(productList);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mb-8">
      {productData.map(item => (
        <div key={item.id} className="flex flex-wrap justify-center p-4 gap-6">
          <div className='flex flex-col items-center border'>
            <img src={item.Image} alt="Product" style={{ width: '300px', height: 'auto' }} />
            <div className='font-bold'>{item.Name}</div>
            <div className='font-semibold'>MRP ₹{item.Price}</div>
            <Link 
              to='/view' 
              state={{ itemData: item }} 
              className='bg-black text-white p-2 w-full font-semibold flex justify-center'
            >
              View Product
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
