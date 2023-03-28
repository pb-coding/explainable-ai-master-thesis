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
            firstName: "Michael",
            casepage: (
                <>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Michael ist ein Kunde des Versicherungsunternehmens. Er ist:
                    </p>
                    <ul className="space-y-1 list-disc list-inside dark:text-gray-400">
                        <li>45 Jahre alt</li>
                        <li>fährt seit 27 Jahren Auto</li>
                        <li>Hatte Schuld an 3 Unfällen</li>
                        <li>Fährt ca. 28.000 KM im Jahr</li>
                        <li>Überschreitet die Geschwindigkeitsbegrenzung im Durchschnitt einmal alle zwei Monate</li>
                        <li>5 % der Fahrten finden nachts statt.</li>
                    </ul>
                </>
            ), 
            result: "Auf der Grundlage dieser Informationen hat das KI-System Tim für die mittlere Versicherungsstufe qualifiziert.",
            explanation: {
                textualInput: (
                    <>
                        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                            Unser Prognosemodell hat Ihre persönlichen Daten und Ihr Fahrverhalten ausgewertet, um Ihre Unfallwahrscheinlichkeit vorherzusagen. Je mehr +s oder -s, desto positiver oder negativer wirkte sich der jeweilige Faktor auf Ihr prognostiziertes Unfallrisiko aus. Unwichtige Faktoren sind gekennzeichnet.
                        </p>
                        <ul className="space-y-1 list-disc list-inside dark:text-gray-400">
                            <li>Fahrerfahrung (++)</li>
                            <li>Anzahl vergangener Verkehrsunfälle (+)</li>
                            <li>Gefahrene Kilometer pro Jahr (+)</li>
                            <li>Anzahl an Nachtfahrten (+++) </li>
                            <li>Grad der Einhaltung von Geschwindigkeitsbegrenzungen (--)</li>
                            <li>Alter (++)</li>
                        </ul>
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
                        badgeType: badgeType.green,
                        badgeText: "+++",
                        body: "",
                        data: [{name: 'Anzahl', uv: 100}, {name: '1', uv: 80}, {name: '2', uv: 30}, {name: '3', uv: 20}, {name: '> 4', uv: 10}],
                    },
                    {
                        name: "Grad der Einhaltung von Geschwindigkeitsbegrenzungen",
                        badgeType: badgeType.red,
                        badgeText: "--",
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