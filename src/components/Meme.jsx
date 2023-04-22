import React from "react"

function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMeme , setAllMeme] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    function getMeme(){
        const randomNumber = Math.floor(Math.random() * allMeme.length) 
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    return(
        <main>
            <div className="meme-form">
                <input type="text" onChange={handleChange} name="topText" value={meme.topText} placeholder="Shut up" className="meme-input"/>
                <input type="text" onChange={handleChange} name="bottomText" value={meme.bottomText} placeholder="and take my money" className="meme-input"/>
                <button className="meme-submit" onClick={getMeme}>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme