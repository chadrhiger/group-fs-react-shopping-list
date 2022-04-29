import React from 'react';

import Header from '../Header/Header.jsx'
import InputForm from '../InputForm/InputForm.jsx';
import './App.css';



function App() {



  const   postFunc = (objectToPost) =>{

        axios({
            method:'POST',
            url: '/list',
            data: objectToPost
        })
        .then(function (results){
            console.log(results)
        })
        .catch(function (error){
            console.log(error)
        })

  }





    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <InputForm />
            </main>
        </div>
    );
}

export default App;
