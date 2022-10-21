import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import NotFound from './containers/NotFound';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header/>
        <Routes>
        <Route path='/' exact element={<ProductListing />} />
        <Route path='/product/ :productId' element={<ProductDetails />} />
        <Route path='*' element={<NotFound/> }/>
        </Routes>
      
    </div>
  );
}

export default App;
