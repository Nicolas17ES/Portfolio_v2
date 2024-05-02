import './Projects.css'
import GlobalContext from '../../context/GlobalContext'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import AulartShoop from '../../components/bodyContent/projectsContent/AulartShoop';
import AulartTools from '../../components/bodyContent/projectsContent/AulartTools';
import LinkInBio from '../../components/bodyContent/projectsContent/LinkInBio';
import ProjectsMainTitle from '../../components/bodyContent/projectsContent/ProjectsMainTitle';
import ProjectsImageDispaly from '../../components/bodyContent/projectsContent/ProjectsImageDispaly';
import ProjectsParagraphs from '../../components/bodyContent/projectsContent/ProjectsParagraphs';
import KeepScrolling from '../../components/bodyContent/projectsContent/KeepScrolling';
import PinnedImageGallery from '../../components/bodyContent/projectsContent/PinnedImageGallery';
import Objectives from '../../components/bodyContent/projectsContent/Objectives';
import ChangeProject from '../../components/bodyContent/projectsContent/ChangeProject';
import GallerySliderMobile from '../../components/bodyContent/projectsContent/GallerySliderMobile';
import { useGSAP } from '@gsap/react';

// The Projects component displays project sections and handles animations based on mouse movements.
function ViewProjects() {

    const { id } = useParams();
    const { title_animation_finshed, boxes_animations_finsished, screenWidth, dispatch} = useContext(GlobalContext);

    useEffect(() => {
        if(boxes_animations_finsished){
            dispatch({
                type: 'SET_DISPLAY_FOOTER',
                payload: true
            })
        }
    }, [boxes_animations_finsished])


    useEffect(() => {
        return () => {
            dispatch({
                type: 'SET_BOXES_ANIMATION_FINSIHED',
                payload: false,
            })
        }
    }, [])

    // Mapeo de IDs de proyecto a componentes
    const projectComponents = {
        'aulart-shop': AulartShoop,
        'aulart-tools': AulartTools,
        'linkinbio': LinkInBio,
    };

    // Selecciona el componente basado en el ID
    const ProjectComponent = projectComponents[id];

    // Verifica si el ID es válido
    if (!ProjectComponent) {
        // Retorna null o algún componente/UI para ID no encontrados
        return <div>Project not found</div>;
    }
    return (
        <div className="body-container project-container">
            <ProjectsMainTitle/>
            {(title_animation_finshed && screenWidth > 780)&& <KeepScrolling version={3}/>}
            {title_animation_finshed && <ProjectsImageDispaly/>}
            <ProjectsParagraphs/>
            {(boxes_animations_finsished && screenWidth > 780) ? <PinnedImageGallery/> : (boxes_animations_finsished && screenWidth <= 780) ? <GallerySliderMobile/> : null}
            {boxes_animations_finsished && <Objectives/>}
            {boxes_animations_finsished && <ChangeProject origin={'projects'}/>}
        </div>
    );
}

export default ViewProjects;