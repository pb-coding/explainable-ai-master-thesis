import React from 'react';
import { useNavigate } from 'react-router-dom';

const EndRedirection = ({limesurveyUrl}) => {

    const navigate = useNavigate()
    
    
    return (
        <div className="flex items-center justify-center h-screen bg-slate-300">
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Zurück zu Limesurvey
            </h5>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-8">
              Nun werden Ihnen auf Limesurvey ein paar Fragen gestellt. Bitte beantworten Sie diese so ehrlich wie möglich.
            </p>
            <a href={limesurveyUrl}>
              <button className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Zu den Fragen
              </button>
            </a>
          </div>
        </div>
        
    );
}
export default EndRedirection;