import './Projects.css'
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';
import AulartShoop from '../../components/bodyContent/projectsContent/AulartShoop';
import AulartTools from '../../components/bodyContent/projectsContent/AulartTools';
import LinkInBio from '../../components/bodyContent/projectsContent/LinkInBio';
import ProjectsMainTitle from '../../components/bodyContent/projectsContent/ProjectsMainTitle';
import ProjectsImageDispaly from '../../components/bodyContent/projectsContent/ProjectsImageDispaly';
import ProjectsParagraphs from '../../components/bodyContent/projectsContent/ProjectsParagraphs';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import KeepScrolling from '../../components/bodyContent/projectsContent/KeepScrolling';
import PinnedImageGallery from '../../components/bodyContent/projectsContent/PinnedImageGallery';

// The Projects component displays project sections and handles animations based on mouse movements.
function ViewProjects() {

    const { id } = useParams();
    const { title_animation_finshed, projects_resumes_animation_finished } = useContext(GlobalContext);

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
            {title_animation_finshed && <KeepScrolling version={3}/>}
            <ProjectsImageDispaly/>
            <ProjectsParagraphs/>
            {projects_resumes_animation_finished && (
                <>
                    <KeepScrolling version={4} margin={'120px'} />
                    <PinnedImageGallery/>
                </>
            )}
        </div>
    );
}

export default ViewProjects;