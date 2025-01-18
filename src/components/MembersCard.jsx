import React from 'react'
// import '../css/MemberCard.css'

const MemberCard = ({members}) => {
    

    
    return (
        <div className="members-container">
            {/* <div className="members-title">
                <hr className="members-title-hr" />
                <h1>Meet <span className="members-title-span">Our Team</span></h1>
            </div> */}
            <div className="members-cards">

            {members.map((member, index) => (
                <div className="member-card" key={index}>
                    <div className="card-inner">
                        <div className="card-front">
                            <div className="hex-image">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="member-image" 
                                    />
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-position">{member.position}</p>
                            </div>
                        </div>
                        <div className="card-back">
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-bio">{member.bio}</p>
                            <div className="skills">
                                {member.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                            <div className="social-links">
                                {member.socialLinks.map((link, linkIndex) => (
                                    <a key={linkIndex} href={link} className="social-link">
                                        {linkIndex === 0 ? <i class="ri-github-fill"></i> : linkIndex === 1 ? <i class="ri-linkedin-fill"></i> : <i class="ri-instagram-line"></i>}
                                    </a>
                                ))}
                            </div>      
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MemberCard