
export default function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
      
      <a className="navbar-brand js-scroll-trigger ml-2" href="#page-top ml-0">Soft Skills Academy Madrid</a>
      <button className="navbar-toggler navbar-toggler-right text-uppercase bg-orange text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#descripcion">Talleres</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#horario">Horario</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#team-trainers">Trainers</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-4 rounded js-scroll-trigger" href="#apuntate">Apuntate</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#team">Conócenos</a>
          </li>
          
        </ul>
      </div>
    
  </nav>
    
  );
}
 