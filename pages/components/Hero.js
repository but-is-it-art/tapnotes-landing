

function HeroSubSection({ text, title , SVG, svgWidth }){
  return(
     <div className="column" >
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
   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
       
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
 
    </>
  )
  
}

function Hero() {
  return (
    <>
    
     <section className="top-hero mt-4 md:mt-12">
    
      <h1 className="text-center pb-2"> <span className="highlight">Aura A.I</span> is redefining <br/>the way you run your dental practice: </h1> 
      <h3 className="text-center pb-16 section-subhead">With the world's smartest practice management software.</h3>
      <HeroSection/>
    
    </section>
   
   </> 
  )
};


export default Hero;

