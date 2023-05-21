
import React, { useEffect, useState } from "react";
import Card from "./Card";



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
   
   
   return (
         <section id='Items'>
               {products.map((product) => {
                     return (
                           <>
                                 <Card
                                       key={product.id}
                                       name={product.name}
                                       image={product.img}
                                       price={product.price}
                                    //    product={product}
                                 ></Card>
                           </>
                     );
               })}
         </section>
   );
};

export default Products;