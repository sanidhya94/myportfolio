import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'

const Home=()=>{
return (
  <div className="App">
        
      
  <section style={{
     backgroundColor: '#B33951',
     paddingTop : 8,
     paddingBottom :8
      
    }} >
    <NavLink to="/about"> <img width="150" src="employee.svg" alt="description of "/>  </NavLink>
         
  </section>

  <section style={{
     backgroundColor: '#2274A5',
     paddingTop : 8,
     paddingBottom :8
      
    }}>
  <img width="150" src="portfolio.svg" alt="description dfffof "/>
  </section>

  <section style={{
     backgroundColor: '#E9F1F7',
     paddingTop : 8,
     paddingBottom :8
      
    }}>
  <img width="150" src="project-management.svg" alt="description ofgggg "/>
  
  </section>

  <section style={{
     backgroundColor: '#D0DB97',
     paddingTop : 8,
     paddingBottom :8
      
    }}>
  <img width="150" src="letter.svg" alt="description of rrimage"/>
  </section>
</div>
);
};

export default Home;