import React from 'react';
import TabItem from './TabItem';


const Tab = ({ChooseCrypto, menuItems}) => {

  

 return (
 <div style={{
   display:"flex",
   justifyContent: "space-evenly",
   width:"100vw",
   height:"70px",
   background:"black",
   position:"absolute",
   top:"0",
   color:"white",
   alignItems:"center"

 }}
 >
   {menuItems.map((item) => {
     return (
     <TabItem 
      key={item.name}
      ChooseCrypto={ChooseCrypto}
      menuItem={item.name}
      menuImage={item.image}
      />
     );
   })} 
 </div>  
 );  
};

export default Tab;