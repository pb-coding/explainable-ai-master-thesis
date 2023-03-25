import React from 'react';

const TextualInputExplanation = ({nextStage}) => {
    
    
    return (
        <div id="staticModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="false" className="fixed top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 flex items-center justify-center bg-slate-300">
            <div className="relative w-full h-full max-w-2xl md:h-auto">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Input influence-based explanation
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
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
                    </div>
                    
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={nextStage} data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Weiter</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TextualInputExplanation;