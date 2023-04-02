import React from 'react';
import VisualSensitvityExplanation from './VisualSensitivityExplanation';

const HybridSensitvityExplanation = ({nextStage, casenumber}) => {  
    
    
    
    return (
        <VisualSensitvityExplanation 
            nextStage={nextStage}
            casenumber={casenumber}
            hybridText={casenumber.explanation.textualSensitivity}
        />
    );
}
export default HybridSensitvityExplanation;