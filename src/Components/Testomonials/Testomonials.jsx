import "./Testomonials.css";
import Next_icon from "../../assets/next-icon.png";
import Back_icon from "../../assets/back-icon.png";
import User_1 from "../../assets/user-1.png";
import User_2 from "../../assets/user-2.png";
import User_3 from "../../assets/user-3.png";
import User_4 from "../../assets/user-4.png";
import { useRef } from "react";

function Testomonials(){

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className="testomonials">
            <img src={Next_icon} alt="" className="next-icon" onClick={slideForward}/>
            <img src={Back_icon} alt="" className="back-icon"onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui minima ratione voluptas explicabo cumque expedita minus aliquid iste ex ipsa aspernatur, quia est labore perferendis accusantium tempora rem sed.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui minima ratione voluptas explicabo cumque expedita minus aliquid iste ex ipsa aspernatur, quia est labore perferendis accusantium tempora rem sed.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_3} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui minima ratione voluptas explicabo cumque expedita minus aliquid iste ex ipsa aspernatur, quia est labore perferendis accusantium tempora rem sed.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_4} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui minima ratione voluptas explicabo cumque expedita minus aliquid iste ex ipsa aspernatur, quia est labore perferendis accusantium tempora rem sed.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testomonials