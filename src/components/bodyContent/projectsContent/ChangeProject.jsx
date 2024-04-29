import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import {useNavigate } from 'react-router-dom';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GiBranchArrow } from "react-icons/gi";



// The Projects component displays project sections and handles animations based on mouse movements.
function ChangeProject({origin}) {

    // State and context for managing cursor visibility, animations, and global app state.
    const { navbar_location, dispatch, button_state, change_slide, display_image_overlay, screenWidth} = useContext(GlobalContext);
    const navigate = useNavigate();

    const data = [
        'aulart-shop',
        'aulart-tools',
        'linkinbio',
    ]

    const changeProject = (value) => {
        if(origin === 'projects'){
            gsap.to('.projects-main-title-container', {
                opacity: 0,
                duration: .1,
                ease: 'power2.in'
            })
            dispatch({
                type: 'SET_TITLE_ANIMATION_FINISHED',
                payload: false,
            })
            dispatch({
                type: 'SET_DISPLAY_RESUMES',
                payload: false,
            });
            dispatch({
                type: 'SET_PROJECTS_RESUMES_ANIMATION_FINISHED',
                payload: false,
            })
            dispatch({
                type: 'SET_BOXES_ANIMATION_FINSIHED',
                payload: false,
            })
            let indexValue;
    
            if(navbar_location === 'aulart-shop' && value === -1){
                indexValue = data.length -1
            } else if (navbar_location === 'linkinbio' && value === 1){
                indexValue = 0
            } else {
                let index = data.indexOf(navbar_location);
                indexValue = index + value;
            }
            
            navigate('/projects/view/' + data[indexValue] ); 
            gsap.to('.projects-main-title-container', {
                delay: .25,
                opacity: 1,
                duration: .1,
                ease: 'power2.in'
            })
        } else if (origin === 'music'){
            gsap.to(['.collectives-header-container', '.music-collectives-bottom-container'], {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in'
            });
            let indexValue;

            if(button_state.value === 0 && value === -1){
                indexValue = 2

            } else if (button_state.value === 2 && value === 1){
                indexValue = 0
            } else {
                indexValue = button_state.value + value;
            }

            setTimeout(() => {
                dispatch({
                    type: 'SET_CLICKED_BUTTON',
                    payload: { clicked: true, value: indexValue},
                });
                window.scrollTo(0, 0);
            }, 300)
             gsap.to(['.collectives-header-container', '.music-collectives-bottom-container'], {
                delay: .5,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.in'
            });
            
        } else if (origin === 'carousel'){
            let indexValue;
      
                if(!button_state){
                    if(!change_slide.value && value === -1){
                        indexValue = 2;
                    } else if (!change_slide.value && value === 1){
                        indexValue = 1;
                    } else if (change_slide.value === 2 && value === 1){
                        indexValue = 0;
                    } else if (change_slide.value === 0 && value === -1){
                        indexValue = 2;
                    } else{
                        indexValue = (change_slide.value + value)
                    }
                    dispatch({
                        type: 'SET_CHANGE_SLIDE',
                        payload: {value: indexValue, origin: true},
                    })
                    
                } else {

                    if(button_state.value === 0 && value === -1){
                        indexValue = 2

                    } else if (button_state.value === 2 && value === 1){
                        indexValue = 0
                    } else {
                        indexValue = button_state.value + value;
                    }
                    dispatch({
                        type: 'SET_EXIT_COMPONENT',
                        payload: true,
                    })
                    setTimeout(() => {
                        dispatch({
                            type: 'SET_EXIT_COMPONENT',
                            payload: false,
                        })
                        dispatch({
                            type: 'SET_CLICKED_BUTTON',
                            payload: { clicked: true, value: indexValue},
                        });
                    }, 1000)
                    
                }
               
            
        }
    }

    // fade out content if image display and origina its carousel
    useEffect(() => {
        if(display_image_overlay && origin === 'carousel'){
            
            gsap.to('.change-project-container', {
                opacity: 0,
                ease: 'power2.out',
                duration: 1,
            })
        }
    }, [display_image_overlay])

    // fade in anitmaiton on render
    useEffect(() => {         
            gsap.fromTo('.change-project-container', {
                opacity: 0,
            }, {
                delay: 2,
                opacity: 1,
                ease: 'power2.out',
                duration: 1,
            })
    }, [])

    const moveText = (direction) => {
        if(screenWidth > 500){
            if(direction === 'left'){
                gsap.to('.change-project-text', {
                    x: -30,
                    duration: .4,
                    ease: 'power2.inOut'
                })
            } else if(direction === 'center'){
                gsap.to('.change-project-text', {
                    x: 0,
                    duration: .4,
                    ease: 'power2.inOut'
                })
            } else if(direction === 'right'){
                gsap.to('.change-project-text', {
                    x: 30,
                    duration: .4,
                    ease: 'power2.inOut'
                })
            }
        }
    }
    
    const viewProject = () => {
        if(screenWidth <= 500 && origin === 'carousel' && change_slide.value !== null){
            dispatch({
                type: 'SET_CHANGE_SLIDE',
                payload: { value: 0, origin: null },
            });
            dispatch({
                type: 'SET_CLICKED_BUTTON',
                payload: { clicked: true, value: change_slide.value},
            });
        } else {
            return
        }
    }
     console.log('heya', change_slide.value)
    return (
        <section className="change-project-outer">
            <div className="change-project-container">
            <div className="change-project-block">
                {navbar_location !== 'aulart-sh' && (
                    <>
                        <GiBranchArrow onMouseEnter={() => moveText('left')} onMouseLeave={() => moveText('center')} style={{rotate: '135deg', marginRight: '15px'}} className='change-project-arrow change-project-left'/>
                        <span className="previous-project">(prev)</span>
                    </>
                )}
            </div>
            <span onClick={() => viewProject()} className="change-project-text">{screenWidth <= 500 && origin === 'carousel' ? 'view project' : 'change project'}</span>
            <div className="change-project-block">
                {navbar_location !== 'linkinj' && (
                        <>
                            <span className="previous-project">(next)</span>
                            <GiBranchArrow onMouseEnter={() => moveText('right')} onMouseLeave={() => moveText('center')} onClick={() => changeProject(1)}  style={{rotate: '-45deg', marginLeft: '15px'}}  className='change-project-arrow change-project-left'/>
                        </>
                )}   
            </div>
        </div>
        </section>
    )
}

export default ChangeProject