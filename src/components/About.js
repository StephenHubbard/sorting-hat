import React from 'react';
import { Link } from 'react-router-dom';


const About = ({house}) => {
    return(
        <>
            <header>
                <h2>About Hogwarts</h2>
            </header>
            <nav>
                <Link to='/'>Great Hall</Link>
                {house ? <Link to={`/house/${house}`}>Common Room</Link> : null}
            </nav>
            <h3>Chapter XIII - The Chamber of Secrets</h3>
            <p>The legend of the Chamber of Secrets is the most enigmatic of all tales concerning the establishing of Hogwarts. When the four greatest witches and wizards of their age, Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin, came together to establish a school for those with magical abilities, it was logical that they chose a location far away from the eyes of non-magical people due to the climate of persecution prevalent at that time. Records show that the Hogwarts founders worked together for several years, seeking out youngsters who showed signs of magic and bringing them to the castle to be educated. However, a rift grew between Slytherin and the others when he criticised the number of students being admitted who came from non-magical families. Slytherin believed that magical learning should be kept within all-magic families and that students not of this parentage were untrustworthy. Eventually, a serious argument arose between Slytherin and Gryffindor regarding the subject and such was the acrimony of the disagreement, Slytherin left the school for good. The legend of the Chamber of Secrets arises from Slytherin's departure and has been the subject of debate for many centuries. The legend itself concerns a chamber supposedly constructed by Slytherin deep beneath the school that he kept a secret from the other founders and sealed so that none would be able to open it until his own true heir arrived at the school. The story goes that when Slytherin's true heir returns they alone will be able to open the Chamber of Secrets and release the horror within - a horror that will purge the school of those whom Slytherin believed were unworthy of studying magic. After many extensive searches of Hogwarts over the past nine hundred and fifty years, most reputable scholars agree that the existence of the Chamber of Secrets is a fanciful tale concocted by Slytheirn's supporters. While researching this book, the author consulted the newly appointed headmaster of Hogwarts, Professor Albus Dumbledore, who stated that during his time at the school he had personally seen nothing to convince him that the legend was based on anything other and supposition.</p>
        </>
    )
}

export default About;