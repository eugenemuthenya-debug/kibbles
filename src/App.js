import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Signin from './components/Signin';
import MakePayment from './components/MakePayment';
import AddProducts from './components/Addproducts';

function App() {
  // const user=JSON.parse(localStorage.getItem("user"))
  // console.log("user",user)
  return (
    <Router>

      

      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='/makepayment' element={<MakePayment/>}/>
        <Route path='addproducts' element={<AddProducts/>}/>
      </Routes>

    </Router>
  );
}

export default App;
