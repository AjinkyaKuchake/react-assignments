import "./App.css";
import ApiCallRenderDataTable from "./components/ApiCallRenderDataTable";
import CardComponent from "./components/CardComponent";
import NavbarComponent from "./components/NavbarComponent";
import RenderDataTable from "./components/RenderDataTableComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      {/* <CardComponent/> */}
      {/* <RenderDataTable/> */}
      <ApiCallRenderDataTable/>

    </>
  );
}

export default App;
