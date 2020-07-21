import H2 from './h2';

function HeroSubSection({ text , Img,cols, svgWidth }){
  return(
     <div className={cols}>
           <div className="pb-5">   
              { Img && <img src={Img} className="mx-auto" style={{ maxWidth:svgWidth }} alt="StockRoom Dental Stock Management Solution" />}
            </div>          

            <p>
            {text}
            </p>
      
       <style jsx>{`
          h2{
            
          }
    `}</style>
    </div>
  )
}

function StockRoom() {
  return (
    <>
    
     <section className="top-hero" id="stockroom">
    
      <h1 className="text-center pt-16 md:pt-20 pb-2"> StockRoom</h1> 
      <h3 className="text-center pb-32 section-subhead">You only need to walk through the door to update your stock. <br/> That is it. No Barcodes. No Scanning.</h3>
    
      
      <div className="grid gap-10 grid-cols-1 md:grid-cols-12">
       
      <HeroSubSection text="1. SmartTrack items delivered."
              Img='/assets/stocksvg/stock1.svg'
              cols="col-start1 col-span-5 md:col-start-2 md:col-span-4 text-center"
              svgWidth="91%"
      />
      
      <HeroSubSection text={ "2. SmartGate detects items going into StockRoom"}            
             Img='/assets/stocksvg/stock2.svg'
             svgWidth="100%"
             cols="col-start1 col-span-5 md:col-start-6 md:col-span-3 text-center "
      />
      
      <HeroSubSection text={"3. SmartGate detects items going out of the StockRoom"}              
              Img='/assets/stocksvg/stock3.svg'
              svgWidth="100%"
              cols="col-start1 col-span-5 md:col-start-9 md:col-span-3 text-center"
         />
      

      </div>
      
    <div>
     <div className="grid gap-10 grid-cols-1 md:grid-cols-12 pt-12">
      <img style={{width:'100%'}}  className="pb-5 md:col-start-2 md:col-span-10" src='/assets/stocksvg/stock4-2.svg' alt="StockRoom Dental Stock Management Solution" />
     </div>
      
     <div className="grid gap-3 grid-cols-6 md:grid-cols-12">
       <p className="text-right col-start-1 col-span-1 md:col-start-3 md:col-span-1">4.</p>
       <p className="col-start-2 col-span-5 md:col-start-4 md:col-span-7 pr-10">If you run a <span className="highlight">group practices</span>, Stockroom can optimise your purchasing times and amounts to help cashflow and ensure you never run out of stock. If you run <span className="highlight">a single practice</span>, Stockroom can help drive down your prices by grouping orders in the back-end without you even realising.</p>
     </div> 
      

    </div>  
      
      
      
     </section>
    
    
    
   </> 
  )
};


export default StockRoom;

