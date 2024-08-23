import Image from "next/image"
// import Slider1 from "../../../public/fee..jpg"
import Slider2 from "../../../public/fee..jpg"
import Slider3 from "../../../public/fee..jpg"
export default function Carousel() {
return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Image src= {'https://cdn.prod.website-files.com/62be13fdb8a06d0f7cf4aa7b/66958a0f24351aef552ceaf1_hero-speck-image-sized-nocharacter.png'} width={1000} height={1000} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <Image src= {'https://cdn2.unrealengine.com/upcoming-pc-games-2022-1920x1080-c2376de0d218.jpg'} width={1000} height={1000} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <Image src= {'https://www.pcworld.com/wp-content/uploads/2023/04/cyberpunk-jonny-silverhand-2-100799087-orig-1.jpg?quality=50&strip=all'} width={1000} height={1000}ss className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
        </div>
);
}