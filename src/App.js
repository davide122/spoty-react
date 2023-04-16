import logo from './logo.svg';
import './App.css';
import MyNav from './Component/MyNav';
import MyFooter from './Component/MyFooter';
import MyMain from "./Component/MyMain.jsx"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ArtistPage from './Component/ArtistPage';


function App() {
  return (
    <BrowserRouter>
    <>
    <MyNav></MyNav>
    <MyFooter></MyFooter>

    <Routes>
<Route path='/' element={<MyMain></MyMain>}/>
<Route path='/artist/:id' element={<ArtistPage></ArtistPage>}/>
    </Routes>
   
   
   
   </>
   </BrowserRouter>
  );
}

export default App;
