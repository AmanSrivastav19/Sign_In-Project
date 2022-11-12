import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Details } from './components/Details';
import { Error } from './components/Error';


function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/details" element={<Details/>} />
    <Route path="*" element={<Error/>} />
   </Routes>
   
   </BrowserRouter>
  );
}


export default App;
