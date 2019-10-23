import React from 'react'
import {withRouter, Link} from 'react-router-dom';

const House = (props) => {
    return (
        <>
            <header 
                style={{background: props.secondaryColor, color: props.mainColor }}
            >
                <h2>Welcome To {props.match.params.name}</h2>
            </header>
            <nav>
                <Link to="/">Great Hall</Link>
                <Link to="/about">History of Magic</Link>
            </nav>
                <button className="audio" onClick={() => console.log(props.audio)}>Console Log</button>
                <button className="audio" onClick={() => this.playAudio()}>Play Audio</button>
        </>
    )
}

export default withRouter(House);