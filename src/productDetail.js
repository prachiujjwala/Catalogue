import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const [product,setProduct] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(jsonData => {
                setProduct(jsonData);
              
            })
            .catch(err => console.log(err));
    }, []);

  if (!product) {
      return <h2>Product Does not Exist!</h2>;
  }
console.log(product);
  return (
    <div className="container mt-3" align="left">
        <div className="row ">
            <div className="col-sm-5  mt-3 ">
                <img src={product.image} alt="" 
                style={{height:"350px"}}
                className="col-sm-12"
                />
                
                <div className="mt-3 p">
                 
                <button type="submit" className="  btn btn-warning btn-lg px-4 m-3">Add to Cart</button>
                <button type="submit" className="btn btn-primary btn-lg px-4 m-3">Buy</button>
                </div>
            </div>
            
            <div className="col-sm-7 card p-5 mt-3 ">
                <p className="fw-bold text-primary fs-2">{product.title}</p>
                <p className="fs-5"><strong>Price : </strong>${product.price}</p>
                <p className="fs-5"><strong>Description : </strong>{product.description}</p>
                <p className="fs-5"> <strong>category : </strong>{product.category}</p>
            </div>
        </div>
    </div>
  );
}

export default ProductDetail;
