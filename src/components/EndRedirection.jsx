import React from 'react';
import { useNavigate } from 'react-router-dom';

const EndRedirection = ({limesurveyUrl}) => {

    const navigate = useNavigate()
    
    
    return (
        <div className="flex items-center justify-center h-screen bg-slate-300">
        
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Weiter zu Limesurvey
            </h5>

            

            <p className="font-normal text-gray-700 dark:text-gray-400">
                Nun werden dir auf Limesurvey ein paar Fragen gestellt. Bitte beantworte diese so ehrlich wie möglich.
            </p>
            <br/>

            <p className="font-bold text-gray-700 dark:text-gray-400">
                WICHTIG! Das Passwort für Limesurvey lautet: <span className="font-bold text-green-600">6677</span>
            </p>
            

            <a href={limesurveyUrl}>
                <button className="px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Zu den Fragen
                </button>
            </a>


            </div>
        </div>
    );
}
export default EndRedirection;