import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Home";
import StudentsView from "./components/students/StudentsView";
import NavBar from "./components/common/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddStudent from "./components/students/AddStudent";
import EditStudent from "./components/students/EditStudent";
import StudentPofile from "./components/students/StudentProfile";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route exact path={"/"} element={<Home></Home>}></Route>
                <Route exact path={"/all"} element={<StudentsView></StudentsView>}></Route>
                <Route exact path={"/add"} element={<AddStudent></AddStudent>}></Route>
                <Route exact path={"/edit/:id"} element={<EditStudent></EditStudent>}></Route>
                <Route exact path={"/view/:id"} element={<StudentPofile></StudentPofile>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
