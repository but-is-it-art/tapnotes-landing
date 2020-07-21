//import Hero from './components/Hero';
import Nav from './components/nav';
 import Container from './components/container';
// import StockRoom from './components/StockRoom';
// import TapNotes from './components/TapNotes';
// import Structure from './components/Structure';
// import Community from './components/Community';
import Flicking from "@egjs/react-flicking";

function HeroSubSection({ text, title , SVG, svgWidth }){
  return(
     <div>
           <div className="pb-5"> 
             <img src={SVG} className="mx-auto" alt="StockRoom Dental Stock Management Solution" />            
            </div>          

            <h2 className="text-center pb-3">  {title}  </h2>

            <p className="text-center">
            {text}
            </p>        
    </div>
  )
}


function HeroSection(){
  return(
    <>
      <div className="grid grid-cols-3 gap-4">
       
      <HeroSubSection text={`Fully indemnifiable notes for the ultimate defence against litigation in just seconds through patient-personalised suggestions that don't require a single keystroke. \n
These aren't just digitised templates. This is living, learning and fully intelligent system that can help diagnose and treatment plan with certainty.`} 
         
              title="TapNote"
              SVG='/assets/herosvg/tapnotes-orig.svg'
              svgWidth="79%"
      />
      
      <HeroSubSection text={`Structure AI can autonomously run your practice or corporate group with astounding speed and accuracy to bring you optimised workflows and greater revenue. \n
Structure can maximise your diary efficiency without human input, monitor lab cases and referrals, predict potential complaints and run audits in seconds.`}
              title="Structure"
              SVG='/assets/herosvg/root.svg'
             svgWidth="100%"
      />
      
      <HeroSubSection text={`The future of dental inventory control has arrived. Fully streamlined and automated inventory tracking using wireless RFID technology. StockRoom will optimise your cashflow, ordering cycle, inventory control and reduce prices using behind the scenes group buying initiatives. \n 
Stockroom will free up your staff to engage in clinical activities instead of administrative duties.`}
              title="StockRoom"
              SVG='/assets/herosvg/stock.svg'
              svgWidth="70%"
         />
      
      
      
      </div>
  
    
    <style jsx>{`
     
   
      
    `}</style>
    </>
  )
  
}

function Hero() {
  return (
    <>
    
    
    
    
    
    <style jsx>{`
       
      background: #F9FAFB;

       @media (max-width: 768px) {
           h1{ font-size: 15px;}
        }
    `}</style>
   </> 
  )
};



function HomePage() {
  return (
    <>
    <h1>hello</h1>
     <section className="bg-grey pt-10 pb-16 whitespace-pre-line">
         <Flicking
          collectStatistics={false}
          className="flick-container"
          gap={10}
          //circular={true}
          horizontal={false}
          moveType="freeScroll"
        >
           
           
           <div className="panel" >
             <Container>
               <section className="top-hero">
    
                <h1 className="text-center pb-2"> <span className="highlight">Aura A.I</span> is redefining the way you <br/> run your dental practice: </h1> 
                <h3 className="text-center pb-16">With the world's smartest practice management software.</h3>
              

              </section>
             </Container>
           </div>
           
           <div className="panel">
             <Container>
                <HeroSubSection text={`Fully indemnifiable notes for the ultimate defence against litigation in just seconds through patient-personalised suggestions that don't require a single keystroke. \n
These aren't just digitised templates. This is living, learning and fully intelligent system that can help diagnose and treatment plan with certainty.`} 
         
              title="TapNote"
              SVG='/assets/herosvg/tapnotes-orig.svg'
              svgWidth="79%"
      />
             </Container>
           </div>
        
            <div className="panel">
             <Container>
              <HeroSubSection text={`Structure AI can autonomously run your practice or corporate group with astounding speed and accuracy to bring you optimised workflows and greater revenue. \n
Structure can maximise your diary efficiency without human input, monitor lab cases and referrals, predict potential complaints and run audits in seconds.`}
              title="Structure"
              SVG='/assets/herosvg/root.svg'
             svgWidth="100%"
      />
             </Container>
           </div>
        
            <div className="panel">
             <Container>
                <HeroSubSection text={`The future of dental inventory control has arrived. Fully streamlined and automated inventory tracking using wireless RFID technology. StockRoom will optimise your cashflow, ordering cycle, inventory control and reduce prices using behind the scenes group buying initiatives. \n 
Stockroom will free up your staff to engage in clinical activities instead of administrative duties.`}
              title="StockRoom"
              SVG='/assets/herosvg/stock.svg'
              svgWidth="70%"
         />
             </Container>
           </div>
        
                      
        </Flicking>
     </section> 
   
    
    <style jsx>
      {`

    .flick-container{
      height:500px;
    }

    `}
    </style>
    </>
  )
}


export default HomePage

