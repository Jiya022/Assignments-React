
import "./App.css";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Pagination from "./components/Pagination";


 

const products = [
  {
    id: 1,
    category: "Mugs",
    title: "Black Printed Coffee Mug",
    price: 15.0,
    oldPrice: null,
    image: "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
    onSale: false,
  },
  {
    id: 2,
    category: "Mugs",
    title: "Father's Day Coffee Mug",
    price: 18.0,
    oldPrice: null,
    image: "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
    onSale: false,
  },
  {
    id: 3,
    category: "Tshirts",
    title: "Green Printed Tshirt",
    price: 34.0,
    oldPrice: 39.0,
    image: "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
    onSale: true,
  },{
   id: 4,
    category: "Mugs",
    title: "Black Printed Coffee Mug",
    price: 15.0,
    oldPrice: null,
    image: "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
    onSale: false,
  },
  {
    id: 5,
    category: "Tshirts",
    title: "Green Printed Tshirt",
    price: 34.0,
    oldPrice: 39.0,
    image: "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
    onSale: true,
  },
  {
    id: 6,
    category: "Tshirts",
    title: "Green Printed Tshirt",
    price: 34.0,
    oldPrice: 39.0,
    image: "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
    onSale: true,
  },
];

function App() {


  return (
   
      <div className="min-h-screen flex flex-col bg-slate-100">
     
     
     <NavBar />
     <div className="flex-1">
        <div className="max-w-6xl mx-auto py-10">
         
 <div className="flex justify-end px-4 mb-6">
    <Search />
  </div>
          <ProductList products={products} />
           <div className="flex justify-start px-4 mb-6">
    <Pagination />
  </div>
        </div>
    </div>
      <Footer />
      </div>
   
  );
}

export default App;
