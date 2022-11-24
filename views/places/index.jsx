const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFortmatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFortmatted}
            </main>
        </Def>
    )
}

module.exports = index