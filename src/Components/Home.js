import React, {useEffect, useState}from "react";

function Home(){

    const[reviews, setReview] = useState([])

    useEffect(() => {
        fetch("https://ontrack-server.onrender.com/reviews")
          .then(response => response.json())
          .then(data => setReview(data))
          .catch(error => {
            console.error('error fetching data:', error);
          });
      }, []);

    return(
        <>
        <section id="section1">
        <div id="page1">
            <div id="content">
                <h2>I'll shoot your shots</h2>
                <h3>Capturing life's magic, one heartfelt click at a time. Let's craft cherished memories together</h3>
                <button id="Ride">Explore</button>
            </div>
       </div>
        </section>
        <section id="section2">
            <div id="numbers">
            <div id="stats">
                <h1>100+</h1>
                <h3>Projects done</h3>
                <p>
                    Having accomplished over 100 successful projects, 
                    I take pride in delivering my best 
                    work in each and every one of them.
                </p>
            </div>
            <div id="stats">
                <h1>3+</h1>
                <h3>Years of experience</h3>
                <p>
                    With over 3 years of experience in the industry, 
                    I have built an extensive portfolio covering 
                    a wide range of photography genres.
                </p>
            </div>
            <div id="stats">
                <h1>217+</h1>
                <h3>Happy clients</h3>
                <p>
                    Over the course of my 3-year journey, 
                    I've been fortunate to collaborate with 
                    220 valued clients.
                </p>
            </div>
            </div>
            <h2>What clients are saying about me</h2>
            <ul id="reviews">
                  {reviews.map((review) => (
                    <div key={review.name} id="review">
                        <img src={review.image} alt={review.name}id="reviewer"></img>
                        <h1> <span>{review.name}</span></h1>
                        <p> {review.comment}</p>
                        <h2> ~ {review.username}</h2>
                    </div>
                  ))}
                </ul>
        </section>

        </>
    )
}
export default Home