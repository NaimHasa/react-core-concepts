import './App.css';
import Footer from './Footer';
import Header from './Header';
import Mealdb from './Mealdb';

function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 75000 },
    { id: 2, name: 'Phone', price: 35000 },
    { id: 3, name: 'Watch', price: 5000 }
  ]
  return (
    <>
      <Header></Header>
      <Mealdb></Mealdb>
      <Footer></Footer>



      <div>

        {
          products.map(product => <Product name={product.name} price={product.price} key={product.id} ></Product>)
        }
      </div>
    </>

  )
};

function Product(props) {
  return (
    <div className="product">
      <h1>Name: {props.name}</h1>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;