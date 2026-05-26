import { useEffect, useState } from "react";

const Products = () => {
    const [items, setItems] = useState([]);
    
   

    useEffect(() => {

        const controller = new AbortController();
        async function getProducts(params) {
            try {
                let resp = await fetch("https://dummyjson.com/products", {
                    single: controller.single
                })
                
                
                let data = await resp.json();
                console.log(data);
                setItems(data.products);

            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

        return () => controller.abort();

    }, []);

    
    return (
        <div  >
            <h1 >All Products</h1>
             {items.length === 0 ? <p>No products Aviable</p> : (
                <section  >
                    {items.map((ele) => {
                        return (
                            <div  key={ele.id}>
                                <div >
                                <img src={ele.thumbnail}
                                alt={ele.title}
                               
                                />
                                <span >${ele.price}</span>
                                </div>
                                <div>
                                    <h2 >{ele.title}</h2>
                                    <p>{ele.description}</p>
                                    <div >
                                        <span >{ele.category}</span>
                                        <span >⭐ {ele.rating}</span>
                                    </div>
                                </div>
                            </div>
                            
                        )
})
                    } 
                    </section>
            )}

           
        </div>
    );
};

export default Products;