import "./Gallery.css";
import Gallery_1 from "../../assets/gallery-1.png";
import Gallery_2 from "../../assets/gallery-2.png";
import Gallery_3 from "../../assets/gallery-3.png";
import Gallery_4 from "../../assets/gallery-4.png";
import White_arrow from "../../assets/white-arrow.png"

function Gallery(){

    return (
        <div className="campus">
            <div className="gallery">
                <img src={Gallery_1} alt="" />
                <img src={Gallery_2} alt="" />
                <img src={Gallery_3} alt="" />
                <img src={Gallery_4} alt="" />
            </div>
            <button className="btn dark-btn">See more here <img src={White_arrow} alt="" /></button>
        </div>
    )
}

export default Gallery