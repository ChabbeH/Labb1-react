import React from "react";


const ImageRenderer =({image}) => {
    return <img style={{
        maxWidth: "20vw",
        marginTop: 100,
        
    }}src={image} />
    
};
export default ImageRenderer;