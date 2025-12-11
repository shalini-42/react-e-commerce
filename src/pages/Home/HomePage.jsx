import Carousel from "../../components/carousel/Carousel";
import './HomePage.css';
function HomePage(){
    return (<>
    <div className="container ">
        <div className="row d-flex home_banner">
            <div className="col d-flex">
                <Carousel />
            </div>
            <div className="col bg-success">
                asdfg
            </div>
        </div>
    </div>
    </>
    )
}

export default HomePage;