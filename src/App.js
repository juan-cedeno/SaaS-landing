import { Banner } from './components/Banner';
import { Feature } from './components/Feature';
import { Job } from './components/Job';
import { Pricing } from './components/Pricing';
import { Screen } from './components/Screen';
import { Services } from './components/Services';
import { Faq } from './components/Faq';


import 'antd/dist/antd.css'
import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
        <Banner/>
        <Services/>
        <Job/>
        <Feature/>
        <Screen/>
        <Pricing/>
        <Faq/>
        <Footer/>
    </div>
  );
}

export default App;
