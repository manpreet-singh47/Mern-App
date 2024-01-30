import React, { useRef, useState } from "react";
import axios from "axios";

const Create = () => {
  const [showMsg, setshowMsg] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const ageRef = useRef(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowMsg(true);

    const user = {
      fullname: nameRef.current.value,
      email: emailRef.current.value,
      age: Number(ageRef.current.value),
    };

    await axios
      .post("http://localhost:3000/create", user)
      .then((result) => {
        setRes(result.data._id);
      })
      .catch((err) => {
        console.log(err);
      });

    nameRef.current.value = "";
    emailRef.current.value = "";
    ageRef.current.value = "";
  };

  setInterval(() => {
    setshowMsg(false);
  }, 2000);

  return (
    <>
      <form style={{ width: "22rem" }} onSubmit={handleSubmit}>
        {/* Name input */}
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="form5Example1"
            className="form-control"
            ref={nameRef}
          />
          <label className="form-label" htmlFor="form5Example1">
            Full name
          </label>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="email"
            id="form5Example2"
            className="form-control"
            ref={emailRef}
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
            className="form-control "
            ref={ageRef}
          />
          <label className="form-label" htmlFor="form5Example3">
            Age
          </label>
        </div>

        {/* Submit button */}
        <button
          data-mdb-ripple-init
          type="submit"
          className="btn btn-primary btn-block mb-4"
        >
          Create
        </button>
      </form>
      {showMsg === true && <h1>Submitted</h1>};
    </>
  );
};
export default Create;
