import './style.css';
import OfferSection from "./components/OfferSection";
import Header from './components/Header';
import DescriptionSection from './components/DescriptionSection';
import ServiceSection from './components/ServiceSection';
import ServiceItem from './components/ServiceItem';
import RentalSection from './components/RentalSection';


function App() {
  const items = [
    {
    text: "Годовое ТО ",
    color: "#22356F"
    },
    {text: "Выравнивание колес",
    color: "#0052C1"
    },
    {text: "Настройка переключателей",
    color: "#76B58B"
        }]
  return (
    <div>
      <div className='header_wrapper'>
      <Header />
      <OfferSection />
      <DescriptionSection />
      <ServiceSection />
      <ServiceItem items={items} />
      <RentalSection />
      </div>
    </div>
  );
}

export default App;
