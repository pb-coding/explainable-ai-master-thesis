import React, { useState, useEffect } from 'react';

const AiLoading = ({nextStage}) => {

    const [isLoading, setIsLoading] = useState(true);
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 3000);
    
            return () => clearTimeout(timer);
        }, []);
    
    
    return (
        <>
            <style>{`
                .border-gradient-slice {
                    border-width: 4px;
                    border-image-slice: 1;
                    border-image-source: linear-gradient(to left, #85AFf2, #cee0f5);
                }
            `}</style>
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-300 font-mono">
                <div className="relative w-32 h-32">
                    {isLoading ? 
                        (<div className="absolute top-0 left-0 animate-spin rounded-full h-32 w-32 border-b-4 border-t-4 border-gradient-slice"></div>):
                        (<div className="absolute top-0 left-0 rounded-full h-32 w-32 border-b-4 border-t-4 border-gradient-slice"></div>)
                    }
                    <div className="absolute top-0 left-0 flex items-center justify-center h-32 w-32">
                        <span className="text-xl font-extrabold text-white">AI</span>
                    </div>
                </div>
                {isLoading ? (
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-white">Calculating Results...</p>
                        <p className="text-lg text-white opacity-80">Please wait</p>
                    </div>
                ) : (
                    <>
                        <div className="text-center">
                            <p className="text-2xl font-semibold text-white">Calculation complete!</p>
                            <p className="text-lg text-white opacity-80">See results</p>
                        </div>
                        <button onClick={nextStage} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                            Next
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default AiLoading;