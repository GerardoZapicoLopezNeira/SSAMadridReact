import { useState } from 'react'
import TallerPopUp from './TallerPopUp';

export default function Taller(props: any) {

  const [buttonPopUp1, setbuttonPopUp1] = useState(false);
  const [buttonPopUp2, setbuttonPopUp2] = useState(false);
  const [buttonPopUp3, setbuttonPopUp3] = useState(false);

  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="portfolio-item d-block mx-auto">
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <button className="tallBtn" onClick={() => {
                if (props.modal == "portfolio-modal-1") {
                  setbuttonPopUp1(true);
                }
                else if (props.modal == "portfolio-modal-3") {
                  setbuttonPopUp2(true);
                }
                else if (props.modal == "portfolio-modal-7") {
                  setbuttonPopUp3(true);
                }
              }}>{props.title}</button>
            </div>
          </div>
          <img className="img-fluid" src={props.img} alt="" />
        </div>
      </div>
      <TallerPopUp trigger={buttonPopUp1} setTrigger={setbuttonPopUp1} id={"portfolio-modal-1"} title={"Design Thinking"} description={"En este taller de Design Thinking se busca realizar un enfoque práctico de la metodología de innovación Design Thinking. Los participantes aprenderán a partir del trabajo en grupo realizado sobre casos prácticos reales. De esta manera se pretenden trasladar los conceptos básicos para poder desarrollar está metodología en el futuro."} img={"src/img/portfolio/2022/design thinking.png"} />
      <TallerPopUp trigger={buttonPopUp2} setTrigger={setbuttonPopUp2} id={"portfolio-modal-3"} title={"Auto Liderazgo"} description={"Leadership. Que término tan utilizado, ¿no?. Lo encontramos en deportes, trabajo, en la uni... y, sin emabrgo, generalmente estamos bajo la influencia de gente que toma las riendas. ¿Qué hace a un líder ser un buen lider?, ¿Alguna vez has tratado de llevar a cabo un trabajo y has echado en falta alguien con iniciativa? Bien, el primer equipo a tener en cuenta eres tú y tus capacidades.   En esta sesión vamos a dar herramientas útiles para autoexplorarnos y trabajar en nosotros mismos liderandonos nuestra mejor versión "} img={"src/img/portfolio/2022/auto-liderazgo.jpg"} />
      <TallerPopUp trigger={buttonPopUp3} setTrigger={setbuttonPopUp3} id={"portfolio-modal-7"} title={"habilidades de comunicación"} description={"Presentar es simple, después de todo solo estás hablando, justo lo que haces todo el día. Sin embargo, puede ser extremadamente estresante, puedes sentirte juzgado y ansioso, con miedo de que no salga como esperas. Todos hemos estado en esta situación y es posible trabajar para que resulte más fácil. Cuando te das cuenta de qué habilidades de presentación debes mejorar y descubres tus fortalezas, puedes aprovecharlas para sentirte más cómodo al presentar. Y eso es lo que vamos a hacer. Además, aprenderemos sobre el lenguaje corporal y algunos consejos de preparación. Después de todo, solo estás hablando, como cualquier otro día, no hay nada de qué preocuparse. "} img={"src/img/portfolio/2022/creatividad.jpg"} />
      </>
  )
}
