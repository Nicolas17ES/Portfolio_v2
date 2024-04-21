import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';
import AulartLogo from '../../../images/aulart-white2.png'
import {ReactComponent as AulartLogoSvg} from '../../../assets/aulart-logo-black copia.svg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


// The Projects component displays project sections and handles animations based on mouse movements.
function ProjectsMainTitle() {


    // State and context for managing cursor visibility, animations, and global app state.
    const { button_state, navbar_location, dispatch} = useContext(GlobalContext);
    const [value, setValue] = useState(null);

    useEffect(() => {
        if(navbar_location === 'aulart-shop'){
            setValue(0)
        } else if(navbar_location === 'aulart-tools'){
            setValue(1)
        } else  if(navbar_location === 'linkinbio'){
            setValue(2)
        }
    },[navbar_location])

    const data = [
        {
            project: 'AULART SHOP',
            year: '2023',
            software: 'react',
            for: 'Aulart',
            miniTitle2: 'DESKTOP/MOBILE',
            purpose1: 'SPEED',
            purpose2: '(OPTIMIZED)',
        },
        {
            project: 'AULART TOOLS',
            year: '2022',
            software: 'node',
            for: 'Aulart',
            miniTitle2: 'Internal App',
            purpose1: 'release',
            purpose2: '(Operator)',
        },
        {
            project: 'linkinbio',
            year: '2023',
            software: 'react',
            for: 'Aulart',
            miniTitle2: 'replica',
            purpose1: 'Centralized',
            purpose2: '(Links)',
        },
    ]

    useGSAP(() => {
        if(value !== null){
            gsap.from('.project-title-h3', {
                y: 120,
                duration: .9,
                opacity: 0,
                delay: .3,
                ease: 'power1.inOut',
                stagger: .06,
                onComplete: () => {
                    gsap.to('.project-main-title', {
                        overflow: 'visible',
                    })
                }
            })
            gsap.from('.mini-title-left', {
                x: -100,
                duration: .9,
                opacity: 0,
                delay: .7,
                ease: 'power1.inOut',
            })
            gsap.from('.mini-title-right', {
                x: 100,
                duration: .9,
                opacity: 0,
                delay: .75,
                ease: 'power1.inOut',
            })
            gsap.from('.svg-logo ', {
                opacity: 0,
                duration: .9,
                delay: .75,
                ease: 'power2.inOut',
                onComplete: () => {
                    dispatch({
                        type: 'SET_TITLE_ANIMATION_FINISHED',
                        payload: true,
                    })
                }
            })
        }
    }, [value])

    useEffect(() => {
        return () => {
            dispatch({
                type: 'SET_TITLE_ANIMATION_FINISHED',
                payload: false,
            });
        }
    }, [dispatch])

    if(value === null) return null;
    
    return (
        <div className="projects-main-title-container">
            <div className="project-main-title projects-main-title-one"><h3 className="project-title-h3"><span className='underline-title'>{data[value].project}</span> - {data[value].year}</h3></div>
            <div className="project-main-title projects-main-title-two"><h3 className="project-title-h3">Made with {data[value].software}</h3> <span className='mini-title mini-title-right'>+ more stuff</span></div>
            <div className="project-main-title projects-main-title-three"><h3 className="project-title-h3">created 4 aulart</h3><AulartLogoSvg/></div>
            <div className="project-main-title projects-main-title-four"><span className='mini-title mini-title-left'>{data[value].miniTitle2}</span><h3 className="project-title-h3"><span style={{fontStyle: 'italic'}}>{data[value].purpose1} </span><span style={{color: 'rgb(var(--red))', fontWeight: 100}}>{data[value].purpose2} </span></h3></div>
        </div>
    )
}

export default ProjectsMainTitle