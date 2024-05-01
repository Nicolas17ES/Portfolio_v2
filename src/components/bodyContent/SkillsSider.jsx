import GlobalContext from '../../context/GlobalContext'
import { useState, useContext } from 'react'
import '../../pages/about/About.css'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function SkillsSider() {
    const [expand, setExpand] = useState(null)
    const { lateral_navbar, hide_nav, shrink_body, display_header, browser } = useContext(GlobalContext);


    const [namesArray, setNamesArray] = useState([
        'ReactJS', 'MongoDB', 'Mysql', 'GSAP', 'NodeJS', 'HTML5', 'CSS3',
        'Javascript', 'Wordpress', 'PHP', 'ExpressJS', 'RestAPI'
    ]);

        return (
            <>
            <div onMouseEnter={() => setExpand(1)} onMouseLeave={() => setExpand(11)} className={`${
                (lateral_navbar && display_header && !hide_nav && !shrink_body) ? 'logos-container' :
                (hide_nav && !shrink_body) ? 'logos-container-expand' :
                shrink_body ? 'logos-container-shrink' : null
                }`}>
                 <div className="logos">
                 <div className="logos-slider">
                     <div className="logos-slide">
                         {namesArray.map((name, index) => (
                             <p key={index} className="slider-skill">{name}</p>
                         ))}
                     </div>
                     <div className="logos-slide">
                         {namesArray.map((name, index) => (
                             <p key={index} className="slider-skill">{name}</p>
                         ))}
                     </div>
                 </div>
             </div>
            </div>
            {browser !== 'Safari' && (
                <div style={{display: (hide_nav && !shrink_body) ? 'none' : 'block'}} onMouseEnter={() => setExpand(1)} onMouseLeave={() => setExpand(11)} className={`logos-container-opposite ${expand === 1 ? 'expand-height-slider' : expand === 11 ? 'shrink-height-slider' : null}`}>
                <div className="logos">
                <div className="logos-slider">
                    <div className="logos-slide">
                        {namesArray.map((name, index) => (
                            <p key={index} className="slider-skill">{name}</p>
                        ))}
                    </div>
                    <div className="logos-slide">
                        {namesArray.map((name, index) => (
                            <p key={index} className="slider-skill">{name}</p>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            )}
         
            </>
         );
    // }
}

export default SkillsSider;
