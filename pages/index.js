import Hero from './components/Hero';
import Nav from './components/nav';
import Container from './components/container';
import StockRoom from './components/StockRoom';
import TapNote from './components/TapNote';
import Consent from './components/Consent';
import Community from './components/Community';
import SwipeableViews from 'react-swipeable-views';
import Standalone from './components/Standalone';
import Standardized from './components/Standardized';
import Referral from './components/Referral';


function HomePage() {
  return (
    <>
     <Nav/>
     <section className="bg-grey pt-12 pb-12 md:pb-16 whitespace-pre-line">
           <Container> 
            <Hero/>
          </Container>
     </section> 

     <section className="bg-grey pt-12 pb-12 md:pb-16 whitespace-pre-line">

            <Standalone/>

     </section> 
   
    <section>
     <Container>
      <TapNote/>
     </Container>
    </section>

    <section className="bg-grey pt-12 pb-12 md:pb-16 whitespace-pre-line">

      <Standardized/>

    </section> 
   
    <section className="bg-grey pt-12 pb-12 md:pt-16 md:pb-16 whitespace-pre-line">
     <Container>
      <Consent/>
     </Container>
    </section>
     
   <section className=" pt-12 pb-12 md:pt-16 md:pb-16  whitespace-pre-line">
        
          <Referral/>
        
      </section>
    
    
    <section className="bg-grey  pt-12 pb-12 md:pt-16 md:pb-16  whitespace-pre-line">
      <Container>
        <Community/>
      </Container>
    </section>
    
    </>
  )
}


export default HomePage

