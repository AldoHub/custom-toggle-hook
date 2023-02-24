import { useState, useEffect } from "react";

export const useToggle = (defaultValue) => {
    
    //set the visibility
    const [isVisible, setIsVisible] = useState(defaultValue);

    //toggle functionality
    const handleToggle = () => setIsVisible(!isVisible);

    //return the values and methods to the outside
    return {
        isVisible,
        handleToggle
    };
}