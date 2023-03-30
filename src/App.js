import './App.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Scheduler from './components/Scheduler';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Scheduler />} />
        </Routes>
      </BrowserRouter>
  );
}