import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
       <Navbar></Navbar>

       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="blogs" element={<Blogs></Blogs>}></Route>
         <Route path="blogs" element={<Blogs></Blogs>}></Route>
         <Route path="login" element={<Login></Login>}></Route>
         <Route path="/*" element={<NotFound></NotFound>}></Route>
       </Routes>
       
    </div>
  );
}

export default App;
