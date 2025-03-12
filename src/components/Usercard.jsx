const UserCard = ({name, email, age}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">Email: {email}</p>
            <p className="text-gray-600">Age: {age}</p>
        </div>
    )
}

export default UserCard;