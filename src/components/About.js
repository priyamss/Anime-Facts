import React from 'react'

export const About = () => {

    return (
        <div className="container my-3">
            <div className="jumbotron">
                <h1>Website Made by :- Priyam</h1>
                <h1 className="display-4">Hello, world!</h1>
                <h1 className="display-4">•About the application</h1>
                <p>This app was made in a JAVASCRIPT Framework called React.</p>
                <p className="lead"></p>
                <hr className="my-4" />
                <h3 className="display-4">•Where the data is coming ?</h3>
                <p>The Data is coming from an api <a className='btn btn-primary' href="https://anime-facts-rest-api.herokuapp.com/api/v1/" target="_blank"> Data Api </a> .</p>
                <p className="lead"></p>
                <hr className="my-4" />
                <h1 className="display-4">•Want to make a webapp like me?</h1>
                <p>So go and click the button down where you can also make a app like me.</p>
            </div>
            <a className="btn btn-primary btn-sm" target="_blank" href="https://www.youtube.com/c/CodeWithHarry" role="button">Learn coding here</a>
            <a className="btn btn-primary btn-sm mx-3" target="_blank" href="https://chandan-02.github.io/anime-facts-rest-api/" role="button">Credits Of the website Data</a>
        </div>

    )
}

export default About;