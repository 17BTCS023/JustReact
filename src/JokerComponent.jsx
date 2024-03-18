import { useEffect, useState } from "react";

export default function JokerComponent(){
    let [joke, setJoke] = useState({});
    const url = "https://official-joke-api.appspot.com/random_joke";

    const gerNewJoke = async () =>{
        let jokeRes = await fetch(url);
        let joke = await jokeRes.json();
        setJoke({...joke});
    }

    useEffect( () => {
        async function getFirstJoke(){
            let jokeRes = await fetch(url);
            let joke = await jokeRes.json();
            setJoke({...joke});
        }
        getFirstJoke();
    }, [])

    return(
        <>
        
        <h3>{joke.setup}</h3>
        <h2>{joke.punchline}</h2>
        <button onClick={gerNewJoke}>Get New Joke</button>
        </>
    )
}