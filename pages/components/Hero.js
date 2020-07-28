

function HeroSubSection({ text }){
  return(
     <div className="column" >
            <p className="text-left">
            {text}
            </p>        
    </div>
  )
}




function Hero() {
  return (
    <>
    
     <section className="top-hero mt-4 md:mt-12">
    
      <h1 className="text-center pb-2">Tapnote</h1> 
      <h3 className="text-center pb-16 section-subhead">The reimagined Dental Record</h3>
      <div className="grid gap-5 grid-cols-1 pb-12 md:gap-10 md:grid-cols-12 md:pb-16">
       
         <p className="col-start-3 col-end-7 max-w-md">Fully indemnifiable notes for the ultimate defense against litigation in just seconds through patient-personalised suggestions that don't require a single keystroke.</p>
    
        <p className="col-start-7 col-end-11 column  max-w-md">TapNote is an intelligent system that helps you get your <span className="highlight">notes done 80% faster with legal accuracy</span> while fully educating the patient.</p>
      
     </div>
     <div className="w-4/5 h-64 mx-auto shadow-xl"></div>
    
    </section>
   
   </> 
  )
};


export default Hero;

