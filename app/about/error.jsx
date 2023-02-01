"use client"

export default function Error({error, reset}){
    return(
        <div>
            This ain`t loading up: {error.massage}
            <button onClick={()=> reset()}>Reload</button>
        </div>
    )
}