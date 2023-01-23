import { useRouter } from "next/router"
import { Container } from "react-bootstrap"

export default function AboutUs() {
    const router = useRouter()

    const DATA = [
        { title: "Delhi", icon: "delhi.png" },
        { title: "Lucknow", icon: "lucknow.png" },
        { title: "Noida", icon: "noida.png" },
        { title: "Gurgaon", icon: "gurgaon.png" },
        { title: "Ghaziabad", icon: "ghaziabad.png" },
    ]

    const TEAM = [{}, {}, {}, {},]
    return (<>
        <div className="servicedesk-bg checkout-all min-vh-100" id="myBookings" style={{ paddingBottom: '50px' }}>
            <div className="header-css-head">
                <Container fluid >
                    <div className="d-flex flex-row" onClick={() => router.back()}>
                        <div className="icon-alignments">
                            <i className="fa fa-chevron-left fontSize-m-20" />
                        </div>
                        <p className="inside-text-head">About Us</p>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='mt-4 pt-xl-5 pt-4  card-container'>
                    <div className="card border-0 rounded-0">
                        <div className="card-body px-xl-3 py-xl-5">
                            <div className="mb-xl-3 text-center">
                                <h2 className="">Welcome To GlamCode</h2>
                            </div>
                            <div className="text-center about-desc">
                                <p>Let the Skin Blush</p>
                                <p>Glam Code is an Upscale Fully-Equipped Home Salon Services start-up, initiated by mother and daughter in law duo.</p>
                                <p>They travelled many places, visited named parlours, took home services and subsequently, decided to incorporate the basic intricacies of</p>
                                <p> Luxury Salon in Home Salon for comfortable, pampering and delightful experience.</p>
                                <p>Day by Day people want to Experiment with their Look.  Exquisite Skin Care, Makeup and bridal Services at door steps is the need of the </p>
                                <p>hour.</p>
                            </div>
                            <div className="text-center about-desc">
                                <p>The venture  understands customers  requirement and at the same time  see a bigger picture of  community transformation  by  creating</p>
                                <p> jobs for women.  Research shows that women will spend most of  their income on health, nutrition, and education for their families. Turning women</p>
                                <p> into breadwinners not only builds self-esteem, but improves their standing in the community and enables them to pool </p>
                                <p>resources and improve infrastructure. </p>
                            </div>

                            <div className="row loc-container" >
                                {DATA.map((e, i) => {
                                    return <div className="col-lg-2 col-6" key={i}>
                                        <div className="salonehome-all-Category-box" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                                            <div className="salonehome-all-Category-images">
                                                <img src={`../images/${e.icon}`} alt={e.title} className="w-100" />
                                            </div>
                                        </div>
                                        <div className="salone-all-category-text text-center loc-title">{e.title}</div>
                                    </div>
                                })}
                            </div>

                            <div className="leadership-team">
                                <div className="mb-xl-5 text-center">
                                    <h2 className="">Our Leadership Team</h2>
                                </div>
                                <div className="row pt-4">
                                    {TEAM.map((e, i) => {
                                        return <div className="col-lg-3 col-6 px-2 px-xl-4 text-center" key={i}>
                                            <div className="team-member ">
                                                <div className="team-img"></div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </div>
    </>
    )
}