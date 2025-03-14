
function HeroSubSection({ text ,title, Img,cols, svgWidth }){
  return(
     <div className={cols}>
           <div className="pb-5">   
             <img src={Img} className="mx-auto" alt="StockRoom Dental Stock Management Solution" />
            </div>          
            <h2 className="text-center pb-3">  {title}  </h2>
            <p>
            {text}
            </p>
     
    </div>
  )
}
  

function TapNotes() {
  return (
    <>
    
     <section className="pb-32">
    
      <h1 className=" text-center pt-20 pb-2" > TapNote</h1> 
      <h3 className="text-center pb-32"> The Dental Record. Reimagined. </h3>
    
      
      <div className="grid grid-cols-10 gap-10">
       
      <HeroSubSection text="Expertly-standardised templates ensuring your notes are complete with latest regulatory guidance. The fully customisable structure is specifically designed to allow fast input and efficient review. "
              Img='/assets/tapnotesvg/tapnotes1.svg'
              cols="col-span-5 text-center"
              title="Defense against litigation"
      />
        
         <HeroSubSection text="No more long drop down lists. Simply tap on intelligently defined options tailored to you and patient findings trail across all kinds of documentation work. Only relevant options are displayed allowing nurses to do more than SOCRATES."
              Img='/assets/tapnotesvg/tapnotes2.svg'
              cols="col-span-5 text-center"
              title="Tap-based experience. Reads your mind!"
      />
    
      
   
      </div>
      
    </section>
    
    <section className="pb-32">
       <div className="flex items-center">
         <div className="flex-1 pr-28">
            <h2 className="pb-3">Vicarious <br/> Liability Protection </h2>
           <p>Due to TapNote's AI system that constantly learns and adapts, you can monitor and validate the diagnosis and treatments of all your associates within seconds to identify high risk issues and promote good record keeping. In fact, this can be completely automated.
           </p>
           
         </div>
         <div className="flex-2">
           <img src='/assets/tapnotesvg/liability.svg' className="mx-auto" alt="TapNotes Dental Stock Management Solution" />
         </div>
       
      
      </div>
    </section>
    
    
    <section className="pb-32">
       <div className="flex items-center">
         <div className="flex-1 pr-28">
            <h2 className="pb-3">  Auto-syncing charts  </h2>
           <p>Charts are a live visualisation of the clinical notes. Every tap is mapped to the chart to build a simple screen with all the information you need at a glance.        </p>
           
           <p>
                   Visualise as much or as little of your patient's full dental history as you like from just one simple screen that is bespoke to you.
           </p>
           
         </div>
         <div className="flex-2">
           <img src='/assets/tapnotesvg/chart.svg' className="mx-auto" alt="TapNotes Dental Stock Management Solution" />
         </div>
       
      
      </div>
    </section>
    
    
     <section className="pb-32">
    
   
      <div className="grid grid-cols-12 gap-10">
       
      <HeroSubSection text="The patient profile is like your Facebook feed. There are no separate tabs or additional software, but a chronological timeline of clinical and administrative events for a clear overview of the patient evolution, bringing dentistry into the 21st century at last."
              Img='/assets/tapnotesvg/inline.svg'
              cols="col-span-6 text-center"
              title="Everything’s in-line "
      />
        
         <HeroSubSection text="AI understands the meaning of every TapNotes entry and timeline element to offer powerful search and filters so you can easily access precious details."
              Img='/assets/tapnotesvg/patient-record.svg'
              cols="col-span-6 text-center"
              title="Powerful search"
      />
    
      
   
      </div>
      
    </section>
    
    <section className="relative ">
          
        <div className="grid grid-cols-12 gap-10 z-10 absolute">
             <div className="col-start-6 col-span-6">
               <h2 className="text-center text-3xl pb-5">
               4 in 1 when it comes to treatment planning and consent
               </h2>
              <p>
               TapNote will help you record all treatment proposals and discussions in a fraction of the time with pre-configured questions based on the patient profile. Aura knows if your patient smokes then dry socket is a more probably scenario. Aura knows if it's a molar then its higher still. In fact, if it was a complex extraction in a patient with a history of dry socket Aura can keep a 15 minute gap in the diary to help management. Aura will learn your preferences and act accordingly over time. 
                
              </p>
               
                 <ul>
                  <li>Clear comparison table of treatments and payment plans for patient education: this can be printed, emailed and provided in-app for registered patients.;</li>
                   <li>Highly tailored and fully contemporaneous consent ready to be signed electronically.; </li>
                   <li> Patient-accepted plans already charted to courses of treatment and validated according to NHS rules & diagnostic parameters.</li>
                 </ul>                                           
               
            </div>      
          
          </div>
          
      <img src='/assets/tapnotesvg/4in1.svg' className="mx-auto relative fourInOne" alt="TapNotes Dental Stock Management Solution" />
       <style jsx>{`
//         .fourInOne{
//               top:120px;
//             }
       `}</style>
    </section>
    
    
   
   </> 
  )
};


export default TapNotes;

