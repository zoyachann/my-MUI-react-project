import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import HeroSection from './components/HeroSection.jsx';
import Header from './components/header.jsx';

function App() {
  return (
   <>
     <Header />
     <HeroSection />
   </>
  );
}

export default App;