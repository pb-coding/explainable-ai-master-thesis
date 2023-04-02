import React from 'react';
import VisualInputExplanation from './VisualInputExplanation';

const HybridInputExplanation = ({nextStage, casenumber}) => {  
    
    
    
    return (
        <VisualInputExplanation 
            nextStage={nextStage}
            casenumber={casenumber}
            hybridText={casenumber.explanation.textualInput}
        />
    );
}
export default HybridInputExplanation;