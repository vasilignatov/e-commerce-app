import AllTitleBox from '../Common/AllTitleBox';
import TeamMemeberCard from './TeamMemeberCard';
import useFetch from '../../hooks/useFetch';

const OurServicesPage = () => {

    const { state: team, isLoading } = useFetch('http://localhost:3030/team')

    return (
        <>
            <AllTitleBox title="OUR SERVICES" />

            <div className="services-box-main">
                <div className="container">

                    <div className="row my-5">

                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>OUR MISSION</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>OUR VISION</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>OUR PHILOSOPHY</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>We are Trusted</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>We are Professional</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>OUR STORIES</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-12">
                            <h2 className="noo-sh-title">Meet Our Team</h2>
                        </div>

                        {
                            isLoading
                                ? <h3>Loading...</h3>
                                : team.map(x => <TeamMemeberCard key={x.id} member={x} />)
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServicesPage;