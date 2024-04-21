import logo from './logo.svg';
import './App.css';
import Add from './pages/Add';
import { Route, RouterProvider, Routes, createBrowserRouter,BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';
import Update from './pages/Update';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Sign from './pages/Sign';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes >
        <Route path='/add' element={<Add />} />
        <Route path='/update' element={<Update />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Home />} />
        <Route path='/logout' element={<h1>LogOut</h1>} />
        <Route path='/sign' element={<Sign />} />
      </Routes>
      </BrowserRouter> 
      <Footer />
    </div> 
  );
}



export default App;
