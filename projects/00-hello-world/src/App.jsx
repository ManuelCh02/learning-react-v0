import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    // const format = (userName) => `@${userName}`
    // const formattedUserName = <span></span>

    // const [name, setName] = useState('nintendo')

    // const handleNameChanger = () => {
    //     setName('apple')
    // }

    const users = [
        {
            userName: 'nintendo',
            name: 'Nintendo',
            isFollowing: true
        },
        {
            userName: 'apple',
            name: 'Apple',
            isFollowing: false
        },
        {
            userName: 'playstation',
            name: 'Play Station',
            isFollowing: true
        },
        {
            userName: 'xbox',
            name: 'Xbox',
            isFollowing: false
        }
    ]

    return (
        <section className='App'>
            
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user

                    return (
                        <TwitterFollowCard  
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}
                        />
                    )
                })
            }
        </section>
    )
}