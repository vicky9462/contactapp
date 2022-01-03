
import { ToastContainer } from 'react-toastify';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}>
           </Route>
        <Route exact path="/add" element={<AddContact/>}>
        </Route>

        <Route path="/edit/:id" element={<EditContact/>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
