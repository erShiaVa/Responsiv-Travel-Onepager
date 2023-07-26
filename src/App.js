import './App.css';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Hero from './components/Hero';
import Hiking from './components/Hiking';
import Icebad from './components/Icebad';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Polarlights from './components/Polarlights';
import Rooms from './components/Rooms';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Heading/>
      <Plan/>
      <Polarlights/>
      <Icebad/>
      <Hiking/>
      <Heading/>
      <ImageSlider/>
      <Rooms/>
      <Offers/>
      <Footer/>
    </div>
  );
}

export default App;
