import React, { useRef, useState } from "react";
import axios from "axios";

const DeleteUser = () => {
  const [showMsg, setshowMsg] = useState(false);
  const id = useRef("");
  async function handleDelete(e) {
    e.preventDefault();
    setshowMsg(true);

    await axios.delete(`http://localhost:3000/deleteUser/${id.current.value}`, {
      id,
    });

    id.current.value = "";
  }

  setInterval(() => {
    setshowMsg(false);
  }, 2000);
  return (
    <>
      <form onSubmit={handleDelete}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form5Example4"
            className="form-control"
            ref={id}
          />
          <label className="form-label" htmlfor="form5Example4">
            Enter The id
          </label>
        </div>
        <button
          // data-mdb-ripple-init
          type="submit"
          className="btn btn-primary btn-block mb-4"
        >
          Delete
        </button>
      </form>
      {showMsg === true && <h1>Deleted</h1>}
    </>
  );
};

export default DeleteUser;
