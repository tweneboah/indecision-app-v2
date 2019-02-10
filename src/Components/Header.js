import React from 'react';


const Header = (props) => {
    return ( 
        <div>
            <h1 className ="display-4 bg-danger text-white text-center">{props.title}</h1>
            <h2 className='text-white'>{props.subTitle}</h2>
        </div>
     );
}

export default Header;