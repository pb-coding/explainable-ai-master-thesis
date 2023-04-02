import { badgeType } from '../utils/utils';

const caseYScale = {
    dy: 110,
    labelText: 'Andere Versicherungsnehmer (%)',
}

const ageData = [
    {x: '18 - 20', y: 3.5}, 
    {x: '21 - 24', y: 5.3}, 
    {x: '25 - 39', y: 22.7}, 
    {x: '40 - 59', y: 33.2}, 
    {x: '60 - 79', y: 27.1}, 
    {x: '80+', y: 8.2}
]

const drivingExperienceData = [
    { x: '0 - 2', y: 7 },
    { x: '3 - 5', y: 7 },
    { x: '6 - 10', y: 7 },
    { x: '11 - 15', y: 11 },
    { x: '16 - 20', y: 13 },
    { x: '21 - 30', y: 21 },
    { x: '30+', y: 34 },
]

const SFData = [
    {x: '<= 1', y: 4.8}, 
    {x: '2', y: 3.1}, 
    {x: '3', y: 3.2}, 
    {x: '4', y: 3.6},
    {x: '5', y: 3.7},
    {x: '6 - 10', y: 17.3},
    {x: '11 - 15', y: 16.6},
    {x: '16 - 20', y: 12.8},
    {x: '21 - 25', y: 13.3},
    {x: '>= 26', y: 21.6},

    
]

const kmPerYearData = [
    {x: '< 5', y: 15.5}, 
    {x: '5 - 9', y: 29.3}, 
    {x: '10 - 14', y: 29.2}, 
    {x: '15 - 19', y: 15.8}, 
    {x: '>= 20', y: 10.2}
]

const nightDrivingData = [
    {x: '0', y: 100}, 
    {x: '1', y: 80}, 
    {x: '2', y: 30}, 
    {x: '3', y: 20}, 
    {x: '> 4', y: 10}
]

const speedLimitData = [
    {x: '%', y: 100}, 
    {x: '1', y: 80}, 
    {x: '2', y: 30}, 
    {x: '3', y: 20}, 
    {x: '> 4', y: 10}
]


const caseData = {
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
                    <li>ist seit 1 Jahr unfallfrei (SF1)</li>
                    <li>fährt ca. 28.000 KM im Jahr</li>
                    <li>5% der Fahrten finden nachts statt.</li>
                    <li>überschreitet die Geschwindigkeitsbegrenzung im Durchschnitt 3 mal im Monat mehr als 10%</li>
                </ul>
            </>
        ), 
        result: 'mittel',
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
                        <li>Schadenfreiheitsklasse: sehr ungünstig</li>
                        <li>die Gefahrenen Kilometer pro Jahr: ungünstig</li>
                        <li>der Anteil an Nachtfahrten: neutral </li>
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
                    data: ageData,
                    labels: {
                        x: {
                            value: 'Alter',
                            position: 'insideBottom'
                        },
                        y: {
                            value: caseYScale.labelText,
                            position: 'insideLeft',
                            dy: caseYScale.dy,
                        }
                    },
                    referenceLine: {
                        x: '40 - 59',
                        label: '45 J.',
                        position: 'left',
                    },
                },
                {
                    name: 'Fahrerfahrung in Jahren',
                    badgeType: badgeType.green,
                    badgeText: "++",
                    body: "",
                    data: drivingExperienceData,
                    labels: {
                        x: {
                            value: 'Fahrerfahrung in Jahren',
                            position: 'insideBottom'
                        },
                        y: {
                            value: caseYScale.labelText,
                            position: 'insideLeft',
                            dy: caseYScale.dy,
                        }
                    },
                    referenceLine: {
                        x: '21 - 30',
                        label: '27 J.',
                        position: 'left'
                    },
                },
                {
                    name: "Schadenfreiheit in Jahren",
                    badgeType: badgeType.red,
                    badgeText: "- -",
                    body: "",
                    data: SFData,
                    labels: {
                        x: {
                            value: 'Schadenfrei in Jahren',
                            position: 'insideBottom'
                        },
                        y: {
                            value: caseYScale.labelText,
                            position: 'insideLeft',
                            dy: caseYScale.dy,
                        }
                    },
                    referenceLine: {
                        x: '<= 1',
                        label: '1 J. unfallfrei',
                        position: 'right'
                    },
                },
                {
                    name: "Gefahrene Kilometer pro Jahr",
                    badgeType: badgeType.red,
                    badgeText: "-",
                    body: "",
                    data: kmPerYearData,
                    labels: {
                        x: {
                            value: 'Fahrleistung in tausend km/J.',
                            position: 'insideBottom'
                        },
                        y: {
                            value: caseYScale.labelText,
                            position: 'insideLeft',
                            dy: caseYScale.dy,
                        }
                    },
                    referenceLine: {
                        x: '>= 20',
                        label: '28 km/J.',
                        position: 'left',
                    }
                },
                {
                    name: "Anteil an Nachtfahrten",
                    badgeType: badgeType.yellow,
                    badgeText: "|",
                    body: "",
                    data: nightDrivingData,
                    labels: {
                        x: {
                            value: 'Alter',
                            position: 'insideBottom'
                        },
                        y: {
                            value: caseYScale.labelText,
                            position: 'insideLeft',
                            dy: caseYScale.dy,
                        }
                    },
                    referenceLine: {
                        x: '40 - 59',
                        label: '45 J.',
                        position: 'left',
                    }
                },
                {
                    name: "Grad der Einhaltung von Geschwindigkeitsbegrenzungen",
                    badgeType: badgeType.red,
                    badgeText: "-",
                    body: "",
                    data: speedLimitData,
                    labels: {
                        x: {
                            value: 'Alter',
                            position: 'insideBottom'
                        },
                        y: {
                            value: caseYScale.labelText,
                            position: 'insideLeft',
                            dy: caseYScale.dy,
                        }
                    },
                    referenceLine: {
                        x: '40 - 59',
                        label: '45 J.',
                        position: 'left',
                    }
                },
            ],
            textualSensitivity: (
                <>
                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                        Fall: Michael<br />
                        Einstufung: mittlere Preisklasse
                    </p>
                    
                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                        Einer dieser Voraussetungen hätte erfüllt sein müssen, um sich für die Preisklasse <span class="text-green-700 font-bold">"niedrig"</span> zu qualifizieren:
                    </p>
                    <ul className="space-y-1 list-disc list-inside dark:text-gray-400">
                        <li>Wenn die Schadenfreiheit 6 oder mehr Jahre betragen hätte</li>
                        <li>Wenn die gefahrenen KM im Jahr weniger als 20.000 km betragen hätte </li>
                        <li>Wenn die Geschwindigkeitsbegrenzung nur einmal pro Monat oder seltener, mehr als 10% überschritten worden wäre</li>
                    </ul>
                </>
            ),
            visualSensitivity: [
                {
                    name: "Schadenfreiheit in Jahren",
                    data: SFData,
                    labels: {
                        x: {
                            value: 'Schadenfrei in Jahren',
                            position: 'insideBottom'
                        },
                        y: {
                            value: caseYScale.labelText,
                            position: 'insideLeft',
                            dy: caseYScale.dy,
                        }
                    },
                    referenceLine: {
                        x: '<= 1',
                        label: '1 J. unfallfrei',
                        position: 'right'
                    },
                    referenceArea: {
                        x1: '6 - 10',
                        x2: '>= 26',
                        label: 'niedrigere Preisklasse',
                        position: 'right',
                    },
                },
                {
                    name: "Gefahrene Kilometer pro Jahr",
                    data: kmPerYearData,
                    labels: {
                        x: {
                            value: 'Fahrleistung in tausend km/J.',
                            position: 'insideBottom'
                        },
                        y: {
                            value: caseYScale.labelText,
                            position: 'insideLeft',
                            dy: caseYScale.dy,
                        }
                    },
                    referenceLine: {
                        x: '>= 20',
                        label: '28 km/J.',
                        position: 'left',
                    },
                    referenceArea: {
                        x2: '< 5',
                        x1: '15 - 19',
                        label: 'niedrigere Preisklasse',
                        position: 'left',
                    },
                },
                {
                    name: "Grad der Einhaltung von Geschwindigkeitsbegrenzungen",
                    data: speedLimitData,
                    labels: {
                        x: {
                            value: 'Alter',
                            position: 'insideBottom'
                        },
                        y: {
                            value: caseYScale.labelText,
                            position: 'insideLeft',
                            dy: caseYScale.dy,
                        }
                    },
                    referenceLine: {
                        x: '40 - 59',
                        label: '45 J.',
                        position: 'left',
                    }
                },
            ],
        },
    },
};
const getCaseData = () => {
    return caseData;
}

export default getCaseData;