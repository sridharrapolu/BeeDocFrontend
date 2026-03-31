import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routing from "./Routing/Routing";
const App = () => {
  return (
    <div>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeButton={false}
      />
    </div>
  );
};

export default App;