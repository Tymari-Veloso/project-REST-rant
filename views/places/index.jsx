const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFortmatted = data.places.map((place, index) => {
        return (
            <div className='col-sm-6'>
                <h2>
                    <a href={`/places/${index}`}>
                        {place.name}
                    </a>
                </h2>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} height={300} width={300}/>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                {placesFortmatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index