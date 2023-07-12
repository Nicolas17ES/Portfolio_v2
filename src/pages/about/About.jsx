import ButtonsBody from '../../components/buttonsBody/ButtonsBoody'
import './About.css'

function About() {

const data = {
   location: 'about',
   buttons: [
      {name: '<carrer>'},
      {name: '<hobbies>'}
   ]
}




  return (
      <div className="about-container">
         <ButtonsBody data={data}/>
      </div>
  );
}

export default About;