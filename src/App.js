import './App.css';
//importing header and footer components
import Header from './components/Header'; 
import Home from './components/Home'; 
// import Footer from './components/Footer';
import RestuarantDetails from './components/RestuarantDetails';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'//for routing
 
function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/details/:id' element={< RestuarantDetails />}/>
        </Routes>

      </Router>
      
      
      
    
    
  );
}

export default App;
