import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
       <Navbar></Navbar>

       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/purchase/:purchaseId" element={
           <RequireAuth>
             <Purchase></Purchase>
           </RequireAuth>
         }></Route>
         <Route path="/blogs" element={<Blogs></Blogs>}></Route>
         <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/signup" element={<SignUp></SignUp>}></Route>
         <Route path="*" element={<NotFound></NotFound>}></Route>
       </Routes>
       
       {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
