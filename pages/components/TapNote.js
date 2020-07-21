
function HeroSubSection({ text ,title, Img,cols, svgWidth }){
  return(
     <div className={cols}>
           <div className="pb-5">   
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
    
      <h1 className=" text-center pt-16 md:pt-20 pb-2" > TapNote</h1> 
      <h3 className="text-center pb-32 section-subhead"> The Dental Record. Reimagined. </h3>
    
      
      <div className="grid gap-5 grid-cols-1 md:gap-10 md:grid-cols-10">
       
      <HeroSubSection text="Expertly-standardised templates ensuring your notes are complete with latest regulatory guidance. The fully customisable structure is specifically designed to allow fast input and efficient review. "
              Img='/assets/tapnotesvg/tapnotes1.svg'
              cols="col-span-5 column"
              title="Defense against litigation"
      />
        
         <HeroSubSection text="No more long drop down lists. Simply tap on intelligently defined options tailored to you and patient findings trail across all kinds of documentation work. Only relevant options are displayed allowing nurses to do more than Socrates."
              Img='/assets/tapnotesvg/tapnotes2.svg'
              cols="col-span-5 column"
              title="Tap-based experience. Reads your mind!"
      />
    
      
   
      </div>
      
    </section>
    
    <section className="pb-12 md:pb-24">
       <div className="flex flex-wrap items-start flex-col-reverse xl:flex-row xl:items-center">
         <div className="flex-1 xl:pr-28 flexitem">
            <h2 className="pb-3">Vicarious <br/> Liability Protection </h2>
           <p>Due to TapNote's AI system that constantly learns and adapts, you can monitor and validate the diagnosis and treatments of all your associates within seconds to identify high risk issues and promote good record keeping. In fact, this can be completely automated.
           </p>
           
         </div>
         <div className="flex-2 flexitem">
           <img src='/assets/tapnotesvg/liability4.svg' className="corrected" alt="TapNotes Dental Stock Management Solution" />
         </div>
       
      
      </div>
    </section>
    
    
    <section className="pb-12 md:pb-24">
       <div className="flex flex-wrap items-start flex-col-reverse xl:flex-row xl:items-center">
         <div className="flex-1 xl:pr-28 flexitem">
            <h2 className="pb-3">  Auto-syncing charts  </h2>
           <p>Charts are a live visualisation of the clinical notes. Every tap is mapped to the chart to build a simple screen with all the information you need at a glance.        </p>
           &nbsp;
           <p>
                   Visualise as much or as little of your patient's full dental history as you like from just one simple screen that is bespoke to you.
           </p>
           
         </div>
         <div className="flex-2 flexitem">
           <img src='/assets/tapnotesvg/chart.svg' className="corrected chart" alt="TapNotes Dental Stock Management Solution" />
           {/*<img src='/assets/tapnotesvg/chart-mobile.svg' className="mx-auto chartmobile" alt="TapNotes Dental Stock Management Solution" /> */}
         </div>
       
      
      </div>
    </section>
    
    
     <section className="pb-12 md:pb-24">
    
   
      <div className="grid gap-5 grid-cols-1 md:gap-10 md:grid-cols-10">
       
      <HeroSubSection text="The patient profile is like your Facebook feed. There are no separate tabs or additional software, but a chronological timeline of clinical and administrative events for a clear overview of the patient evolution, bringing dentistry into the 21st century at last."
              Img='/assets/tapnotesvg/inline.svg'
              cols="col-span-5 column"
              title="Everything’s in-line "
      />
        
         <HeroSubSection text="AI understands the meaning of every TapNote entry and timeline element to offer powerful search and filters so you can easily access previous details."
              Img='/assets/tapnotesvg/patient-record.svg'
              cols="col-span-5 column"
              title="Powerful search"
      />
    
      
   
      </div>
      
    </section>
    
    <section className="pt-6 mb-12 lg:mb-32">
        <div className="4in1-mobile lg:hidden">
          <div className="flex flex-wrap items-center">
             <div className="flex-1 flexitem">
               <h2 className="pb-5">
                 <span className="highlight">The new way</span> to efficiently treatment plan and consent your patients
               </h2>
              <p>
                TapNote will help you record all treatment proposals and discussions in a fraction of the time with <span className="highlight">pre-configured questions based on the patient profile and latest standards</span>.
              </p>
               &nbsp;
              <p>Example: Aura knows if your patient smokes so dry socket is a more likely post-operative complication. Aura knows if it's a molar extraction then the risk is higher still. In fact, if it was a complex extraction in a patient with a history of dry socket Aura can keep a 15 minute gap in the diary to help management. Aura will learn your preferences and act accordingly over time.
               </p>
            
                &nbsp;
               <img src='/assets/tapnotesvg/4in1-mobile.svg' className="mx-auto 4in1mobile py-12" alt="Consent" />
               
                 <ul>
                  <li className="pb-3">Clear comparison table of treatments and payment plans for patient education: this can be printed, emailed and provided in-app for registered patients;</li>
                   <li className="pb-3">Highly tailored and fully contemporaneous consent ready to be signed electronically;</li>
                   <li className="pb-3"> Patient-accepted plans already charted to courses of treatment and validated according to NHS rules &amp; diagnostic parameters.</li>
                 </ul>                                           
               
            </div>   
      </div>
      </div>
      
         <div className="4in1-desktop hidden lg:block">
            <div className="grid grid-cols-12 gap-10">
             <div className="col-start-5 col-span-8 xl:col-start-7 xl:col-span-6">
               <h2 className="pb-5">
                 <span className="highlight">The new way</span> to efficiently treatment plan and consent your patients
               </h2>
              <p>
                TapNote will help you record all treatment proposals and discussions in a fraction of the time with <span className="highlight">pre-configured questions based on the patient profile and latest standards</span>.
              </p>
               &nbsp;
              <p>Example: Aura knows if your patient smokes so dry socket is a more likely post-operative complication. Aura knows if it's a molar extraction then the risk is higher still. In fact, if it was a complex extraction in a patient with a history of dry socket Aura can keep a 15 minute gap in the diary to help management. Aura will learn your preferences and act accordingly over time.
               </p>
            
                &nbsp;
                 <ul>
                  <li className="pb-3">Clear comparison table of treatments and payment plans for patient education: this can be printed, emailed and provided in-app for registered patients;</li>
                   <li className="pb-3">Highly tailored and fully contemporaneous consent ready to be signed electronically;</li>
                   <li className="pb-3"> Patient-accepted plans already charted to courses of treatment and validated according to NHS rules &amp; diagnostic parameters.</li>
                 </ul>                                           
               
            </div>      
          
          </div>
          
          
      <img src='/assets/tapnotesvg/4in1.svg' className="mx-auto px-10 relative -mt-16 xl:-mt-64" alt="TapNotes Dental Stock Management Solution" />
        </div>
           <style jsx>{`
   

       
       `}</style>
    </section>
    
    
   
   </> 
  )
};


export default TapNote;

