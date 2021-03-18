import logo from './logo.svg';
import './App.css';
import Card from './cardlist';
//import Cart from './cart';
import { useState } from "react";


function App() {
  let products = [
    { productName: "item one", price: "24", description: "lorem ipsum color sit amatuer" },
    { productName: "item Two", price: "24", description: "lorem ipsum color sit amatuer" },
    {  productName: "item Three", price: "24", description: "lorem ipsum color sit amatuer" }
    
  ]
  const [currentItems,setTotalItems] = useState([]);
  const addToCart=(arr)=>{
    currentItems.push(arr);
  setTotalItems([...currentItems]);
    
  }
  return (
    <>
      <div className="container">
        <div className="row">
        
        <div class="col-lg-3">

<h1 class="my-4">Shop Cart</h1>
<div class="list-group">
{
 currentItems.map((item,index)=> {
  return (<a href="#" key={index} className="list-group-item">{item}</a>);
})
 }
  
 </div>
</div>
    
         {
           products.map((product,index) => {
            return <Card key={index} details={product} handleBtnClick={addToCart}></Card>
           })
         }
         </div>
         </div>
    </>
  ); 
}

export default App;

