import Navbar from './components/navbar/navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home/home';
import About from './Pages/about/About'
import event from './Pages/events/event'
import contact from './components/Contacts/contact'
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
        <Routes>
          <Route path='/about' Component={About}/>
        </Routes>
        <Routes>
          <Route path='/events' Component={event}/>
        </Routes>
        <Routes>
          <Route path='/contact' Component={contact}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
