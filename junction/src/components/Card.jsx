import React from "react";

interface CardProps{
    image: String;
}

const Card: React.FC<CardProps> = ({ image }) => {

    return(
        <div>
            <Image src={image} alt={image} fill style=({objectFit: 'cover'}) /> 
        </div>
    )
}
export default Card;