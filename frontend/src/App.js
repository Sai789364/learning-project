import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import MyCourses from "./pages/MyCourses";
import PaymetGateWay from "./pages/PaymetGateWay";
function App() {
  return (
    <>
      <BrowserRouter>
      
    <Navbar/>
      <Routes>
      <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/course-details" element={<CourseDetail />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/purchase-course" element={<PaymetGateWay />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
