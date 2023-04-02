import React, { useState, useRef } from 'react';
import ParameterCard from './ParameterCard'
import VisualExplanationsHeader from './VisualExplanationsHeader'
import { 
    LineChart, 
    Line, 
    CartesianGrid, 
    XAxis, 
    YAxis, 
    ResponsiveContainer, 
    Label, 
    ReferenceLine 
} from 'recharts';

const VisualExplanation = ({nextStage, casenumber, hybridText}) => {  
    
    const [selectedParameter, setSelectedParameter] = useState(casenumber.explanation.visualInput[0])
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-slate-300">

            <VisualExplanationsHeader casenumber={casenumber} />
        
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                KI Erklärung - Typ "Input-influence based / visual "
            </h5>

            <br />

            {hybridText}

            <br />

            <h5 className="mt-2 mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Parameter
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                <div id="parameter" className="col-span-5">

                {casenumber.explanation.visualInput.map((param) => {
                    return (
                        <ParameterCard 
                            link="#"
                            onClick={() => setSelectedParameter(param)}
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
                        Vergleich zu anderen Versicherungsnehmern
                    </h5>

                    <div id="chart">
                        
                        <ResponsiveContainer width={"100%"} height={300}>
                            <LineChart data={selectedParameter.data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                <Line type="monotone" dataKey="y" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="x">
                                    <Label 
                                        value={selectedParameter.labels.x.value} 
                                        offset={0} 
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