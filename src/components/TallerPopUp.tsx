const styles = {
  fontSize: "21px",
  color: "black"
};
export default function TallerPopUp(props:any) {
    
  return (props.trigger) ? (
    
        <div className="portfolio-modal-dialog bg-white">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-secondary text-uppercase mb-0">{props.title}</h2>
                <hr className="star-dark mb-5"/>
                <img className="img-fluid mb-5" src={props.img} alt=""/>
                <p className="mb-5" style={styles}>{props.description}</p>
                <button className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" onClick={()=> props.setTrigger(false)}>
                  <i className="fa fa-close"></i>
                  Cerrar Taller</button>
              </div>
            </div>
          </div>
        </div>
  ) : <></>;
}
