import axios from "axios";
import React, { useRef } from "react";

const Update = () => {
  const fullname = useRef(null);
  const email = useRef(null);
  const age = useRef(null);
  const id = useRef("");

  async function handleUpdate(e) {
    e.preventDefault();
    const user = {
      fullname: fullname.current.value,
      email: email.current.value,
      age: age.current.value,
    };
    await axios
      .put(`http://localhost:3000/updateUser/${id.current.value}`, user)
      .catch((err) => console.log(err));
  }

  return (
    <form style={{ width: "22rem" }} onSubmit={handleUpdate}>
      {/* Name input */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input
          type="text"
          id="form5Example1"
          className="form-control"
          ref={fullname}
        />
        <label className="form-label" htmlFor="form5Example1">
          Full name
        </label>
      </div>
      {/* Email input */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input
          type="email"
          id="form5Example2"
          className="form-control"
          ref={email}
        />
        <label className="form-label" htmlFor="form5Example2">
          Email address
        </label>
      </div>
      {/* Age */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input
          type="number"
          id="form5Example3"
          className="form-control"
          ref={age}
        />
        <label className="form-label" htmlFor="form5Example3">
          Age
        </label>
      </div>

      {/* id */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input
          type="text"
          id="form5Example4"
          className="form-control"
          ref={id}
        />
        <label className="form-label" htmlFor="form5Example4">
          user id
        </label>
      </div>

      {/* Submit button */}
      <button
        data-mdb-ripple-init
        type="submit"
        className="btn btn-primary btn-block mb-4"
      >
        Update
      </button>
    </form>
  );
};

export default Update;
