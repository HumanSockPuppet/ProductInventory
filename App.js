import './App.css';
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/funcComponent';

const App = () => {
    
  
    return (
        <div className="App">
            <header className='App-header'>  
                <h1>Product Inventory</h1>          
                <AddProduct/>                
            </header>              
        </div>
    );
  };

export default App;