import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'; 

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="¡Bienvenidos a nuestra tienda online!" />
        </div>
    );
};

export default App;