import React from 'react';
import { Link } from 'react-scroll';
import './intro.css';
import bg from '../../assets/Headshot.png';
import {FaArrowDown} from '@react-icons/all-files/fa/FaArrowDown';

export default function intro() {
    return (
        <section id="intro" className="intro-container">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">John Trinh Vu</span>
                    <br />
                    <span className="introTextDesc">
                        Full Stack Developer <br /> SWE Undergraduate at UCI
                    </span>
                </span>
                <p className="introPara">
                    I am a dedicated and ambitious student at the University of California, Irvine (UCI), pursuing a degree in software engineering. I am based in Irvine, CA, but am
                    originally from Washingon, D.C. My commitment to excellence shines through in both my academic pursuits and my competitive drive, particularly in the realm of League of Legends.
                </p>
                <p className="introPara">
                    
                </p>
                <Link>
                    <button className="viewWorkBtn">
                        <FaArrowDown className="arrow-down"/>&nbsp; View my work
                    </button>
                </Link>
            </div>
            <div className="profPic">
                <img src={bg} alt="profile" className="bg" />
            </div>
        </section>
    )
};