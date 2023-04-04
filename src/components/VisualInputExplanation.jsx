import React, { useState, useRef } from 'react';
import ParameterCard from './ParameterCard'
import VisualExplanationsHeader from './VisualExplanationsHeader'
import { 
    LineChart, 
    Line,
    Legend, 
    CartesianGrid, 
    XAxis, 
    YAxis, 
    ResponsiveContainer, 
    Label, 
    ReferenceLine 
} from 'recharts';
import { handleParameterClick } from '../utils/utils';

const VisualExplanation = ({nextStage, casenumber, hybridText}) => {  
    
    const [selectedParameter, setSelectedParameter] = useState(casenumber.explanation.visualInput[0])
    const chartRef = useRef(null);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-slate-300">

            <VisualExplanationsHeader casenumber={casenumber} />
        
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                KI Erklärung - Typ "Input-influence based / {hybridText ? "hybrid": "visual"}"
            </h5>

            <br />

            {hybridText}

            <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                <svg aria-hidden="false" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Info</span>
                <div>
                    Die folgenden Parameter haben die Beurteilung dieses Falls in dem angegebenen Ausmaß beeinflusst.<br />
                    Diese können angeklickt werden und auf der rechten Seite (unten bei mobiler Nutzung) kann {casenumber.firstName}'s Fall mit anderen Versicherungsnehmern verglichen werden.<br/>
                    Die rote Linie zeigt den Wert des Parameters für {casenumber.firstName} an.
                </div>
            </div>

            <h5 className="mt-2 mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Parameter
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                <div id="parameter" className="col-span-5">

                {casenumber.explanation.visualInput.map((param) => {
                    return (
                        <ParameterCard 
                            link="#"
                            onClick={() => handleParameterClick(param, setSelectedParameter, chartRef)}
                            active={selectedParameter.name === param.name}
                            heading={param.name}
                            badgeType={param.badgeType} 
                            badgeText={param.badgeText}
                            body={param.body}
                            key={param.name}
                        />
                    )
                })}

                </div>

                {/* flex flex-col items-center justify-center */}

                <div className="lg:col-span-7 mb-4 md:mb-0">

                    <h5 className="my-2 text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {selectedParameter.name} im Vergleich zu anderen Versicherten
                    </h5>

                    <div id="chart" ref={chartRef}>
                        
                        <ResponsiveContainer width={"100%"} height={300}>
                            <LineChart 
                                data={selectedParameter.data} 
                                margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
                            >
                                <Line type="monotone" dataKey="y" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="x">
                                    <Label 
                                        value={selectedParameter.labels.x.value} 
                                        offset={-10} 
                                        position={selectedParameter.labels.x.position} 
                                    />
                                </XAxis>
                                <YAxis>
                                    <Label 
                                        value={selectedParameter.labels.y.value}  
                                        angle={-90} 
                                        position={selectedParameter.labels.y.position}
                                        dy={selectedParameter.labels.y.dy}
                                    />
                                </YAxis>
                                <ReferenceLine 
                                    x={selectedParameter.referenceLine.x} 
                                    stroke="red" 
                                    label=
                                    {
                                        { 
                                            value: `${selectedParameter.referenceLine.label}`, 
                                            position: `${selectedParameter.referenceLine.position}` 
                                        }
                                    } 
                                />
                                <Legend 
                                        payload={[
                                            {
                                            type: "line",
                                            value: `${casenumber.firstName}`,
                                            color: "red",
                                            },
                                            {
                                            type: "square",
                                            value: "niedrigere Preisklasse",
                                            color: "green",
                                            },
                                        ]}
                                        verticalAlign="top"
                                        height={60}
                                        
                                    />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                </div>

            </div>

            <div className="flex justify-end">
                <button onClick={nextStage} className="px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Fertig
                </button>
            </div>

            
            </div>
        </div>
    );
}
export default VisualExplanation;