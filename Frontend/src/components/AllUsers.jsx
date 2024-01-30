import axios from "axios";
import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [data, setdata] = useState("");

  const fetchData = async () => {
    let raw = await fetch("http://localhost:3000/users");
    let json = await raw.json();

    setdata(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "5%",
        }}
      >
        {data === "" ? (
          <h1>No Users</h1>
        ) : (
          data.map((item) => {
            return (
              <div className="card" key={item._id} style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.fullname}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {item.email}
                  </h6>
                  <p className="card-text">Your age is : {item.age}</p>
                  <p className="card-text">Your id is : {item._id}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default AllUsers;
