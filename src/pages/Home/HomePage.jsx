import Carousel from "../../components/carousel/Carousel";
import './HomePage.css';

const carousel_images = [
    {
        id : 1,
        img_src : '/images/carousel/img1.png',
        title : 'buhahahatar',
        caption :"yuhoooooll"
    },
     {
        id : 2,
        img_src : '/images/carousel/img2.png',
        title : 'buhahahatar',
        caption : "yuhoooooll"
    },
     {
        id : 3,
        img_src : '/images/carousel/img3.jpg',
        title : 'buhahahatar',
        caption : "yuhooooolll"
    }
]

function HomePage(){
    return (<>
    <div className="container ">
        <div className="row d-flex home_banner">
            <div className="col d-flex">
                <Carousel images = {carousel_images} />
            </div>
            <div className="col bg-success">
               
            </div>
        </div>
    </div>
    </>
    )
}

export default HomePage;