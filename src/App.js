import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import Footer from './components/Footer';
import AddItem from "./components/AddItem" 

function App() {

  const initialProducts = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 99999,
      name: "Redmi note 10S Max",
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  // ✅ Increment
  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;

    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  // ✅ Decrement
  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }

    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const resetQuantity =() =>{
   let newProductList = [...productList]; 
   newProductList.map((Product)=>{
    Product.quantity=0;

   })
   setProductList(newProductList)
   setTotalAmount(0);
  }

  const removeItem =(index)=>{
let newProductList = [...productList];
let newTotalAmount =totalAmount;
newTotalAmount-= newProductList[index].quantity*newProductList[index].price
newProductList.splice(index,1);
setProductList(newProductList);
setTotalAmount(newTotalAmount);
const AddItem = (name,price) =>{
let newProductList = [...productList];
newProductList.Push({
  price:price,
  name:name,
  quantity:0
});
setProductList(newProductList);

}
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem AddItem={AddItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;