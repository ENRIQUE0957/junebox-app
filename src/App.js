import Header from "./components/Header"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Playlist from "./pages/Playlist";
import { Fragment } from "react";



function App() {
  

 

  
  return (
   <Fragment>
    <div>
      <BrowserRouter>
      <Routes >
      
      <Route index element = {<Header/>}></Route>
      <Route path = "/Playlist" element = {<Playlist/>}></Route>

      </Routes>
      
      
      </BrowserRouter>
      
     <button></button>
    
    </div>
    </Fragment>
    
  );
}

export default App;