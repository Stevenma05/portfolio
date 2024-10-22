import React from 'react'
import "./About.css"
import me from "../../assets/myImage.jpg"

function Card(props){
    return(
        <div className="about">
            <h3 className='title'>{props.title}</h3>
            <ul>
                <li className='content'>{props.content1}</li>
                 <li className='content'>{props.content2}</li>
                 <li className='content'>{props.content3}</li>
                 <li className='content'>{props.content4}</li>
                
            </ul>
        </div>
    );
}

function About() {
  return (
    <div className='main' id='about'>
        <img className='imageofme' src={me} alt='Me' />
        <div className='right'>
            <h2 className='heading'>About me</h2>
            <h3 className='subheading'>This is me!</h3>
            <p>Hi there! I am Steven Abdalla. I am a student of computer science, and I am very passionate for front-end development.</p>
            <p>When I am not coding, I am playing soccer. <stong>Fun Fact: </stong>I used to play professionally for my age group in Dubai.</p>
            <div className='cards'>
                <Card className="card" title="Education" content1="University of south florida" content2="BS in Computer Science" content3="Expected: May 2026" content4="GPA: 3.82/4.0"/>
                <Card className="card" title="Hobbies" content1="I love sports, especially soccer. When I am not playing sports, I like to socialize and hang out with my friends"/>
            </div>
        </div>
    </div>
  )
}

export default About


