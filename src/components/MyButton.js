
import React from 'react';



const MyButton=(props)=>{
	return(

       <div>
             <button  onClick={()=>props.click()}      >
                   Click TO--->{props.isLoggedIn ? 'Logout': 'Login'}
             </button>


       </div>

	);

};
export default MyButton;

