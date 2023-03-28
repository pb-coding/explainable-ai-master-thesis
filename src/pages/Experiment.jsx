import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { badgeType, groups } from '../utils/utils';
import AiLoading from '../components/AiLoading';
import Case from '../components/Case';
import Result from '../components/Result';
import TextualInputExplanation from '../components/TextualInputExplanation';
import VisualInputExplanation from '../components/VisualInputExplanation';
import EndRedirection from '../components/EndRedirection';

const Experiment = ({ group }) => {

    const [stage, setStage] = useState(0);

    const nextStage = () => setStage(stage + 1);

    const navigate = useNavigate()

    const limesurveyUrl = "https://masterarbeit.philippbeckmann.de/index.php/151988"

    const cases = {
        1: {
            id: 1,
            firstName: "Michael",
            casepage: (
                <>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Michael ist ein Kunde des Versicherungsunternehmens. Er ist:
                    </p>
                    <ul className="space-y-1 list-disc list-inside dark:text-gray-400">
                        <li>45 Jahre alt</li>
                        <li>hat seit 27 Jahren seinen Führerschein</li>
                        <li>hat 3 Unfälle verschuldet</li>
                        <li>fährt ca. 28.000 KM im Jahr</li>
                        <li>5% der Fahrten finden nachts statt.</li>
                        <li>überschreitet die Geschwindigkeitsbegrenzung im Durchschnitt einmal alle zwei Monate</li>
                    </ul>
                </>
            ), 
            result: `Auf der Grundlage dieser Informationen wird empfohlen Michael in die mittlere Preisklasse einzustufen.`,
            explanation: {
                textualInput: (
                    <>
                        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                            Es wurden die persönlichen Daten und das Fahrverhalten ausgewertet, um die Unfallwahrscheinlichkeit vorherzusagen.
                            Die Faktoren haben sich unterschiedlich "günstig" sowie "ungünstig" auf das prognostizierte Unfallrisiko ausgewirkt.
                            Auf die Einstufung hat sich der Faktor:
                        </p>
                        <ul className="space-y-1 list-disc list-inside dark:text-gray-400">
                            <li>Alter: günstig,</li>
                            <li>die Fahrerfahrung in Jahren: sehr günstig,</li>
                            <li>die Anzahl vergangener Verkehrsunfälle: sehr ungünstig</li>
                            <li>die Gefahrenen Kilometer pro Jahr: ungünstig</li>
                            <li>die Anzahl an Nachtfahrten: neutral </li>
                            <li>der Grad der Einhaltung von Geschwindigkeitsbegrenzungen: ungünstig</li>
                        </ul>
                        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                            ausgewirkt.
                        </p>
                    </>
                ),
                visualInput: [
                    {
                        name: "Alter",
                        badgeType: badgeType.green,
                        badgeText: "+",
                        body: "",
                        data: [{name: 'km', uv: 100}, {name: '1', uv: 80}, {name: '2', uv: 30}, {name: '3', uv: 20}, {name: '> 4', uv: 10}],
                    },
                    {
                        name: 'Fahrerfahrung in Jahren',
                        badgeType: badgeType.green,
                        badgeText: "++",
                        body: "",
                        data: [{name: '< 1 Jahr', uv: 10}, {name: '1 - 3 Jahre', uv: 40}, {name: '3 - 10 Jahre', uv: 70}, {name: '30 - 60 Jahre', uv: 120}, {name: '> 60 Jahre', uv: 30}],
                    },
                    {
                        name: "Unfallanzahl",
                        badgeType: badgeType.red,
                        badgeText: "- -",
                        body: "",
                        data: [{name: 'Unfallfrei', uv: 100}, {name: '1', uv: 80}, {name: '2', uv: 30}, {name: '3', uv: 20}, {name: '> 4', uv: 10}],
                    },
                    {
                        name: "Gefahrene Kilometer pro Jahr",
                        badgeType: badgeType.red,
                        badgeText: "-",
                        body: "",
                        data: [{name: 'km', uv: 100}, {name: '1', uv: 80}, {name: '2', uv: 30}, {name: '3', uv: 20}, {name: '> 4', uv: 10}],
                    },
                    {
                        name: "Anzahl an Nachtfahrten",
                        badgeType: badgeType.yellow,
                        badgeText: "|",
                        body: "",
                        data: [{name: 'Anzahl', uv: 100}, {name: '1', uv: 80}, {name: '2', uv: 30}, {name: '3', uv: 20}, {name: '> 4', uv: 10}],
                    },
                    {
                        name: "Grad der Einhaltung von Geschwindigkeitsbegrenzungen",
                        badgeType: badgeType.red,
                        badgeText: "-",
                        body: "",
                        data: [{name: '%', uv: 100}, {name: '1', uv: 80}, {name: '2', uv: 30}, {name: '3', uv: 20}, {name: '> 4', uv: 10}],
                    },
                ],
            },
        },
    }

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
                </>
            )}
            
            {stage == 4 && (<EndRedirection limesurveyUrl={limesurveyUrl} />)}

        </div>
    );
}
export default Experiment;