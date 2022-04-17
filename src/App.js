import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './component/CheckOut/CheckOut';
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
        <Route path='/checkout' element ={<CheckOut></CheckOut>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
