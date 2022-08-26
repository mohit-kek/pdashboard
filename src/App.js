import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts';
import Customers from './components/Customers';
import Employees from './components/Employees';
import Home from './components/Home';
import Orders from './components/Orders';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Kanban from './components/Kanban';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="nav">
          <div className="navbar">
            <Navbar />
          </div>

          <div>
            <Routes>

              <Route path='/' element={(<Home />)} />
              <Route path='/employees' element={(<Employees />)} />
              <Route path='/customers' element={(<Customers />)} />
              <Route path='/kanban' element={(<Kanban />)} />
              <Route path='/orders' element={(<Orders />)} />
              <Route path='/charts' element={(<Charts />)} />

            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
