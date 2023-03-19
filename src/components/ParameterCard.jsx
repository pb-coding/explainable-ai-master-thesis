const ParameterCard = ({ link, heading, badgeType, badgeText, body }) => {
    return (
        <a href={link} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
            <span className={badgeType}>{badgeText}</span>
            <p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
        </a>
    )
}
export default ParameterCard;