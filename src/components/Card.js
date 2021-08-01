
function Card(props){
    return (
        <div className="col-12 p-3 border my-3 col-md-3">
                <i className={props.icon}/>
                <h3>{props.cH}</h3>
                <p>{props.para}</p>
        </div>
    )
}
export default Card;