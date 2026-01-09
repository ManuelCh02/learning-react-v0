import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const format = (userName) => `@${userName}`
    const formattedUserName = <span></span>

    const [name, setName] = useState('nintendo')

    const handleNameChanger = () => {
        setName('apple')
    }

    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={format} 
                userName={name} 
                name={name}
                initialIsFollowing={true}
            >
                <h1>Children example</h1>
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUserName={format}  
                userName='xbox' 
                name='Xbox'
            />
            <TwitterFollowCard 
                formatUserName={format} 
                userName='playstation' 
                name='PlayStation'
            />
            <TwitterFollowCard 
                formatUserName={format} 
                userName='VideoArtGame' 
                name='VideoArtGame'
            />

            <button onClick={handleNameChanger}>Cambio nombre</button>
        </section>
    )
}