import React from 'react'
import "./Home.scss"
import axios from ''

const Card = ({img}) =>(
  <img className='card' src={img} alt="cover" />
)
const Row = ({title,arr=[{
img:"https://static1.colliderimages.com/wordpress/wp-content/uploads/avengers-character-poster-banner-slice.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
}]}) =>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
      {
        arr.map((item) =>(
          <Card img={item.img}/>
        ))
      }
    

    </div>
  </div>
)

const Home = () => {
  return (
    <section className='home'>
      <div className='banner'></div>
    
      <Row  title={"Popular on Netflix"}/>
      <Row  title={"Popular on Netflix"}/>
      <Row  title={"Popular on Netflix"}/>
     
    </section>
  )
}

export default Home