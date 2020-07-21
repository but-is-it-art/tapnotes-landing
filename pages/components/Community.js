function Community() {
  return (
    <>
     <section>
      
      <h1 className="text-center pt-12 md:pt-20 pb-2">Join the Aura community</h1> 
      <h3 className="text-center pb-12 md:pb-24 comm-subtitle">Say goodbye to the digitised version of pen and paper and meet Aura AI. The 360º practice management system that <span className="highlight">truly takes the stress out of practice management</span> to free up your time, prevent litigation, reduce compliance costs and increase revenue.</h3>
      
      <div className="grid gap-10 grid-cols-1 md:grid-cols-12">
        <div className="md:col-start-1 md:col-span-6 md:pt-4"> 
          <img src='/assets/community/com-1.svg' className="mx-auto" alt="StockRoom Dental Stock Management Solution" />
          <br/>
          <img src='/assets/community/com-2.svg' className="mx-auto" alt="StockRoom Dental Stock Management Solution" />            
        </div>
        
        <div className="md:col-start-7 md:col-span-6"> 
          <h2 className="pb-5 text-left sm:text-center lg:hidden"> Shape the <br/> future with us! </h2>
          <h2 className="pb-5 hidden lg:block"> Shape the future with us! </h2>
          <p> Aura AI is built with the help of a growing community of dentists who want to change the game.</p>
          &nbsp;
          <p>Bryant Dental has been working alongside the dental community for 3 years listening to the concerns and issues of 5000+ UK dentists to date and we have heard you. It's time for change. It's time for the next quantum leap into the future of dentistry. </p>
          &nbsp;
          <p> We value your opinion more than anything.  Tell us more about the issues you struggle with or just call us for a chat. We're here either way and not going anywhere. </p>
       
          <form className="pt-4 text-center">
             <input className="mt-2 appearance-none border border-aurablue rounded w-full py-2 px-3 text-mediumgray leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your e-mail, we will never spam you"/>
             <input className="mt-2 appearance-none border border-aurablue rounded w-full py-2 px-3 text-mediumgray leading-tight focus:outline-none focus:shadow-outline" id="practiceName" type="text" placeholder="Optionally, name your dental practice"/>
            <textarea rows="4" className="mt-2 appearance-none border border-aurablue rounded w-full py-2 px-3 text-mediumgray leading-tight focus:outline-none focus:shadow-outline" id="practiceName" type="text" placeholder="Optionally, share your struggle with your ancient app, tells us what you are interested in, ask us questions."/>
            <button className="bg-aurablue hover:bg-blue-700 text-white mt-2 rounded-full">
  Submit
</button>
          </form>
        </div>
      </div>
      
    
    </section>
    
    
    
    <style jsx>{`
    button {
  padding: 8px 35px 8px 35px;
font-weight: 500;
font-size: 11px;
line-height: 14px;
letter-spacing: 0.06em;
text-transform: uppercase;
}
    `}</style>
   </> 
  )
};


export default Community;