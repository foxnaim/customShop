import React from 'react'
import SideBar from './SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UniqueCustom from './pages/uniqueCustom';
import NoteS from './pages/NoteS';
import AboutUs from './pages/aboutUs';
import Team from './pages/team';
import Graph from './pages/Graph';
import Messages from './pages/Messages';

const Header = () => {
  return (
<BrowserRouter>
<SideBar>
    <Routes>
      <Route path='/uniqueCustom' element={<UniqueCustom/>}/>
      <Route path='/NoteS' element={<NoteS/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path='/Graph' element={<Graph/>}/>
      <Route path='/Messages' element={<Messages/>}/>
    </Routes>
    </SideBar>
</BrowserRouter>
  );
};

export default Header;

