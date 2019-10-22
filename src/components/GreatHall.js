import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import sorting from '../utils/sorting'

const GreatHall = props => {
    return (
        <>
        <header>
            <h2>Great Hall</h2>
        </header>
        <nav>
            <Link to="/about">History of Magic</Link>
            {props.house ? <Link to={`/house/${props.house}`}>Common Room</Link> : null}
        </nav>
        {!props.house ? (
            <img
            src="https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Sorting_Hat.png/revision/latest/scale-to-width-down/2000?cb=20161120072849"
            alt="sorting hat"
            onClick={() =>
                sorting.randomHouse(props.updateHouseInfo, props.history.push)
            }
            />
        ) : null}
        </>
    )
}

export default withRouter(GreatHall)