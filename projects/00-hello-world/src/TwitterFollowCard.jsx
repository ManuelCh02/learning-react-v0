import { useState } from "react"

export function TwitterFollowCard ({ children, formatUserName ,userName = 'unknown', name }) {
    /*
        "state" returns two different status in an array
        isFollowing = state[0] // state value
        setIsFollowing = state[1] // A function that allows state updates for the new verion
    */
    const [isFollowing, setIsFollowing] = useState(false) // Set "false" as a default value 

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            {children}
            <header className="tw-followCard-header">
                <img 
                    src={`https://unavatar.io/${userName}`}
                    alt="Nintendo avatar" 
                    className='tw-followCard-avatar'
                    />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}