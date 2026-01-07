import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const format = (userName) => `@${userName}`
    const formattedUserName = <span></span>

    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName='nintendo' 
                name='Nintendo'
            />
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={false} 
                userName='xbox' 
                name='Xbox'
            />
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName='playstation' 
                name='PlayStation'
            />
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName='VideoArtGame' 
                name='VideoArtGame'
            />
        </section>
    )
}