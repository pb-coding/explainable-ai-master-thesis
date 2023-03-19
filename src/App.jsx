import React from 'react'
import ParameterCard from './components/ParameterCard'
import { badgeType } from './utils/utils'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function App() {

  const data = [{name: '< 1 Jahr', uv: 10}, {name: '1 - 3 Jahre', uv: 40}, {name: '3 - 10 Jahre', uv: 70}, {name: '30 - 60 Jahre', uv: 120}, {name: '> 60 Jahre', uv: 30}];

  const lineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );

  return (
    <div className="App">

      <div className="container mx-auto mt-5">
        
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            KI Erklärung
          </h5>
          
          <p className="font-normal text-gray-700 dark:text-gray-400">
            vom Typ "input-influence based".

            Tim ist ein Kunde des Versicherungsunternehmens. Er ist:
            <ul>
              <li>35 Jahre alt</li>
              <li>fährt seit 17 Jahren Auto</li>
              <li>War einmal in einen Unfall verwickelt, der nicht seine Schuld war</li>
              <li>Fährt durchschnittlich 800 Meilen pro Monat</li>
              <li>Überschreitet die Geschwindigkeitsbegrenzung im Durchschnitt einmal alle zwei Monate</li>
              <li>20 % von Tims Fahrten finden nachts statt.</li>
            </ul>
          </p>

          <h5 className="mt-8 mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Parameter
          </h5>

          <div className="grid grid-cols-12 gap-4">

            <div id="parameter" className="col-span-5">
              
              <ParameterCard 
                link="#"
                heading="Fahrerfahrung" 
                badgeType={badgeType.green} 
                badgeText="++" 
                body="..."
              />

              <ParameterCard
                link="#"
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

            <div id="chart" className="col-span-7">
              
              {lineChart}

            </div>

          </div>

        
        </div>
      </div>

    </div>
  )
}

export default App
