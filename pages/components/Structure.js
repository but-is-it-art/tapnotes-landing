
function HeroSubSection( { text , Img, cols, title , svgWidth } ){
  return(

     <div className={cols}>
           <div className="pb-5 corrected">   
             { Img && <img src={Img} className="corrected" style={{ maxWidth:svgWidth }} alt="StockRoom Dental Stock Management Solution" /> } 
            </div>          
            <h2 className="pb-3">  {title}  </h2>
            <p>
            {text}
            </p>
    
    </div>
  )
}

function Structure() {
  return (
    <>
    
     <section className="top-hero" id="structure">
    <div className="titles-desktop hidden lg:block">
      <h1 className="text-center pt-8 md:pt-16 pb-4"> Structure: Your personalised, <br/> super-intelligent <span className="highlight">practice manager</span> on 24/7</h1> 
      <h3 className="text-center pb-12 md:pb-24"> Sit back and relax. Aura AI will do it for you and provide <br/> valuable and actionable insights on the way.  </h3>
    </div>
      
      <div className="titles-mobile lg:hidden">
      <h1 className="text-center pt-8 md:pt-16 pb-4"> Structure: Your personalised, <br/> super-intelligent <span className="highlight">practice manager</span> <br/> on 24/7</h1> 
      <h3 className="text-center pb-12 md:pb-24"> Sit back and relax. Aura AI will do it <br/> for you and provide valuable and actionable insights on the way.  </h3>
    </div>
      
      <div className="grid gap-5 grid-cols-1 pb-12 md:gap-10 md:grid-cols-10 md:pb-32">
       
      <HeroSubSection title={`Smart scheduler \n will keep your diary filled`}
              text={`Dental Associate off sick? No problem. Aura will reschedule all the appointments at a click of a button based on dentist preferences, patient availability and clinical circumstances. Aura knows that a 'crown fit' without a temporary could be prioritised over the 19th denture adjustment. \n
This booking system will optimise the patient and dentist experience as well as maximise practice revenue.`}
        
              Img='/assets/structuresvg/smartschedule2.svg'
              cols="col-span-5 mt-6 column"
              svgWidth="83%"
      />
      
      <HeroSubSection title={ "Universal referral platform"}            
             text={`Allows community of private and NHS practices to manage referrals seamlessly and share clinical notes and media for real-time bi-directional updates and communication. \n
                   Easily migrate referral information to your colleague with medical grade encryption. No more retaking of X-rays simply due to poor access to the correct information. \n 
                   Structure instantly validates your request against claim criterias to show how likely it is to be accepted to make the best decisions for your patient without delays.`} 
             Img='/assets/structuresvg/universalref2.svg'
             svgWidth="100%"
             cols="col-span-5 column"
      />
      
     

      </div>
   
      
      
      <div className="grid gap-5 grid-cols-1 pb-12 md:gap-10 md:grid-cols-10 md:pb-32">
       
      <HeroSubSection title={`Receptionist dashboard \n puts you on the right track`}
              text="Aura AI learns and remembers how you like your practice to be run and will optimise daily tasks to the fullest. Requests are organised by time and priority so your receptionist can stay organised and remain free to be a welcoming first-sight for all your patients and not simply the human face of a computer screen."
              Img='/assets/structuresvg/receptionistdash2.svg'
              cols="col-span-5 -m-2 column"
              svgWidth="100%"
      />
      
      <HeroSubSection title={ "Lab case loop management"}            
             text={`TapNote automatically creates the required lab management pathways and Structure will then take over to schedule appointments and track labwork status. If labwork is delayed, Aura can reschedule for you. \n
Structure will also allow real-time collaboration with your technicians for valuable bi-directional feedback with complete integration with the Bryant Dental Camera range.`}
             Img='/assets/structuresvg/lab-case.svg'
             svgWidth="100%"
             cols="col-span-5 column" />      
      </div>
      
      
     
       <div className="flex flex-wrap items-start flex-col-reverse xl:flex-row xl:items-center">
         <div className="flex-1 xl:pr-28 flexitem">
            <h2 className="pb-3"> Real-time analytics <br/> with actionable insight </h2>
           <p>Aura AI won't show you a random string of incomprehensible gibberish but rather fully actionable performance optimisation reccommendations based on sound evidence that is learned over time from the aura community.</p>
           
         </div>
         <div className="flex-2 flexitem">
           <img src='/assets/structuresvg/analytics.svg' className="mx-auto" alt="TapNotes Dental Stock Management Solution" />
         </div>
       
      
      </div>
   
      <style jsx>{`
   
@media (min-width: 1280px) {
.resize {
border: 1px red;
width: 83%;
}
}
       
       `}</style>
      
     </section>
    
    
    
    
  
   </> 
  )
};


export default Structure;

