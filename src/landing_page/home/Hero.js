import React from 'react';
// function Hero() {
//     return ( 
//        <div className='container p-5'>
//           <div className='row '>
//           <img src='media/images/homeHero.png' alt='Hero img' className='mb-5 img-fluid' />
//             <h1 className='mt-5'>Invest in Everything</h1>
//             <p>Online platform to invest in stocks,derivative,mutual funds and more</p>
//             <button className="p-2 btn btn-primary fs-5" style={{width:"20%",margin:"0 auto"}}>SignUp Now </button>
//           </div>
//        </div>
//      );
// }
function Hero() {
    return (
      <div className="container p-5 mb-5 d-flex flex-column align-items-center text-center">
        <img src="media/images/homeHero.png" alt="Hero img" className="mb-5 img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
        
        <h1 className="mt-3">Invest in Everything</h1>
        <p className="mt-2">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
  
        <button className="p-2 btn btn-primary fs-5 mt-2 mb-5" style={{ width: "200px" }}>
          Sign Up Now
        </button>
      </div>
    );
  }
  

export default Hero;