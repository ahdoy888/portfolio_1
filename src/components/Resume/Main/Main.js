import React from 'react';
import Picture1 from './resume_001.png';


import './Main.css';
const Main = () => {
       return (
         <>
          <div id='resume' className="resume2">
            <div>
              <img className='page-one' src={Picture1} alt="resume page one" />
            </div>             
          </div>
                        
        </>
       )
}
export default Main;