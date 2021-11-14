import { FaLayerGroup } from 'react-icons/fa'
import { BiWindowAlt, BiTerminal } from 'react-icons/bi'

function About () {
    return (
        <section className="m-5 features-icons bg-light text-center" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><BiWindowAlt size={70}className="bi-terminal m-auto text-primary" /></div>
                            <h3>Fully Responsive</h3>
                            <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><FaLayerGroup size={70} className="bi-layers m-auto text-primary" /></div>
                            <h3>Bootstrap 5 Ready</h3>
                            <p className="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><BiTerminal size={70} className="bi-terminal m-auto text-primary" /></div>
                            <h3>Easy to Use</h3>
                            <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;