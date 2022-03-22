import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import tuiter from "./components/tuiter"
import labs from "./components/labs"
// import {BrowserRouter} from "react-router-dom";
// function App() {
//   return (
//       <BrowserRouter>
//         <HelloWorld/>
//         <labs/>
//         <tuiter/>
//       </BrowserRouter>
// );
// }
import {BrowserRouter, Route, Routes}
    from "react-router-dom";

function App() {
    return (
        // <HelloWorld><HelloWorld/>
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="components/hello-world"
                           element={<HelloWorld/>}/>
                    <Route path="components/labs"
                           element={<labs/>}/>
                    <Route path="components/tuiter"
                           element={<tuiter/>}/>
                </Routes>
                <HelloWorld/>
            </div>
        </BrowserRouter>
    );
}
export default App;
