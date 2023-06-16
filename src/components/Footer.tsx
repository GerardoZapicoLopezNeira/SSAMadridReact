
export default function Footer() {
    return (
        <>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Encuéntranos</h4>
                            <p className="lead mb-0">Av. Complutense, 30, 28040 Madrid
                                <br />Local A-208-L
                                <br />ssa@eestec.es</p>
                        </div>
                        <div className="col-md-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Síguenos</h4>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.facebook.com/eestecLCMadrid/">
                                        <i className="fab fa-fw fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://instagram.com/ssamadrid?utm_source=ig_profile_share&igshid=16epvoueckkn6">
                                        <i className="fab fa-fw fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://twitter.com/eurielec">
                                        <i className="fab fa-fw fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-uppercase mb-4">Más sobre nosotros</h4>
                            <p className="lead mb-0">También estamos en 
                                <a href="https://www.eurielec.etsit.upm.es/"> EURIELEC</a>.</p>
                            <p className="lead mb-0">Somos
                                <a href="https://eestec.es/"> EESTEC LC MADRID</a>.</p>
                            <p className="lead mb-0">Pertenecemos a
                                <a href="https://eestec.net/"> EESTEC</a>.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container">
                    <small>Copyright &copy; EESTEC LC Madrid</small>
                </div>
            </div>
        </>
    )
}
