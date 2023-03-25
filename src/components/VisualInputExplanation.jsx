import React, { useState } from 'react';
import ParameterCard from './ParameterCard'
import { badgeType } from '../utils/utils'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const VisualExplanation = () => {
    
    const drivingExperience = {
        name: 'Fahrerfahrung',
        data: [{name: '< 1 Jahr', uv: 10}, {name: '1 - 3 Jahre', uv: 40}, {name: '3 - 10 Jahre', uv: 70}, {name: '30 - 60 Jahre', uv: 120}, {name: '> 60 Jahre', uv: 30}],
      }
    
      const numberOfAccidents = {
        name: "Unfallanzahl",
        data: [{name: 'Unfallfrei', uv: 100}, {name: '1', uv: 80}, {name: '2', uv: 30}, {name: '3', uv: 20}, {name: '> 4', uv: 10}],
      }
    
      const [selectedParameter, setSelectedParameter] = useState(drivingExperience)
    
    return (
        <div className="flex items-center justify-center h-screen bg-slate-300">
        
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                KI Erklärung - Input-influence based
            </h5>

            <h5 className="mt-8 mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Parameter
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                <div id="parameter" className="col-span-5">
                
                    <ParameterCard 
                        link="#"
                        onClick={() => setSelectedParameter(drivingExperience)}
                        active={selectedParameter.name === drivingExperience.name}
                        heading="Fahrerfahrung" 
                        badgeType={badgeType.green} 
                        badgeText="++" 
                        body="..."
                    />

                    <ParameterCard
                        link="#"
                        onClick={() => setSelectedParameter(numberOfAccidents)}
                        active={selectedParameter.name === numberOfAccidents.name}
                        heading="Anzahl vergangener Verkehrsunfälle"
                        badgeType={badgeType.yellow}
                        badgeText="+"
                        body="..."
                    />

                    <ParameterCard
                        link="#"
                        heading="Gefahrene Kilometer pro Jahr"
                        badgeType={badgeType.yellow}
                        badgeText="+"
                        body="..."
                    />

                    <ParameterCard 
                        link="#"
                        heading="Anzahl an Nachtfahrten"
                        badgeType={badgeType.green}
                        badgeText="+++"
                        body="..."
                    />

                    <ParameterCard
                        link="#" heading="Grad der Einhaltung von Geschwindigkeitsbegrenzungen"
                        badgeType={badgeType.red}
                        badgeText="--"
                        body="..."
                    />

                    <ParameterCard
                        link="#"
                        heading="Alter"
                        badgeType={badgeType.green}
                        badgeText="++"
                        body="..."
                    />

                </div>

                <div id="chart" className="md:col-span-7 flex items-center justify-center mb-4 md:mb-0">
                    <LineChart width={500} height={300} data={selectedParameter.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>
                </div>

            </div>

            
            </div>
        </div>
    );
}
export default VisualExplanation;