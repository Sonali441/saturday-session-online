
//import logo from './logo.svg';
import './App.css';
import AnotherComponent from './Components-Class/AnotheComponent';
import MyComponent from './Components-Class/MyComponent'
import ProductTable from './Components-Class/ProductTable';
import ProductFunction from './Components-Function/ProductFunction';

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyComponent/>
      <AnotherComponent/>
      <ProductTable/>
      <ProductFunction/>
    </div>
  );
}


export default App;
