import {useState, useEffect} from 'react'
import CounterLoader from '../shared/CounterLoader';
import ProjectsImageDispaly from '../bodyContent/projectsContent/ProjectsImageDispaly';
import '../../pages/projects/Projects.css';
import ProjectsParagraphs from '../bodyContent/projectsContent/ProjectsParagraphs';
import PinnedImageGallery from '../bodyContent/projectsContent/PinnedImageGallery';
import Objectives from '../bodyContent/projectsContent/Objectives';

export default function Interviews() {
   
    return (
            
            <div className="interview">
                <Objectives/>
            </div>

    );
}
