
export default function Header(props:any) {

  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container">
        <img className="img-fluid mb-8 d-block mx-auto" src={props.img} alt="" />
      </div>
    </header>
  )
}
