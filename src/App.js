import './App.css';
import FlavorSection from './sections/flavorSection';
import HeroSection from './sections/heroSection';
import NumberSection from './sections/numberSection';
import PopularSection from './sections/popularSection';


function App() {
  return (
    <div className="App">
  <HeroSection/>
 <NumberSection/>
 <FlavorSection/>
 <PopularSection/>
 {/* <FlavorSection/> */}

    </div>
  );
}

export default App;
