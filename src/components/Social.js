import React, { Component } from 'react';
import './Social.css';


class Social extends Component {
  render() {
    return (
			<div className="Social">
				<ul>
						<a href="http://github.com/khoaddnguyen" target="_blank"><p>Github</p></a> /
            <a href="https://www.linkedin.com/in/khoa-nguyen-2a25147a/" target="_blank"><p>Linkedin</p></a> /
            <a href="mailto:khoaddnguyen@gmail.com" target="_top"><p>Email</p></a>
				</ul>
      </div>
    );
  }
}

export default Social;
