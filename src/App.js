import "./App.css";
import ApiCallRenderDataTable from "./pages/ApiCallRenderDataTable";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import ErrorPage from "./pages/ErrorPage";
import Edit from "./pages/Edit";
import ViewRecord from "./pages/ViewRecord";
import Login from "./pages/Login";
import { Button } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  //const [showNav, setShowNav] = useState(false);
  const myState = useSelector((state) => state.authReducer);
  console.log("My State:", myState);
  const signedIn = useSelector((state) => state.authReducer.isSignedIn);
  console.log("Am I Signed In:", signedIn);
  //const signedIn = useSelector((state) => state.isSignedIn);
  return (
    <>
      {/* <Button onClick={() => setShowNav(!showNav)}>Show Navbar</Button> */}
      <Router>
        {signedIn && <NavbarComponent />}
        <Routes>
          <Route path="/home" element={<ApiCallRenderDataTable />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view-record/:id" element={<ViewRecord />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<ErrorPage />}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
