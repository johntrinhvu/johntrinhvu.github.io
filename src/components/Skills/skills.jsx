import React from 'react';
import './skills.css';
import stack from '../../assets/stack.png';
import uiux from '../../assets/uiux.png';
import computer from '../../assets/computer.jpeg';

export default function Skills() {
    return (
        <section id="skills">
            <span className="skillTitle">Who am I</span>
            <span className="skillDesc">
                I am a student, based in Irvine, CA, that also has connections within the Washington, D.C. Metropolitan area. 
                As a software engineering student, I exhibit a strong sense of discipline and responsibility, consistently meeting deadlines for my coursework. 
                Beyond the classroom, I take the initiative to work on side-projects, constantly seeking to enhance my skills and increase my value in the competitive 
                software development job market. My commitment to excellence shines through in both my academic pursuits and my competitive drive, particularly in the realm 
                of League of Legends.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={stack} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend/Backend Development</h2>
                        <p>I have a wealth of experience in full stack development, with a strong command of front-end technologies like HTML, CSS, and JavaScript, and a proficiency
                            in creating dynamic and interactive web applications. Additionally, I excel in backend development using Python and Django, while also demonstrating
                            my ability to leverage the MERN stack for building robust and efficient applications.
                        </p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={uiux} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>In addition to my expertise in full stack development, I possess a keen eye for UI/UX design, ensuring that the applications I create not only function
                            seamlessly, but also offer an exceptional user experience.
                        </p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={computer} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>IT Systems</h2>
                        <p>My IT skills extend beyond development, as I excel in managing large-scale infrastructure, with a particular strength in utilizing Active Directory to
                            streamline user authentication, access control, and security on an enterprise level. My experience in this area ensures the efficient and secure
                            operation of IT systems within organizations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}