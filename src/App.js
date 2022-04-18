import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Login from './component/Auth/Login/Login';
import RequirAuth from './component/Auth/RequirAuth/RequirAuth';
import Signup from './component/Auth/Signup/Signup';
import Blogs from './component/Blogs/Blogs';
import CheckOut from './component/CheckOut/CheckOut';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Services from './component/Services/Services';
import Footer from './component/shared/Footer/Footer';
import Header from './component/shared/Header/Header';

function App() {
  return (
    <div>
      
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/services' element={<Services></Services>}/>
        <Route path='/checkout' element ={
          <RequirAuth>
            <CheckOut></CheckOut>
          </RequirAuth>
        }/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/signup' element={<Signup></Signup>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
