import "./App.css";
import ProductDetail from './productDetail'
// import Navcompo from "./Navcompo";
import  Catalogue  from "./Catalogue";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navcomp from "./Navcomp";
//  import  {StoreComponents}  from './component/StoreComponents';

function App() {
  return (
    <>
    <Navcomp/>
    <div className="App ">
     <Router>
        <Routes>
           <Route path="/" Component={Catalogue} exact/>
           <Route path="/Product/:id" Component={ProductDetail}/>
           <Route/>
        </Routes>
     </Router>
    </div>
    </>

  );
}

export default App;