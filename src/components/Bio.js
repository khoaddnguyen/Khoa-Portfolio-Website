import React, { Component } from 'react';
import './Bio.css';


class Bio extends Component {
  render() {
    return (
      <div className="Bio">
        <h2>A bit about me</h2>
        <p>{"Started my career in Public Accounting, I found many of my clients struggle with technology. During the pandemic, I taught myself programming and have fallen in love with it. Besides my day job, I have been pursuing a Masters in IT - Software Engineering (graduating April 2023) as a part-time student."}</p>

        <p>Focusing on minimalistic website design using MERN stack, and a particular emphasis on backend development, I'd like to say I'm involved with the entire web development lifecycle. I strive for clean and concise code but not averse to getting the job done quick. My development skills include <b>HTML5, CSS3, JavaScript5/ES6, Java, Python, Bootstrap, jQuery, Node.JS, Express.JS, React.JS, MongoDB, PosgreSQL, and Git</b> This website was built in React!</p>

        <p>{"On a more personal front, I am an intuitive thinker, a pro Just Dance player, and competitive karaoke singer. Feel free to reach out if you want to chat!"}</p>

      </div>
    );
  }
}

export default Bio;
