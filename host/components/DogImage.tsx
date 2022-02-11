import React from "react";
import Image from 'next/image'

const DogImage = (): JSX.Element => (
   <img
    style={{
      border: "10px solid red",
      borderRadius: 10,
      padding: "1em",
      width: 640,
      height: 480,
    }}
    src="https://placedog.net/640/480?random"
  />
  
);


export default DogImage;