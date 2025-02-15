import { Routes, Route } from "react-router-dom";
import Lobby from "./pages/lobby";
import Home from './pages/home'
import Register from "./auth/register";


export default function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/register" element={<Register />} />
    </Routes>
   
  );
}
