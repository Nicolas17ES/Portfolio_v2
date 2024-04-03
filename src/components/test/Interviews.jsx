import {useState, useEffect} from 'react'
import CounterLoader from '../shared/CounterLoader';
import ProjectsImageDispaly from '../bodyContent/projectsContent/ProjectsImageDispaly';
import '../../pages/projects/Projects.css';

export default function Interviews() {
   
    return (
        <div className="traffic-light-container">
            
            <ProjectsImageDispaly/>
        </div>
    );
}
