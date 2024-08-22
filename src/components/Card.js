const Card = ({currentRes}) => {
    return(
        <div className="card">
            <img className="cardImage" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${currentRes.info.cloudinaryImageId}`} alt={currentRes.info.name} />
            <div className="cardBody">
                <h3>{currentRes.info.name}</h3>
                <p>{currentRes.info.costForTwo}</p>
                <p>Rating: {currentRes.info.avgRating}</p>
                <p>Cuisines: {currentRes.info.cuisines.join(", ")}</p>
                <p>Location: {currentRes.info.areaName}</p>
            </div>
        </div>
    )
}

export default Card