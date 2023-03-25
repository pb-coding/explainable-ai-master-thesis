import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { groups } from '../utils/utils';
import AiLoading from '../components/AiLoading';
import Case from '../components/Case';
import Result from '../components/Result';
import TextualInputExplanation from '../components/TextualInputExplanation';
import VisualInputExplanation from '../components/VisualInputExplanation';

const Experiment = ({ code, group }) => {

    const [stage, setStage] = useState(0);

    const nextStage = () => setStage(stage + 1);

    const navigate = useNavigate()

    useEffect(() => {
        if (!code) {
            navigate("/register")
            return
        }
        
    }, [code])
    
    return (
        <div>

            {stage == 0 && (<Case nextStage={nextStage} />)}
            {stage == 1 && (<AiLoading nextStage={nextStage} />)}
            {stage == 2 && (<Result nextStage={nextStage} />)}
            {stage == 3 && (
                <>
                    {group == groups.INPUT_TEXTUAL && (<TextualInputExplanation nextStage={nextStage} />)}
                    {group == groups.INPUT_VISUAL && (<VisualInputExplanation nextStage={nextStage} />)}
                </>
            )}
            
            {stage == 4 && (<EndRedirection />)}

        </div>
    );
}
export default Experiment;