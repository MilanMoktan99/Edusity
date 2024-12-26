import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About({setPlayStatus}){

    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img"/>
                <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayStatus(true)}}/>
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nuturing tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto soluta saepe rerum, aliquid tempore provident facere laborum accusantium, accusamus, aut libero sequi quia perferendis ducimus eveniet. Quas, facilis porro.</p>
                <p>Veniam, distinctio. Repellat molestias incidunt reiciendis odit, nihil adipisci recusandae veniam, odio tempore, minima accusantium sit unde reprehenderit quasi animi.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptate laudantium suscipit perspiciatis necessitatibus architecto.</p>
            </div>
        </div>
    )
}

export default About