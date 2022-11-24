const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/noodles.jpg" alt="noodles" height={500} width={500}/>
                    <div>
                    Photo by <a href="https://unsplash.com/@cactuspix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ke Vin</a> on <a href="https://unsplash.com/s/photos/free-rice?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary"> Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home