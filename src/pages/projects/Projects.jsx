import ButtonsBody from '../../components/buttonsBody/ButtonsBoody'
import './Projects.css'


function Projects() {

    const data = {
    location: 'about',
    buttons: [
        {name: '<project 1>'},
        {name: '<project 2>'}
    ]
    }

    return (
        <div className="body-container">
            <ButtonsBody data={data}/>
        </div>
    )
}

export default Projects
