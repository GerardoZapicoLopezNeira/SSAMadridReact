import NavBar from './components/NavBar'
import './App.css'
import Header from './components/Header'
import Divisors from './components/Divisors'
import MuchoTexto from './components/MuchoTexto'
import Taller from './components/Taller'
import logo from './img/logo2022-temp.jpg'
import Apuntate from './components/Apuntate'
import Avatar from './components/Avatar'
import Footer from './components/Footer'
import TallerPopUp from './components/TallerPopUp'

function App() {

  return (
    <>
      <NavBar />
      <Header img={logo} />
      <section className="portfolio" id="descripcion">
        <div className="container">
          <Divisors title={"TALLERES"} />
          <MuchoTexto text={"En un mercado laboral cada vez más competitivo y cambiante en el que hace falta algo más que experiencia para destacar, entran en juego las soft skills, aquellas habilidades que definen cómo nos comunicamos, gestionamos y desarrollamos actividades grupales, resolvemos conflictos o cómo motivamos y escuchamos a nuestros compañeros."} />
          <MuchoTexto text={"Somos conscientes de que estas habilidades siguen siendo subestimadas por los estudiantes y por nuestro sistema educativo, ya que no se suelen impartir en ningún aula, pero también somos conscientes de todos los beneficios que aportan. Por ello hemos organizado talleres por y para estudiantes universitarios, que te ayudarán a desarrollar estas habilidades de forma inmersiva, fácil, práctica y divertida."} />
          <MuchoTexto text={"¡Apúntate a estas jornadas, podrás aprender cosas que no se dan en la Universidad! "} /><MuchoTexto text={"Esperamos verte pronto, "} /><MuchoTexto text={"SSA LC Madrid."} />
          <div className="row">
            <Taller title={"DESIGN THINKING"} img={"src/img/portfolio/2022/design thinking.png"} modal={"portfolio-modal-1"}/>
            <Taller title={"LIDERAZGO"} img={"src/img/portfolio/2022/auto-liderazgo.jpg"} modal={"portfolio-modal-3"}/>
            <Taller title={"CREATIVIDAD"} img={"src/img/portfolio/2022/creatividad.jpg"} modal={"portfolio-modal-7"}/>
          </div>
        </div>
      </section>
      <section className="bg-primary text-secondary mb-0" id="horario">
        <div className="container">
          <Divisors title={"HORARIOS"} />
          <MuchoTexto text={"Los organizadores creemos que la riqueza esta en la variedad y los participantes debéis ser los que elijáis que habilidades mejorar, por eso cada día ofreceremos dos cursos, uno por la mañana y otro por la tarde."} />
          <img className="img-fluid mt-5 d-block mx-auto" src="src\img\Horario SSA 20-21.png" />
        </div>
      </section>
      <section id="team-trainers">
        <div className="container">
          <Divisors title={"TRAINERS"} />
        </div>
        <div className="avatar-container">
          <Avatar name={"Álvaro Araujo"} description={"Associate Professor at ETSIT"} url={"src/img/avatar/2022/Copia de araujo.png"} />
          <Avatar name={"Irene Marbán"} description={"Trainer EESTEC 12th generation LC Madrid"} url={"src/img/avatar/2022/Copia de irene.png"} />
          <Avatar name={"Mario García"} description={"LC Madrid"} url={"src/img/avatar/2022/Copia de mario.png"} />
          <Avatar name={"Andrea Sabio"} description={"Socia Directora de Dynamis"} url={"src/img/avatar/andrea_sabio.png"} />
        </div>
      </section>
      <section id="apuntate">
        <div className="container">
          <Divisors title={"APÚNTATE"} />
          <Apuntate />
        </div>
      </section>
      <section id="team">
        <div className="container">
          <Divisors title={"Nuestro equipo"} />
        </div>
        <div className="avatar-container">
          <Avatar name={"Jacobo Díez"} description={"Main Organizer & IT"} url={"src/img/avatar/2022/Jacobo.png"} />
          <Avatar name={"Juan Cibrán"} description={"Logistics Team"} url={"src/img/avatar/2022/cibran.png"} />
          <Avatar name={"Noelia Rodriguez"} description={"Public Relations & RRSS"} url={"src/img/avatar/2022/Noe.png"} />
        </div>
      </section>
      <Footer />
      
    </>
  )
}

export default App
