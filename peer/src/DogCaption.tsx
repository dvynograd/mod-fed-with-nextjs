import React from 'react'

interface DogCaptionProps {
    name: string;
}

const DogCaption = ({name}: DogCaptionProps): JSX.Element => 
(<h1>Adopt {name} today!</h1>)

export default DogCaption;