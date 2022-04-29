import React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import List from '../List/List.jsx'
import './App.css';


function App() {

    useEffect(() => {
        getShoppingList();
    }, [])

    const getShoppingList = () => {
        axios({
            method: 'GET',
            url: '/list'
        }).then ( (response) => {
            console.log('get request is working');
        }).catch ( (err) => {
            console.log('something wrong with get app.jsx', err);
        })
    }

const [shoppingList, setShoppingList] = useState([]);

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
