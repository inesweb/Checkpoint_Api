import React, { useState, useEffect } from "react";

import axios from "axios";
import UserPhoto from "../User_icon.png"

function UserList() {
  const [users, setUsers] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers({ hits: data });
    };
    fetchData();
  }, [setUsers]);

  return (
    <div className="random-user">
      <ul>
        {users.hits &&
          users.hits.map(item => (
            <span  key={item.id}
            className="collection-item left-align red lighten-3">
          <h5 className="title">User ID: {item.id}</h5>
          <div className="user-img">
                <img src={UserPhoto} />
                </div>
          <div className="user-details">
                <div>
                    <strong className="details"> Name: </strong> {item.name}
                 </div>
                                        
                <div>
                    <strong className="details" > Username:</strong> {item.username}
                </div>
                <div>
                    <strong className="details"> Email:</strong> {item.email}
                 </div>
                <div>
                     <strong className="details"> Adress:</strong> {`${item.address.street}, ${item.address.city}`}
                 </div>
                 <div>
                     <strong className="details" > Phone:</strong> {item.phone}
                </div>
                <div>
                    <strong className="details"> Website:</strong>  {item.website}
                </div>
                <div>
                    <strong className="details" > Company:</strong> {item.company.name}
                    </div>
            </div> 
              

            </span>
          ))}
      </ul>
    </div>
  );
}

export default UserList;