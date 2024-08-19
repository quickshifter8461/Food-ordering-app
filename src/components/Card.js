const Card = ({currentRes}) => {
  
    return(
        <div className="card">
            <img className="cardImage" src={currentRes.bestDishImage} alt="Burger King" />
            <div className="cardBody">
                <h3>{currentRes.name}</h3>
                <p>{currentRes.costForTwo} For Two People</p>
                <p>Rating: {currentRes.ratings}</p>
                <p>Cuisines: {currentRes.cuisines.join(", ")}</p>
                <p>Location: {currentRes.location}</p>
            </div>
        </div>
    )
}

export default Card