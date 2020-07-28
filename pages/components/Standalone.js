function Standalone() {
    return (
      <>

<section className="mt-4 md:mt-12">
     <div className="bg-lightestgray grid gap-5 grid-cols-1 pb-12 md:gap-10 md:grid-cols-12 md:pb-16">
       
         <div className="col-start-4 col-end-7 max-w-md"><img src='/assets/tapnotesvg/standalone.svg' alt="tapnotes-module" /></div>
         <div className="col-start-7 col-end-11 column max-w-md">
           <h3>Part of a greater, more complex practice management software (Aura AI), TapNote will be released first as a <span className="highlight">standalone app</span>.</h3>
           <div className="bg-white shadow-card rounded-lg py-4 px-8">
                <p className="w-56 float-left">Join the Aura AI community and shape the future with us!</p>
                <button className="align-middle bg-aurablue hover:bg-blue-700 text-white rounded-full float-right">
                  Sign Up
                </button>
                <div className="clear-both "></div>
           </div>
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

export default Standalone;