import React, { useState, useRef } from 'react';
import ParameterCard from './ParameterCard'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const VisualExplanation = ({nextStage, casenumber}) => {  
    
    const [selectedParameter, setSelectedParameter] = useState(casenumber.explanation.visualInput[0])
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    
    return (
        <div className="flex items-center justify-center h-screen bg-slate-300">
        
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                KI Erklärung - Input-influence based
            </h5>
            <br />

            <p className="font-normal text-gray-700 dark:text-gray-400">
                Bewertung des Fall: {casenumber.firstName}
            </p>

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

                <div id="chart" className="lg:col-span-7 flex items-center justify-center mb-4 md:mb-0">
                    <ResponsiveContainer width={"100%"} height={300}>
                        <LineChart data={selectedParameter.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>

            
            </div>
        </div>
    );
}
export default VisualExplanation;