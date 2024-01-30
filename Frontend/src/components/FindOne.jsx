import axios from "axios";
import React, { useRef, useState } from "react";

const FindOne = () => {
  const [item, setitem] = useState("");
  const id = useRef();
  async function handleFindOne(e) {
    e.preventDefault();
    await axios(`http://localhost:3000/user/${id.current.value}`)
      .then((res) => setitem(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form onSubmit={handleFindOne}>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="form5Example1"
            className="form-control mb-4"
            ref={id}
            placeholder="Enter the id"
          />

          <button
            data-mdb-ripple-init
            type="submit"
            className="btn btn-primary btn-block mb-4"
          >
            Find
          </button>
        </div>
      </form>
      {item === "" ? null : (
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
      )}
    </>
  );
};

export default FindOne;
