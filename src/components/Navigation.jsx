import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-center space-x-6">
                <Link 
                    to="/" 
                    className="hover:text-blue-400 transition-colors duration-300"
                >
                    Home
                </Link>
                <Link 
                    to="/dashboard" 
                    className="hover:text-blue-400 transition-colors duration-300"
                >
                    Dashboard
                </Link>
            </div>
        </nav>
    )
}

export default Navigation