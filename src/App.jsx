import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx'
import { HelmetProvider } from "react-helmet-async";
import Register from "./pages/Ragister.jsx";
import StudentLayout from "./layout/StudentLayout.jsx";


function App() {
  return (
    <HelmetProvider>
      <Routes>
        {/* <Route path="/teacher" element={<TeacherLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Route> */}

        <Route path="/" element={<StudentLayout/>}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          
        </Route>
      </Routes>
    </HelmetProvider>
  )
}

export default App