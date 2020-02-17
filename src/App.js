import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


const Animal = (props) => {

  

  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>

  )
}

function App() {


  // state declaration
  const [animals, setAnimals] = useState([])


  // handling state change and data fetching as a side effect
  useEffect(() => {
    fetch('https://glacial-earth-92728.herokuapp.com/animals')
      .then(res => res.json())
      .then(
        json => setAnimals(json.animals)
      )

  })

  //extracting object values as an array to use a map function 

  let animalArr = Object.values(animals)


  return (
    <div className="container">

    <div className="columns">


      {animalArr.map(el => <Animal name={el.name} img={el.image} />)}
    </div>
    </div>
  );
}

export default App;