import React, { useEffect, useState } from 'react';
import { logos, shapes, illustrations, people, smallLogos, defaultImages } from '../../../core/app_images';
import DrawerConfig from '../components/drawer/drawer_config';
import TopNavigator from '../components/navigator/top_navigator';
import Sidebar from '../components/sidebar/sidebar';
import '../../../assets/css/soft-ui-dashboard.css';

import CountSection from '../components/sections/count_section';
import { getCounts } from '../../../repositories/user_repository';
import { Link } from 'react-router-dom';
import TableComponent from '../components/tables/table_component';
import HomeTableRowComponent from '../components/tables/home_table_row_component';
import { getLoggedUserRecentProposals } from '../../../repositories/proposal_repository';

const AdminHomePage = () => {
    const [counts, setCounts] = useState({});
    const [loadingCounts, setLoadingCounts] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const [newProposals, setNewProposals] = useState([]);
    const rightTableActions = [
        {
            text: "Criar nova proposta",
            type: "link",
            link: "/admin/proposals/create"
        },
        {
            text: "Ver todas",
            type: "link",
            link: "/admin/proposals"
        }
    ]

    const onChangeDrawer = (opt) => {
        setShowDrawer(opt);
    }
    const onChangeNavbar = (opt) => {
        setShowNavbar(opt);
    }
    useEffect(() => {
        const getAllCounts = async () => {
            setLoadingCounts(true)
            let result = await getCounts();

            if (result.success) {
                setCounts(result.data)
            }
            setLoadingCounts(false)
        }

        const getMyRecentProposals = async () => {
            let result = await getLoggedUserRecentProposals();

            setNewProposals(result.data)
        }
        getAllCounts();
        getMyRecentProposals();
    }, []);

    return (
        <div className={`g-sidenav-show bg-gray-100${showNavbar ? " g-sidenav-pinned" : ""}`}>
            <Sidebar logo={logos.navbar} bgWhite={showNavbar} onCloseSidebar={onChangeNavbar} />
            <main className="main-content mt-1 border-radius-lg">
                <TopNavigator title="Início" showDrawer={onChangeDrawer} showNavbar={onChangeNavbar} breadcrumps={[]} navbarOpen={showNavbar} />
                <div className="container-fluid py-4">
                    <CountSection counts={counts} loading={loadingCounts} />
                    <div className="row mt-4">
                        <div className="col-lg-7 mb-lg-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="d-flex flex-column h-100">
                                                <p className="mb-1 pt-2 text-bold">Crie propostas!</p>
                                                <h5 className="font-weight-bolder">Facilite a comunicação com clientes!</h5>
                                                <p className="mb-5">Assim facilitamos o acesso aos clientes e agilizamos a etapa de início de qualquer projeto!</p>
                                                <Link className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" to="/admin/proposals">
                                                    {"Minhas propostas"}
                                                    <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                                            <div className="bg-gradient-dark border-radius-lg h-100">
                                                <img src={shapes.waves.white} className="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves" />
                                                <div className="position-relative d-flex align-items-center justify-content-center h-100">
                                                    <img className="w-100 position-relative z-index-2 pt-4" src={illustrations.rocket.white} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card h-100 p-3">
                                <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100" style={{ backgroundImage: `url(${people.ivancik})` }}>
                                    <span className="mask bg-gradient-dark"></span>
                                    <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                                        <h5 className="text-white font-weight-bolder mb-4 pt-2">Tem alguma ideia de melhoria?</h5>
                                        <p className="text-white">Fale conosco agora mesmo! Entre para nossa equipe e facilite este processo para o mundo todo!</p>
                                        <Link className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" to="/admin/contact">
                                            {"Contato"}
                                            <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                            <TableComponent
                                title="Propostas Recentes..."
                                subtitle={`Total de ${newProposals.length} propostas criadas`}
                                rightActions={rightTableActions}
                                showRightActions
                                rows={newProposals}
                                rowComponent={HomeTableRowComponent}
                                tableTitles={[
                                    "Cliente",
                                    "Título",
                                    "Expiração",
                                    "Status"
                                ]}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100">
                                <div className="card-header pb-0">
                                    <h6>Atualizações...</h6>
                                    <p className="text-sm">
                                        <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                        <span>{" Em breve..."}</span>
                                        {/* <span className="font-weight-bold">24%</span> this month */}
                                    </p>
                                </div>
                                <div className="card-body p-3">
                                    <div className="timeline timeline-one-side d-none">
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="ni ni-bell-55 text-success text-gradient"></i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="ni ni-html5 text-danger text-gradient"></i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="ni ni-cart text-info text-gradient"></i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="ni ni-credit-card text-warning text-gradient"></i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block mb-3">
                                            <span className="timeline-step">
                                                <i className="ni ni-key-25 text-primary text-gradient"></i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                                            </div>
                                        </div>
                                        <div className="timeline-block">
                                            <span className="timeline-step">
                                                <i className="ni ni-money-coins text-dark text-gradient"></i>
                                            </span>
                                            <div className="timeline-content">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                                                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
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
                                        © {new Date().getFullYear()},
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
            </main>
            <DrawerConfig show={showDrawer} onClose={onChangeDrawer} />
        </div>
    );
}

export default AdminHomePage;
