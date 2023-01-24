import * as React from 'react';


import mainlogo from '../../glamcode.png';


class MSideMenu extends React.Component {


    render() {


        return (
            <React.Fragment>


                <div id="mobile-menu-offcanvas" className="offcanvas offcanvas-leftside offcanvas-mobile-menu-section background-sidemenu-m" style={{ width: '80%', left: this.props.openSidemenu ? '80%' : '0%' }}>

                    <div className="offcanvas-header flex-end">

                        <div className="logo imagelogo-sidemenu ">
                            <a href="/"><img className="img-fluid" width="147" height="26" src={mainlogo} alt="Glamcode" /></a>
                        </div>

                        <button className="offcanvas-close" onClick={() => this.props.onhandlehideCloseSidemenu()} aria-label="offcanvas svg icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5.973" height="10.449" viewBox="0 0 5.973 10.449">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M13.051,11.417,17,7.466a.747.747,0,0,0-1.058-1.054l-4.479,4.476a.745.745,0,0,0-.022,1.03l4.5,4.507A.747.747,0,1,0,17,15.37Z" transform="translate(-11.251 -6.194)" />
                            </svg>
                        </button>
                    </div>

                    <div className="offcanvas-mobile-menu-wrapper">

                        <div className="mobile-menu-bottom">

                            <div className="offcanvas-menu">

                                <ul>
                                    <li>
                                        <a href="/" className="side-menu-box"><span className="side-text"><i className="fa fa-home  icon-m" aria-hidden="true" ></i>Home</span></a>
                                    </li>

                                    <li>
                                        <a href="/blogs" className="side-menu-box"><span className="side-text"><i className="fa fa-file-text  icon-m" aria-hidden="true" ></i>Blogs</span></a>
                                    </li>


                                    <li>
                                        <a href="/about-us" className="side-menu-box"><span className="side-text"><i className="fa fa-info-circle  icon-m" aria-hidden="true" ></i>About us</span></a>
                                    </li>

                                    <li>
                                        <a href="/contact-us" className="side-menu-box"><span className="side-text"><i className="fa fa-comment  icon-m" aria-hidden="true" ></i>Contact us</span></a>
                                    </li>



                                    {/* {this.state.loginstat ?
                                        (<React.Fragment>


                                            <li>
                                                <a href="/membership" className="side-menu-box"><span className="side-text"><i className="fa fa-star  icon-m" aria-hidden="true" ></i>Membership</span></a>
                                            </li>


                                            <li>
                                                <a href="/referearn" className="side-menu-box"><span className="side-text"><i className="fa fa-share  icon-m" aria-hidden="true" ></i>Refer And Earn</span></a>
                                            </li>

                                            <li>
                                                <div className="side-menu-box"><span className="side-text"><i className="fa fa-sign-in  icon-m" aria-hidden="true" ></i>Logout</span></div>
                                            </li>
                                        </React.Fragment>)
                                        :
                                        (
                                            <li>
                                                <a href="/login" className="side-menu-box"><span className="side-text"><i className="fa fa-sign-in  icon-m" aria-hidden="true" ></i>Login</span></a>
                                            </li>
                                        )

                                    } */}
                                </ul>
                            </div>

                        </div>



                    </div>

                </div>


            </React.Fragment>
        );
    }
}

export default MSideMenu;