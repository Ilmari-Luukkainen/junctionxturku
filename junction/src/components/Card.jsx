const Card = ({ image, name }) => {

    return(
        <div className="partner-card">
            <img src={image} alt={name} height={80} /> 
        </div>
    )
}
export default Card;