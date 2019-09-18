import React from 'react';
import Picture1 from './resume_01.png';
import Picture2 from './resume_02.png';

import './Main.css';

const Main = () => {
        return (
          <>
					
					<div id='resume' className="resume2">
						<div>
						<img className='page-one' src={Picture1} alt="resume page one" />
						<img className='page-one' src={Picture2} alt="resume page one" />
						</div>
						</div>
						
					</>  
        )
}

export default Main;
