import './Catalogue.css';
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";

export function Catalogue() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(jsonData => setData(jsonData)) 
            .catch(err => console.log(err));
    }, []);

    console.log(data);

    return (
        <>
            <div className="container-fluid bg-secondary">
                <div className="row">
                    {data.map((sp) => (
                        <div className="col-sm-3 mt-3 align-left ">
                          <div className='card mt-3 r' style={{height:"500px"}}>
                          <Link to={`/product/${sp.id}`}
                          className='text-decoration-none'>
                            <img className="img-thumbnail image card-img" 
                            style={{height:"240px"}}
                            src={sp.image} 
                            alt=""
                             />
                            <p className="text-primary p-2">{sp.title}</p>
                            <p className='text-dark '>{sp.description.substring(0,20)}</p>
                            <p className='text-dark'><strong>Price:</strong> ${sp.price}</p>
                            <p className='text-dark'><strong>Category :</strong> {sp.category}</p>
                            </Link>
                            
                          </div>
                        </div>
                    ))}
                </div>
            </div>
           
  </>
);
}
export default Catalogue;