import GlobalContext from "../../context/GlobalContext";
import { useContext } from "react";
import ReissUnsilenced from '../../images/ReissUnsilenced.jpeg';
import WhiteChocoNye from '../../images/WhiteChocoNye.jpeg';
import { GiMagnifyingGlass } from "react-icons/gi";



function CollectivesHeader() {
    //  Groove Legacy
    // BPM Archives
    // Club Chronicles
    // Stories from the heart of the dance floor.
    // sonic adventures
    // rom dusk till dawn.
    // Behind the doors 
    //  Tales of the


    // Unraveling the soundtrack that define our gatherings.
    // Diving into the next few lines, you'll discover the soundtracks that unravel the essence of our gatherings.


    return (
        <div className="collectives-header-container">
            <h2 className="collectives-header-title">Dance</h2>
            <h2 className="collectives-header-title">Chronicles</h2>
            <img src={ReissUnsilenced} alt="" className="collectives-header-image" />
            <div className="collectives-header-paragraph-container">
                <p className="collectives-header-paragraph">Diving into the next <span className="small">{'( few )'}</span> lines, you'll <GiMagnifyingGlass className="glass-icon"/>discover<GiMagnifyingGlass className="glass-icon glass-icon2"/> the <span className="red">soundtracks</span> that unravel the essence of our <span className="red">gatherings</span>.</p>
                <div className="collectives-scroll-bar-container">
                    <span className="collectives-scroll-bar"></span>
                    <span className="scroll-text">scroll</span>
                    <span className="scroll-boxes"></span>
                    <span className="scroll-boxes"></span>
                </div>
            </div>
        </div>
        
    );
}

export default CollectivesHeader;