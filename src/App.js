import './App.css';
import Header from './mycomp/Header';
import Show1 from './mycomp/Show1';
import Show2 from './mycomp/Show2';
import About from './mycomp/About';
import Footer from './mycomp/Footer';
import List from './mycomp/List';
import Vlogs from './mycomp/Vlogs';
import Land from './mycomp/Land';
import Mybook from './mycomp/Mybook';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Errorpg from './mycomp/Errorpg';

function App() {
  return (
    <>
      <Router>
      <Header/>
      <Routes>
        <Route path='/lists' element={<List/>}/>
        <Route path="/vlogs" element={<Vlogs/>}/>   
        <Route path="/abouts" element={<About/>}/>   
        <Route path="/searchl" element={<Land/>}/> 
        <Route path="/showl" element={<Show1/>}/>   
        <Route path="/showi" element={<Show2/>}/>   
        <Route path="/mybook" element={<Mybook/>}/>   
        <Route path="*" element={<Errorpg/>}/>   
      </Routes>
      <Footer/>
      </Router>
   
    </>
  );
  }

export default App;
