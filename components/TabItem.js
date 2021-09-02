import React from 'react';



const TabItem = ({menuItem, menuImage, ChooseCrypto}) => {
    
    
 return(<div onClick={(e) => ChooseCrypto(menuItem, menuImage)} >
 {menuItem}



</div>

 ); 
};

export default TabItem;