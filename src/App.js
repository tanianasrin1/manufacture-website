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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReviews from './Pages/Dashboard/MyReviews';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUser from './Pages/Dashboard/AllUser';
import AddTools from './Pages/Dashboard/AddTools';
import ManageTools from './Pages/Dashboard/ManageTools';

function App() {
  return (
    <div>
       <Navbar></Navbar>

       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/service/:serviceId" element={
           <RequireAuth>
             <Purchase></Purchase>
           </RequireAuth>
         }></Route>

         <Route path="/dashboard" element={

            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth> 

         }>
           <Route index element={<MyOrder></MyOrder>}></Route>
           <Route path="review" element={<MyReviews></MyReviews>}></Route>
           <Route path="profile" element={<MyProfile></MyProfile>}></Route>
           <Route path="allUser" element={<AllUser></AllUser>}></Route>
           <Route path="addTools" element={<AddTools></AddTools>}></Route>
           <Route path="manageTools" element={<ManageTools></ManageTools>}></Route>
         </Route>
 

         <Route path="/blogs" element={<Blogs></Blogs>}></Route>
         <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/signup" element={<SignUp></SignUp>}></Route>
         <Route path="*" element={<NotFound></NotFound>}></Route>
       </Routes>
       
       <Footer></Footer>
    </div>
  );
}

export default App;
