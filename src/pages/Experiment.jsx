import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { groups } from '../utils/utils';
import AiLoading from '../components/AiLoading';
import Case from '../components/Case';
import Result from '../components/Result';
import TextualInputExplanation from '../components/TextualInputExplanation';
import VisualInputExplanation from '../components/VisualInputExplanation';
import EndRedirection from '../components/EndRedirection';
import TextualSensitivityExplanation from '../components/TextualSensitivityExplanation';
import VisualSensitivityExplanation from '../components/VisualSensitivityExplanation';
import HybridSensitvityExplanation from '../components/HybridSensitivityExplanation';
import HybridInputExplanation from '../components/HybridInputExplanation';
import getCaseData from '../utils/caseData';

const Experiment = ({ group }) => {

    const [stage, setStage] = useState(0);

    const nextStage = () => setStage(stage + 1);

    const navigate = useNavigate()

    const limesurveyUrl = "https://masterarbeit.philippbeckmann.de/index.php/151988"

    const cases = getCaseData()

    useEffect(() => {
        if (!group) {
            navigate("/register")
            return
        }
        
    }, [group])
    
    return (
        <div>

            {stage == 0 && (<Case nextStage={nextStage} casenumber={cases[1]} />)}
            {stage == 1 && (<AiLoading nextStage={nextStage} />)}
            {stage == 2 && (<Result nextStage={nextStage} casenumber={cases[1]} />)}
            {stage == 3 && (
                <>
                    {group == groups.INPUT_TEXTUAL && (<TextualInputExplanation nextStage={nextStage} casenumber={cases[1]} />)}
                    {group == groups.INPUT_VISUAL && (<VisualInputExplanation nextStage={nextStage} casenumber={cases[1]} />)}
                    {group == groups.INPUT_HYBRID && (<HybridInputExplanation nextStage={nextStage} casenumber={cases[1]} />)}
                    {group == groups.SENSITIVITY_TEXTUAL && (<TextualSensitivityExplanation nextStage={nextStage} casenumber={cases[1]} />)}
                    {group == groups.SENSITIVITY_VISUAL && (<VisualSensitivityExplanation nextStage={nextStage} casenumber={cases[1]} />)}
                    {group == groups.SENSITIVITY_HYBRID && (<HybridSensitvityExplanation nextStage={nextStage} casenumber={cases[1]} />)}
                </>
            )}
            
            {stage == 4 && (<EndRedirection limesurveyUrl={limesurveyUrl} />)}

        </div>
    );
}
export default Experiment;