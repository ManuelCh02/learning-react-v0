import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const format = (userName) => `@${userName}`
    const formattedUserName = <span></span>

    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={format} 
                userName='nintendo' 
                name='Nintendo'
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
        </section>
    )
}