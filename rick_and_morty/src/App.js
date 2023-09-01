import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const email= 'miguelitotello17@gmail.com';
const password= '42259234';

function App() {
   const location = useLocation ();
   const navigate = useNavigate ();
   const [characters, setCharacters] = useState ([]);
   const [access, setAccess] = useState(false);
   
   const login = (userData) => {
      if(userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      if (!access) {
         navigate('/');
      }
   }, [access, navigate]);


   const onSearch = (id) => {
         axios(`https://rickandmortyapi.com/api/character/${id}`) 
         .then (({data}) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
      character.id !== Number(id))
      setCharacters(charactersFiltered)
   }


   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
         }

         <Routes>
            <Route path='/' element = {<Form login={login}/>} />
            <Route path='/home' element = {<Cards characters= {characters} onClose={onClose}/> }/>
            <Route path='/about' element = {<About/>} />
            <Route path='/detail/:id' element = {<Detail/>} />
            <Route path='/favorites' element= {<Favorites/>} />
         </Routes>
      </div>
   );
}

export default App;
