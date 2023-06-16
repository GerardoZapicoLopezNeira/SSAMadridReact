
export default function Avatar(props: any) {

    return (
        <div className="single-box text-center avatar">
            <div className="img-area"><img alt="" src={props.url}/></div>
            <div className="info-area">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
