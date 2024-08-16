import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-link">
        <ul>
          <li><a href="/" target="_blank" >Home</a></li>
          <li><a href="/" target="_blank" >About</a></li>
          <li><a href="/" target="_blank" >Contact</a></li>
          <li><a href="/" target="_blank" >Cart</a></li>
        </ul>
      </div>
    </div>
  );
};

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

const Footer = ()=>{
  return(
    <div className="footer">
      <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="logo" />
      <p>COPYRIGHT Company Vishnu Prabhakaran</p>
    </div>
  )
}

const restaurantList = [
  {
    name: "Paragon Restaurant",
    cuisines: ["Kerala", "Indian", "Seafood"],
    costForTwo: "₹500",
    ratings: 4.7,
    bestDishImage: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
    location: "Kannur Road, Calicut",
  },
  {
    name: "Zains Hotel",
    cuisines: ["Kerala", "Mughlai"],
    costForTwo: "₹400",
    ratings: 4.5,
    bestDishImage: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg",
    location: "Convent Cross Road, Calicut",
  },
  {
    name: "Sagar Restaurant",
    cuisines: ["Indian", "Chinese"],
    costForTwo: "₹450",
    ratings: 4.3,
    bestDishImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Hotel Rahmath",
    cuisines: ["Kerala", "Mughlai", "Arabian"],
    costForTwo: "₹550",
    ratings: 4.6,
    bestDishImage: "https://images.pexels.com/photos/616353/pexels-photo-616353.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Kingsbay Restaurant",
    cuisines: ["Continental", "Seafood"],
    costForTwo: "₹900",
    ratings: 4.4,
    bestDishImage: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg",
    location: "Gandhi Road, Calicut",
  },
  {
    name: "Adaminte Chayakkada",
    cuisines: ["Kerala", "Malabar"],
    costForTwo: "₹350",
    ratings: 4.2,
    bestDishImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Hotel Salkara",
    cuisines: ["Kerala", "South Indian"],
    costForTwo: "₹400",
    ratings: 4.1,
    bestDishImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    location: "Kozhikode, Calicut",
  },
  {
    name: "Mezban Restaurant",
    cuisines: ["Indian", "Continental"],
    costForTwo: "₹600",
    ratings: 4.3,
    bestDishImage: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
    location: "Ram Mohan Road, Calicut",
  },
  {
    name: "Café 17",
    cuisines: ["Cafe", "Italian", "Continental"],
    costForTwo: "₹700",
    ratings: 4.5,
    bestDishImage: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Hotel Bombay",
    cuisines: ["Kerala", "Indian"],
    costForTwo: "₹350",
    ratings: 4.0,
    bestDishImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    location: "SM Street, Calicut",
  },
  {
    name: "M-Grill",
    cuisines: ["Indian", "Chinese", "Seafood"],
    costForTwo: "₹750",
    ratings: 4.4,
    bestDishImage: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
    location: "RP Mall, Calicut",
  },
  {
    name: "Bun Club",
    cuisines: ["Cafe", "Fast Food"],
    costForTwo: "₹300",
    ratings: 4.1,
    bestDishImage: "https://images.pexels.com/photos/2825858/pexels-photo-2825858.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Topform Restaurant",
    cuisines: ["Indian", "Chinese", "Kerala"],
    costForTwo: "₹500",
    ratings: 4.2,
    bestDishImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Pasta Hub",
    cuisines: ["Italian", "Continental"],
    costForTwo: "₹600",
    ratings: 4.3,
    bestDishImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    location: "RP Mall, Calicut",
  },
  {
    name: "Café Coffee Day",
    cuisines: ["Cafe", "Beverages"],
    costForTwo: "₹400",
    ratings: 4.0,
    bestDishImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Bun Cafe",
    cuisines: ["Cafe", "Fast Food"],
    costForTwo: "₹300",
    ratings: 4.1,
    bestDishImage: "https://images.pexels.com/photos/2169519/pexels-photo-2169519.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Chick King",
    cuisines: ["Fast Food", "Fried Chicken"],
    costForTwo: "₹300",
    ratings: 4.1,
    bestDishImage: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Ruchi Restaurant",
    cuisines: ["Kerala", "Indian"],
    costForTwo: "₹450",
    ratings: 4.2,
    bestDishImage: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
    location: "Mavoor Road, Calicut",
  },
  {
    name: "Hotel Arya Bhavan",
    cuisines: ["South Indian", "Vegetarian"],
    costForTwo: "₹300",
    ratings: 4.0,
    bestDishImage: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
    location: "Kallai Road, Calicut",
  },
  {
    name: "The Light House",
    cuisines: ["Indian", "Continental"],
    costForTwo: "₹900",
    ratings: 4.5,
    bestDishImage: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg",
    location: "Calicut Beach, Calicut",
  }
];




const Body = () => {
    return (
        <div className="container">
            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="cardcontainer">
                {restaurantList.map((resturant, index)=>(
                  <Card key={index} currentRes={resturant}/>
                ))}
          
            </div>
        </div>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
