import './App.css';
import FlavorSection from './sections/flavorSection';
import Footer from './sections/footer';
import HeroSection from './sections/heroSection';
import NumberSection from './sections/numberSection';
import PopularSection from './sections/popularSection';
import PremiumSection from './sections/premiumSection';



function App() {
  return (
    <div className="App">
  <HeroSection/>
 <NumberSection/>
 <FlavorSection/>
<PopularSection/>
<Footer/>
    </div>
  );
}

export default App;
