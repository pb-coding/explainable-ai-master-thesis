export const badgeType = {
    blue: "ml-1 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
    red: "ml-1 bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
    green : "ml-1 bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    yellow: "ml-1 bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
}

export const groups = { 
    INPUT_TEXTUAL: 1,
    INPUT_VISUAL: 2,
    INPUT_HYBRID: 3,
    SENSITIVITY_TEXTUAL: 4,
    SENSITIVITY_VISUAL: 5,
    SENSITIVITY_HYBRID: 6
}

export const handleParameterClick = (parameter, setSelectedParameter, chartRef) => {
    setSelectedParameter(parameter)
    if (window.innerWidth < 1000) {
        setTimeout(() => {
            chartRef.current.scrollIntoView({ behavior: 'smooth' });
            console.log("scrolling to chart")
        }, 100);
    }
}