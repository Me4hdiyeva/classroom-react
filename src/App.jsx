import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx'
import { HelmetProvider } from "react-helmet-async";
import Register from "./pages/Ragister.jsx";
import StudentLayout from "./layout/StudentLayout.jsx";
import Student from "./pages/Student.jsx";
import Mainpages from "./pages/Mainpages.jsx";
// import Details from "./pages/Details.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import TeacherMain from "./pages/TeacherMain.jsx";
import TeacherLayout from "./layout/TeacherLayout.jsx";
import Calendar from "./pages/Calendar.jsx";
import AllLayout from "./layout/AllLayout.jsx";
import Tasks from "./pages/Tasks.jsx";
import Teacherhome from "./pages/Teacherhome.jsx";
// import Details from "./pages/details.jsx";
import Classes from "./pages/Classes.jsx";
import Courses from "./pages/Courses.jsx";
import Details from "./pages/Details.jsx";
import AddTasks from "./pages/AddTasks.jsx";
import Data from "./pages/Data.jsx";
import Settings from "./pages/Settings.jsx";
import CalendarStudents from "./pages/CalendarStudents.jsx";
import DetailsTask from "./pages/DetailsTask.jsx";
import StudentsForTeacher from "./pages/StudentsForTeacher.jsx";


function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<AllLayout />}  >
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />

          
        </Route>




        <Route path="/teachers/:username" element={<TeacherLayout />}>
          {/* <Route index element={<TeacherMain />} /> */}
          <Route index element={<Teacherhome/>} />
          <Route path="classes" element={<  Classes />} />
          <Route path="courses" element={<  Courses />} />
          <Route path="tasks" element={< AddTasks/>} />
          <Route path="date" element={<Data/>} />
          <Route path="settings" element={<Settings />} />
          <Route path="studentsteach" element={<StudentsForTeacher />} />

          


        </Route>


        <Route path="/student/:username" element={<StudentLayout />}>
          <Route index element={<Mainpages />} />
          <Route path="tasks/details/:id" element={<Details/>} />
          <Route path="tasks/details/:id/detailstask/:taskId" element={<DetailsTask />} />


          <Route path="calendarstudents" element={<CalendarStudents />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="settings" element={<Settings />} />



          {/* <Route  path="/student" element={<Student />} /> */}
        </Route>

      </Routes>
    </HelmetProvider>
  )
}

export default App
