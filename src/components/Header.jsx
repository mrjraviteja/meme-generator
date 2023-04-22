import Troll from '../assets/Troll Face.png'

function Header(){
    return(
        <div className="header">
            <img src={Troll} className='header-img'/>
            <h1 className='header-title'>Meme Generator</h1>
            <h2 className='header-side'>React Course - Project 3</h2>
        </div>
    )
}

export default Header