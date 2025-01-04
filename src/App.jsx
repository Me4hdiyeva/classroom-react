import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx'
import { HelmetProvider } from "react-helmet-async";
import Register from "./pages/Ragister.jsx";
import StudentLayout from "./layout/StudentLayout.jsx";
import Student from "./pages/Student.jsx";
import Mainpages from "./pages/Mainpages.jsx";
import Details from "./pages/details.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import TeacherMain from "./pages/TeacherMain.jsx";
import TeacherLayout from "./layout/TeacherLayout.jsx";
import Calendar from "./pages/Calendar.jsx";


function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false); 
  return (
    <HelmetProvider>
      <Routes >
        <Route path="//" element={<TeacherLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher" element={<TeacherMain/>}>
        <Route  index element={<TeacherMain/>}/>
        

        </Route>
        </Route>

        <Route path="/" element={<StudentLayout/>}>
          <Route index element={<Home/>} />
          <Route path="/register" element={<Register/>} />\
          <Route element={<PrivateRoute/>}>


          <Route path="/student" element={<Student/>} >
            <Route index element={<Mainpages/>} />
            <Route path="/student/details/:id" element={<Details/>} />
            <Route path="calendar" element={<Calendar/>}/>
          </Route>
          </Route>
          {/* <Route  path="/student" element={<Student />} /> */}



        </Route>
      </Routes>
    </HelmetProvider>
  )
}

export default App
