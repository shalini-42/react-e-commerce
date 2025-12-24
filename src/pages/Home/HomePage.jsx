import Carousel from "../../components/carousel/Carousel";
import './HomePage.css';

import { product_list } from "../../data/products";
import { carousel_images } from "../../data/carousel_images";

import ProductCard from "../../components/ProductCard/ProductCard";

function HomePage(){
    return (<>
    <div className="container ">
        <div className="row d-flex home_banner">
            <div className="col d-flex">
                <Carousel images = {carousel_images} />
            </div>
            <div className="col bg-success">
             
            </div>
            
            {/* <div className="container row">
                <ol>
                    {
                        product_list.map((product) =>(
                            <li>{product.title} - Rs {product.price}</li>
                        ))
                    }
                </ol>
            </div> */}
        <div className="card-group my-3">
           { product_list.map((product, index) =>(
                <ProductCard product={product} key={product.id}  />
  ))
}
        </div>
        </div>
    </div>
    </>
    );
}

export default HomePage;