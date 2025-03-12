import { useState } from 'react'
import UserCard from './UserCard'

const Dashboard = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'Muskan Singh', email: 'Muski123@example.com', age: 22},
        {id: 2, name: 'Khushi Singh', email: 'Khushi234@example.com', age: 24},
        {id: 3, name: 'Renu Devi', email: 'Renu789@example.com', age: 45},
        {id: 4, name: 'Raj Kumar', email: 'raj456@example.com', age: 28},
        {id: 5, name: 'Priya Sharma', email: 'priya567@example.com', age: 26}
    ])

    return (
        <div className='container mx-auto p-4'>
            <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>User Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {users.map(user => (
                    <UserCard
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        age={user.age}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dashboard