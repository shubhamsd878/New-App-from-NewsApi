// converting to function based
// remove {component} import
// change class to funtion and remove extends Component
// render not needed
// done

import React from 'react'
import Loading2 from './loadingGif2.jpg'
const spinner = () =>{

    
        return(
            <div className='text-center'>
                {/* <img src='./LoadingGif.gif' alt="spinner gif file" /> */}
                
                {/* only this is working */}
                {/* <img src={Loading} alt="spinner gif file" /> */}
                
                {/* <br /> */}

                {/* <img src="loadingGif2.jpg" alt="spinner 2 jpg file" /> */}
                <img src={Loading2} alt="spinner 2 jpg file" width="20%" />
            </div>
        )

}

// dont use class keyword while exporting
export default spinner;