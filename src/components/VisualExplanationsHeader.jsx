import React from 'react';

const VisualExplanationsHeader = ({casenumber}) => {
    
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
        <>
            {isOpen ? (
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Fall
                    </h5>

                    {casenumber.casepage}

                    <br />

                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Ergebnis
                    </h5>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Empfohlene Preisklasse: {casenumber.result}
                    </p>

                    <br/>
                    <button onClick={() => setIsOpen(false)} className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Fall & Ergebnis ausblenden
                    </button>
                </div>
            ) : (
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <button onClick={() => setIsOpen(true)} className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Fall & Ergebnis anzeigen
                    </button>
                </div>
            )}
        </>
        
    );
}
export default VisualExplanationsHeader;