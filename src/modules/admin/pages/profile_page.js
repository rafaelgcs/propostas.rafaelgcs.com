import React, { useState } from 'react';
import { curved, defaultImages, logos, people } from '../../../core/app_images';
import DrawerConfig from '../components/drawer/drawer_config';
import TopNavigator from '../components/navigator/top_navigator';
import Sidebar from '../components/sidebar/sidebar';
import '../../../assets/css/soft-ui-dashboard.css';

const ProfilePage = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const onChangeDrawer = (opt) => {
        setShowDrawer(opt);
    }
    const onChangeNavbar = (opt) => {
        setShowNavbar(opt);
    }
    return (
        <div className={`g-sidenav-show bg-gray-100${showNavbar ? " g-sidenav-pinned" : ""}`}>
            <Sidebar logo={logos.navbar} bgWhite={showNavbar} onCloseSidebar={onChangeNavbar} />
            <div className="main-content position-relative bg-gray-100">
                <TopNavigator title="Profile" showDrawer={onChangeDrawer} showNavbar={onChangeNavbar} navbarOpen={showNavbar} />
                <div className="container-fluid">
                    <div className="page-header min-height-300 border-radius-xl mt-4" style={{
                        backgroundImage: `url(${curved.curved_0})`, backgroundPositionY: '50%'
                    }} >
                        <span className="mask bg-gradient-primary opacity-6"></span>
                    </div>
                    <div className="card card-body blur shadow-blur mx-4 mt-n6">
                        <div className="row gx-4">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    <img src={people.bruceMars} alt="..." className="w-100 border-radius-lg shadow-sm" />
                                    <a href="javascript:;" className="btn btn-sm btn-icon-only bg-gradient-light position-absolute bottom-0 end-0 mb-n2 me-n2">
                                        <i className="fa fa-pen top-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Image"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        Alec Thompson
              </h5>
                                    <p className="mb-0 font-weight-bold text-sm">
                                        CEO / Co-Founder
              </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                <div className="nav-wrapper position-relative end-0">
                                    <ul className="nav nav-pills nav-fill p-1 bg-transparent" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab" href="javascript:;" role="tab" aria-controls="overview" aria-selected="true">
                                                <svg className="text-dark" width="16px" height="16px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Basic-Elements" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="Rounded-Icons" transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                                                <g id="box-3d-50" transform="translate(603.000000, 0.000000)">
                                                                    <path className="color-background" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z" id="Path"></path>
                                                                    <path className="color-background" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z" id="Path" opacity="0.7"></path>
                                                                    <path className="color-background" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z" id="Path" opacity="0.7"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="ms-1">Overview</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="javascript:;" role="tab" aria-controls="teams" aria-selected="false">
                                                <svg className="text-dark" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <title>document</title>
                                                    <g id="Basic-Elements" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="Rounded-Icons" transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                                                <g id="document" transform="translate(154.000000, 300.000000)">
                                                                    <path className="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" id="Path" opacity="0.603585379"></path>
                                                                    <path className="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z" id="Shape"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="ms-1">Teams</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="javascript:;" role="tab" aria-controls="dashboard" aria-selected="false">
                                                <svg className="text-dark" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <title>settings</title>
                                                    <g id="Basic-Elements" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="Rounded-Icons" transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                            <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                                                <g id="settings" transform="translate(304.000000, 151.000000)">
                                                                    <polygon className="color-background" id="Path" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
                                                                    <path className="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" id="Path" opacity="0.596981957"></path>
                                                                    <path className="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z" id="Path"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="ms-1">Projects</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Platform Settings</h6>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault">Email me when someone follows me</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault1">Email me when someone answers on my post</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault2">Email me when someone mentions me</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault3" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault3">New launches and projects</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault4" checked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault4">Monthly product updates</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0 pb-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault5" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault5">Subscribe to newsletter</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <div className="row">
                                        <div className="col-md-8 d-flex align-items-center">
                                            <h6 className="mb-0">Profile Information</h6>
                                        </div>
                                        <div className="col-md-4 text-right">
                                            <a href="javascript:;">
                                                <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <p className="text-sm">
                                        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
              </p>
                                    <hr className="horizontal gray-light my-4" />
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Location:</strong> &nbsp; USA</li>
                                        <li className="list-group-item border-0 ps-0 pb-0">
                                            <strong className="text-dark text-sm">Social:</strong> &nbsp;
                  <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                <i className="fab fa-facebook fa-lg"></i>
                                            </a>
                                            <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                <i className="fab fa-twitter fa-lg"></i>
                                            </a>
                                            <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                <i className="fab fa-instagram fa-lg"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Conversations</h6>
                                </div>
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src={people.kalVisuals} alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Sophie B.</h6>
                                                <p className="mb-0 text-xs">Hi! I need more information..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src={people.marie} alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Anne Marie</h6>
                                                <p className="mb-0 text-xs">Awesome work, can you..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src={people.ivana} alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Ivanna</h6>
                                                <p className="mb-0 text-xs">About files I can..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src={defaultImages.team4} alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Peterson</h6>
                                                <p className="mb-0 text-xs">Have a great afternoon..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0">
                                            <div className="avatar me-3">
                                                <img src={defaultImages.team3} alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Nick Daniel</h6>
                                                <p className="mb-0 text-xs">Hi! I need more information..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="card mb-4">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-1">Projects</h6>
                                    <p className="text-sm">Architects design houses</p>
                                </div>
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="position-relative">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src={defaultImages.homeDecor1} alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                    </a>
                                                </div>
                                                <div className="card-body px-1 pb-0">
                                                    <p className="text-gradient text-dark mb-2 text-sm">Project #2</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Modern
                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        As Uber works through a huge amount of internal management turmoil.
                      </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" src={defaultImages.team1} />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" src={defaultImages.team2} />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" src={defaultImages.team3} />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" src={defaultImages.team4} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="position-relative">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src={defaultImages.homeDecor2} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                    </a>
                                                </div>
                                                <div className="card-body px-1 pb-0">
                                                    <p className="text-gradient text-dark mb-2 text-sm">Project #1</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Scandinavian
                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Music is something that every person has his or her own specific opinion about.
                      </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" src={defaultImages.team3} />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" src={defaultImages.team4} />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" src={defaultImages.team1} />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" src={defaultImages.team2} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="position-relative">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src={defaultImages.homeDecor3} alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                    </a>
                                                </div>
                                                <div className="card-body px-1 pb-0">
                                                    <p className="text-gradient text-dark mb-2 text-sm">Project #3</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Minimalist
                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Different people have different taste, and various types of music.
                      </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Peterson">
                                                                <img alt="Image placeholder" src={defaultImages.team4} />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nick Daniel">
                                                                <img alt="Image placeholder" src={defaultImages.team3} />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Milly">
                                                                <img alt="Image placeholder" src={defaultImages.team2} />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                                                                <img alt="Image placeholder" src={defaultImages.team1} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card h-100 card-plain border">
                                                <div className="card-body d-flex flex-column justify-content-center text-center">
                                                    <a href="javascript:;">
                                                        <i className="fa fa-plus text-secondary mb-3"></i>
                                                        <h5 className=" text-secondary"> New project </h5>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer pt-3">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-lg-6 mb-lg-0 mb-4">
                                    <div className="copyright text-center text-sm text-muted text-lg-left">
                                        © <script>
                                            document.write(new Date().getFullYear())
                </script>,
                made with <i className="fa fa-heart"></i> by
                <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim</a>
                for a better web.
              </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="http://blog.creative-tim.com" className="nav-link text-muted" target="_blank">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank">License</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            <DrawerConfig show={showDrawer} onClose={onChangeDrawer} />
        </div>
    );
}

export default ProfilePage;
