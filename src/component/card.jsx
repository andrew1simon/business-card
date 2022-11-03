import React from "react";
import facebookIcon from "../assets/social-Icons/facebook.png"
import githubIcon from "../assets/social-Icons/icon-github.png"
import linkedinIcon from "../assets/social-Icons/icon-linkedin.png"
import profileImg from "../assets/profile-img.png"



function Card () {
    return (
        <div className="card-cont">
            <img src={profileImg} className="profile-img"></img>
            <div className="card-dit-cont">
                <h2 className="name-text">Andrew Simon</h2>
                <h3 className="job-title">Frontend Developer</h3>
                <div className="buttons-cont">
                    <button className="email-btn"><span  className="btn-icon-spacer"><i className="fa-solid fa-envelope"></i></span> Email</button>
                    <button className="linkedin-btn"><span className="btn-icon-spacer"><i className="fa-brands fa-linkedin"></i></span> Linkedin</button>
                </div>
                <h2 className="sub-title">About</h2>
                <h4 className="dis-text d-one-padding">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</h4>
                <h2 className="sub-title">Interests</h2>
                <h4 className="dis-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</h4>
                
            </div>
            <div className="icons-cont">
                <img src={facebookIcon} className="social-icons"></img>
                <img src={githubIcon} className="social-icons"></img>
                <img src={linkedinIcon} className="social-icons"></img>
            </div>
        </div>
    )
}
export default Card