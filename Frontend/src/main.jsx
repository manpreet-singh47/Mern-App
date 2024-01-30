import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Create from "./components/Create.jsx";
import Update from "./components/Update.jsx";
import AllUsers from "./components/AllUsers.jsx";
import DeleteUser from "./components/DeleteUser.jsx";
import FindOne from "./components/FindOne.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path={"/"} element={<Home />} />
      <Route path={"/create"} element={<Create />} />
      <Route path={"/update"} element={<Update />} />
      <Route path={"/users"} element={<AllUsers />} />
      <Route path={"/delete"} element={<DeleteUser />} />
      <Route path={"/findOne"} element={<FindOne />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
