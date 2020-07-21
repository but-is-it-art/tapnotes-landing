function Nav({children}) {
  return (
    <>
    <div className="nav hidden md:block px-16 mx-auto h-12 shadow block z-10 fixed">
      <img src='/assets/nav/aura-placeholder.png' className="float-left w-16 pt-2" alt="Aura Logo" />
     <div  className="float-right">
      <ul className="inline-flex">
        <li><a href="#tapnote">TapNote</a></li> 
         <li><a href="#structure">Structure</a></li> 
          <li><a href="#stockroom">StockRoom</a></li>
      </ul>
      <button className="bg-aurablue hover:bg-blue-700 text-white rounded-full ml-4">
         Sign Up
      </button>
      </div>
    </div>
    
    <div className="mobile-nav md:hidden px-16 h-8 shadow block z-10 fixed flex justify-center">
     
      <ul className="inline-flex">
        <li><a href="#tapnote">TapNote</a></li> 
         <li><a href="#structure">Structure</a></li> 
          <li><a href="#stockroom">StockRoom</a></li>
      </ul>
 
    </div>
    
    
     <style jsx>{`
      ul {
list-style: none;
margin-top: 2px;
}

button {
  padding: 8px 35px 8px 35px;
font-weight: 500;
font-size: 11px;
line-height: 14px;
letter-spacing: 0.06em;
text-transform: uppercase;
}

ul li {
padding: 0 1rem 0 1rem;
color: #4482F0;
}
      .nav {
        background: #FEFEFE;
       padding-top: 9px;   
        width: 100%;
      }

 .mobile-nav {
        background: #FEFEFE;
       padding-top: 5px;   
        width: 100%;
      }
    `}</style>
   </> 
  )
};


export default Nav;

