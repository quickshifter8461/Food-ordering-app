import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.2587531&lng=75.78041&restaurantId=${resId}&submitAction=ENTER`
    );
    const response = await data.json();

    setResMenu(response.data);
  };

  if (resMenu === null) return <Shimmer />;

  const {
    name,
    areaName,
    avgRating,
    totalRatingsString,
    sla,
    expectationNotifiers,
    cuisines,
    costForTwoMessage,
  } = resMenu?.cards[2]?.card?.card?.info;

  const { itemCards, title } =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards[1].card.info);
  return (
    <div>
      <div className="card w-75 mb-3">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="d-flex">
            <p className="fw-bold">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                role="img"
                aria-hidden="true"
                strokecolor="rgba(2, 6, 12, 0.92)"
                fillcolor="rgba(2, 6, 12, 0.92)"
                className="me-2"
              >
                <circle
                  cx={10}
                  cy={10}
                  r={9}
                  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                />
                <path
                  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="StoreRating20_svg__paint0_linear_32982_71567"
                    x1={10}
                    y1={1}
                    x2={10}
                    y2={19}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#21973B" />
                    <stop offset={1} stopColor="#128540" />
                  </linearGradient>
                </defs>
              </svg>
              {avgRating} ({totalRatingsString})
            </p>
            <p className="fw-bold ms-3">{costForTwoMessage}</p>
          </div>

          <div className="card-text mb-2">
            <div className="d-flex">
              <div className="ps-2 fw-bold">Outlet</div>
              <div className="ps-2">{areaName}</div>
            </div>
            <div className="d-flex">
              <div className="ps-2 fw-bold">
                {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
              </div>
            </div>
          </div>
          <div className="ps-2 fw-bold mb-3">{cuisines.join(", ")}</div>
          <div className="border rounded p-3 d-flex">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
              alt="DISTANCE_FEE_NON_FOOD_LM"
              aria-hidden="true"
              class="sc-fKWMtX gJQjbk"
            />
            <p className="ps-2 m-2">{expectationNotifiers[0].text}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fs-4 fw-bold">
          {title} ({itemCards.length})
        </div>
        <ul className="list-group ">
          {itemCards.map((item) => (
            <div key={item.card.info.id} className="card mb-3 w-100">
              <div className="row g-0">
                <div className="col-md-4">
                  {item.card.info.imageId ? (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_600,c_fit/${item.card.info.imageId}`}
                      className="img-fluid rounded-start"
                      alt={item.card.info.name}
                    />
                  ) : (
                    <p className="p-5">No image found</p>
                  )}
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title p-5 fs-3">
                      {item.card.info.name}
                    </h5>
                    <p className="card-text p-5 pt-0 fs-4">
                      {item.card.info.description}
                    </p>
                    <p className="card-text p-5 pt-0 fw-bold fs-3">
                      {`RS ${item.card.info.price / 100}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
