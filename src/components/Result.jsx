import React from 'react';

const Result = ({nextStage, casenumber}) => {
    
    
    return (
        <div id="staticModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="false" className="fixed top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 flex items-center justify-center bg-slate-300">
            <div className="relative w-full h-full max-w-2xl md:h-auto">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Ergebnis
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Ziel: Einstufung in die Preisklasse: niedrig, mittel oder hoch
                        </p>
                        <p className="text-base font-bold leading-relaxed text-gray-500 dark:text-gray-400">
                        Auf der Grundlage dieser Informationen wird empfohlen, {casenumber.firstName} in die Preisklasse {casenumber.result} einzustufen.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Eine Erklärung dieser Empfehlung ist auf der folgenden Seite zu finden.
                        </p>
                        
                    </div>
                    
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={nextStage} data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Zur Erklärung</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Result;