import React from 'react';

const Case = ({nextStage}) => {
    
    
    return (
        <div className="flex items-center justify-center h-screen bg-slate-300">
        
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fall
            </h5>

            <br/>

            <p className="font-normal text-gray-700 dark:text-gray-400">
                Tim ist ein Kunde des Versicherungsunternehmens. Er ist:
            </p>
            <ul className="space-y-1 list-disc list-inside dark:text-gray-400">
                <li>35 Jahre alt</li>
                <li>fährt seit 17 Jahren Auto</li>
                <li>War einmal in einen Unfall verwickelt, den er nicht verschuldet hat</li>
                <li>Fährt durchschnittlich 800 Meilen pro Monat</li>
                <li>Überschreitet die Geschwindigkeitsbegrenzung im Durchschnitt einmal alle zwei Monate</li>
                <li>20 % von Tims Fahrten finden nachts statt.</li>
            </ul>

            <br/>

            <p className="font-normal text-gray-700 dark:text-gray-400">
                Im nächsten Schritt wird nun folgendes passieren.. Anleitung...
            </p>

            {/* Add a button to go to the next step*/}
            <button onClick={nextStage} className="px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Weiter
            </button>


            </div>
        </div>
    );
}
export default Case;