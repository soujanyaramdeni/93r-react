

import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
    const urlId = useParams()
    console.log(urlId)
    const [productDetail, setProductDetail] = useState({})

    const handleProducts = () => {
        axios.get(`https://fakestoreapi.com/products/${urlId.id}`)
            .then(response => setProductDetail(response.data))
    }
    return (
        <div>
            <button onClick={handleProducts}> click to see the products</button>
            {
                Object.keys(productDetail).length > 0 &&
                <>
                    <h2>{productDetail.title}</h2>
                    <p>{productDetail.description}</p>
                    <p>${productDetail.price}</p>
                    <img src={productDetail.image} width={200} height={200}></img>

                </>
            }
        </div>
    )
}
export default ProductDetails