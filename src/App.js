import './App.css';
import Header from './mycomp/Header';
import Show from './mycomp/Show';
import About from './mycomp/About';
import Footer from './mycomp/Footer';
import Login from './mycomp/Login';
import Search from './mycomp/Search';
import List from './mycomp/List';
import Vlogs from './mycomp/Vlogs';

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
        <Route path="/logins" element={<Login/>}/>   
        <Route path="/searchl" element={<Search/>}/>   
        <Route path="/showl" element={<Show/>}/>   
        <Route path="*" element={<Errorpg/>}/>   
      </Routes>
      <Footer/>
      </Router>
   
    </>
  );
  }

export default App;
