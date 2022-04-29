import {useState} from 'react';
import './InputForm.css';



function InputForm({postFunc}){

    const [item, setItem]=useState('');
    const [quantity, setQuantity]=useState('');
    const [unit, setUnit]=useState('');



   const inputToPost = () =>{ 

        let objectToPost = {
            item: item,
            quantity: quantity,
            unit: unit
        }
    
        postFunc(objectToPost)

   }

   const setNewItem = (event) => {
    setItem(event.target.value)
   }

   const setNewQuantity = (event) => {
    setQuantity(event.target.value)
   }

   const setNewUnit = (event) => {
    setUnit(event.target.value)
   }




    return(
        <>
         <h1>Add New Item</h1>
         <h2>Item</h2>
         <input onChange={setNewItem} placeholder="Item Name"></input>
         <h2>Quantity</h2>
         <input onChange={setNewQuantity} type="number" placeholder="Quantity"></input>
         <h2>Unit</h2>
         <input onChange={setNewUnit} placeholder="Unit"></input>
         <button>SUBMIT</button>
        </>
    )


}

export default InputForm;