const ParameterCard = ({ link, onClick, active, heading, badgeType, badgeText, body }) => {
    return (
        <a href={link} onClick={onClick} className={`block max-w-sm mt-1 p-6 ${active?'bg-gray-200' : 'bg-white'} border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
            <span className={badgeType}>{badgeText}</span>
            <p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
        </a>
    )
}
export default ParameterCard;