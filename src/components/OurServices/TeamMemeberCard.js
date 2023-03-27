const TeamMemberCard = ({member}) => {
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="hover-team">
                <div className="our-team">
                    <img src={member.imageUrl} alt="Team member photo" />
                    <div className="team-content">
                        <h3 className="title">{member.firstName} {member.lastName}</h3>
                        <span className="post">{member.jobPosition}</span>
                    </div>
                    <ul className="social">
                        <li>
                            <a href={member.social.facebook} className="fab fa-facebook" />
                        </li>
                        <li>
                            <a href={member.social.tweeter} className="fab fa-twitter" />
                        </li>
                        <li>
                            <a href={member.social.googleplus} className="fab fa-google-plus" />
                        </li>
                        <li>
                            <a href={member.social.youtube} className="fab fa-youtube" />
                        </li>
                    </ul>
                    <div className="icon">

                        <i className="fa fa-plus" aria-hidden="true" />
                    </div>
                </div>
                <div className="team-description">
                    <p>
                        {member.description}
                    </p>
                </div>
                <hr className="my-0" />
            </div>
        </div>
    )
}

export default TeamMemberCard;