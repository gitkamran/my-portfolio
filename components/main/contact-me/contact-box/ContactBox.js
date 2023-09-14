
const ContactBox = ({ icon, variable, href,value }) => {
    return (
        <div className="flex items-center gap-1 border-b-2 border-b-indigo-300 pb-2">
            <div className="flex items-center gap-1">
                <div className="text-indigo-400 md:text-lg">
                    {icon}
                </div>
                <h2 className="text-gray-600 md:text-lg">{variable}:</h2>
            </div>
            <a href={href} target="_blank" className="text-gray-700 md:text-lg">{value}</a>
        </div>
    )
}

export default ContactBox