
function HeroSubSection({ text ,title, Img,cols, svgWidth }){
  return(
     <div className={cols}>
           <div className="pb-5 mt-20">   
             <img className="corrected" src={Img} alt="StockRoom Dental Stock Management Solution" />
            </div>          
            <h2 className="pb-3">  {title}  </h2>
            <p>
            {text}
            </p>
     
    </div>
  )
}
  

function TapNote() {
  return (
    <>
    
     <section className="pb-12 md:pb-24" id="tapnote">
    
      <h1 className=" text-center pt-16 md:pt-20 pb-2">Safer and a lot more flexible</h1> 
      <h3 className="text-center pb-12 section-subhead">Streamlines the monotonous so you <br/> can focus on your practice</h3>
    
      
      <div className="grid gap-5 grid-cols-1 md:gap-10 md:grid-cols-10">
       
      <HeroSubSection text="UK Dentistry is one of the most highly regulated and litigated professional areas in the world. With constantly evolving requirements, it is challenging to stay ahead of the curve. Now you can leave the hard work to TapNote and concentrate on your patients and their care instead of opportunistic lawyers."
              Img='/assets/tapnotesvg/tapnotes1.svg'
              cols="col-span-5 column"
              title="Real-time Regulatory Improvements"
      />
        
         <HeroSubSection text="TapNote is powered by a neural network of the majority of known signs, symptoms, diagnoses, treatments and post-operative complications. This is overlaid on the standards set by various clinical bodies and updated in real time. TapNote minimises free text entry and replaces it with a simple Tap for fully contemporaenous, compliant and accurate records."
              Img='/assets/tapnotesvg/tapnotes2.svg'
              cols="col-span-5 column"
              title="Tap-based experience: Reads your mind!"
      />

         <HeroSubSection text="It’s incredibly easy and safe to use. Officially the nurse can help complete the notes with increased efficiency as you go on with providing patient care. TapNote filters options based on findings, understands relevance of each option per affected location, and takes into account the patient conditions. The software knows how you establish diagnoses and what your plans are, so it can help you complete documentation after the appointment without forgetting anything."
              Img='/assets/tapnotesvg/flexible.svg'
              cols="col-span-5 column"
              title="Flexible to your way"
      />

         <HeroSubSection text="Due to TapNote's AI system that constantly learns and adapts, you can monitor and validate the diagnosis and treatments of all your associates within seconds to identify high risk issues and promote good record keeping. In fact, this can be completely automated."
              Img='/assets/tapnotesvg/liability-updated.svg'
              cols="col-span-5 column"
              title="Vicarious Liability Protection"
      />
    
      
   
      </div>
      
    </section>
    
    
           <style jsx>{`
   

       
       `}</style>

    
    
   
   </> 
  )
};


export default TapNote;

