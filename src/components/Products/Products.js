
import React, { useEffect, useState } from "react";



const Products = () => {
    
    const [products, setProducts] = useState([0, 5]);
    console.log(products);
    
  useEffect(() => {
        fetch('products.JSON').then(async (response) => {
              try {
                    const data = await response.json();
                    // console.log("response data?", data);
                    setProducts(data);
              } catch (error) {
                    console.log('Error happened here!');
                    console.error(error);
              }
        });
  }, []);
   
   
   return <div>
    Products
    </div>;
};

export default Products;