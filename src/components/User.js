import { useState } from "react";

const User = ({name, location}) => {
  const [count, setCount]= useState(0)
  
  return (
    <div className="card admin">
      <div className="card-body">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
          setCount(count+1)
        }}>Increment</button>
        <h2 className="card-title">User Name: {name}</h2>
        <h3 className="card-text">User Location: {location}</h3>
      </div>
    </div>
  );
};

export default User;
