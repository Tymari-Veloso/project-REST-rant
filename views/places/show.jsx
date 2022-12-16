const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className='inactive'>
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRating = data.place.comments.reduce ((tot, c)=> {
      return tot + c.stars
    }, 0)
    let averageRating = sumRating / data.place.comments.length
    rating =(
      <h3>
        {Math.round(averageRating)} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div className='row'>
              <div className='col-sm-6'>
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className='col-sm-6'>
                <h1>
                  {data.place.name}
                </h1>
                <h2>
                  Rating
                </h2>
                {rating}
                <br />
                <p>Not Rated</p>
                <h2>
                  Description
                </h2>
                <p>Not Rated</p>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                  Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                  Delete
                </button>
                </form>
              </div>
            </div>
            <hr />
            <h2>Comments</h2>
            {comments}
            <h2>Got Your own Rant or Rave?</h2>
            <form method="POST" action={`/places/${data.place.id}/comment`}>
              <div>
                <label htmlFor="content">Content</label>
                <textarea type="text" name="content" id="content" />
              </div>
              <div>
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" />
              </div>
              <div>
                <label htmlFor="star-rating">Star Rating</label>
                <input type="number" step="0.5" name="stars" id="stars" />
              </div>
              <div>
                <label htmlFor="rant">Rant</label>
                <input type="checkbox" name="rant" id="rant" />
              </div>
              <button type='submit' className='btn btn-primary'>
                Add Comment
              </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show