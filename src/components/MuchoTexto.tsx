const styles = {
    fontSize: "21px",
    color: "black"
};


export default function MuchoTexto(props:any) {

    return (
        <div className="text-center mx-2">
            <p style={styles}>{props.text}</p>
        </div>
    )
}
