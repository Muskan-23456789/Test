const UserCard = ({name, email, age, image}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-4">
            <img 
                src={image} 
                alt={name}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">Email: {email}</p>
            <p className="text-gray-600">Age: {age}</p>
        </div>
    )
}

export default UserCard