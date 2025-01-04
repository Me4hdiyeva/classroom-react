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
import AllLayout from "./layout/AllLayout.jsx";
import Tasks from "./pages/Tasks.jsx";


function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<AllLayout />}  >
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>




        <Route path="/teachers" element={<TeacherLayout />}>
          <Route index element={<TeacherMain />} />
        </Route>


        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Mainpages />} />
          <Route path="students/details/:id" element={<Details />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="tasks" element={<Tasks />} />


          {/* <Route  path="/student" element={<Student />} /> */}
        </Route>

      </Routes>
    </HelmetProvider>
  )
}

export default App
