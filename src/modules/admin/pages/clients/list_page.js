import React, { useEffect, useState } from 'react';
import { logos, shapes, illustrations, people, smallLogos, defaultImages } from '../../../../core/app_images';
import DrawerConfig from '../../components/drawer/drawer_config';
import TopNavigator from '../../components/navigator/top_navigator';
import Sidebar from '../../components/sidebar/sidebar';
import '../../../../assets/css/soft-ui-dashboard.css';

import ApexCharts from 'apexcharts';
import CountSection from '../../components/sections/count_section';
import { getCounts } from '../../../../repositories/user_repository';
import { Link } from 'react-router-dom';
import TableComponent from '../../components/tables/table_component';
import { getAllClients, getAllClientsPagination } from '../../../../repositories/client_repository';
import ClientTableRowComponent from '../../components/tables/client_table_row_component';

const AdminClientListPage = () => {
    const [loading, setLoading] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [perPage, setPerPage] = useState(5);

    const [clients, setClients] = useState([]);
    const [clientsAttr, setClientsAttr] = useState([]);

    const onChangeDrawer = (opt) => {
        setShowDrawer(opt);
    }
    const onChangeNavbar = (opt) => {
        setShowNavbar(opt);
    }
    useEffect(() => {

        const getMyRecentClients = async () => {
            setLoading(true);
            // let result = await getLoggedUserProposalsPagination();
            let result = await getAllClientsPagination();
            if (result.success) {

                setClientsAttr(result.data);
                setClients(result.data.data);
                setLoading(false);
            }
        }

        getMyRecentClients();
    }, []);

    useEffect(() => {
        console.log("chegou no use effect clientsAttr", clientsAttr)
        setPerPage(clientsAttr.per_page)
    }, [clientsAttr])

    return (
        <div className={`g-sidenav-show bg-gray-100${showNavbar ? " g-sidenav-pinned" : ""}`}>
            <Sidebar logo={logos.navbar} bgWhite={showNavbar} onCloseSidebar={onChangeNavbar} />
            <main className="main-content mt-1 border-radius-lg" style={{ minHeight: '100vh' }}>
                <TopNavigator title="Clientes" showDrawer={onChangeDrawer} showNavbar={onChangeNavbar} breadcrumps={[{ title: "Início", link: '/admin' }]} navbarOpen={showNavbar} />
                <div className="container-fluid py-4">
                    <div className="row mt-4">
                        <div className="col-4 mb-lg-0 mb-4">
                        </div>
                        <div className="col-4">

                        </div>
                        <div className="col-lg-4">
                            <div className="card h-100 p-3">
                                <div className="overflow-hidden position-relative border-radius-lg bg-gradient-dark h-100">
                                    <div className="card-body d-flex flex-column h-100 p-3 text-center">
                                        <Link className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" to="/admin/clients/create">
                                            {"Novo Cliente "}
                                            <i className="fas fa-plus text-sm ms-1" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-lg-12 col-md-6 mb-md-0 mb-4">
                            <TableComponent
                                title="Meus Clientes..."
                                loading={loading}
                                enablePagination
                                onChangePerPage={(attr) => { setPerPage(attr) }}
                                paginationAttr={clientsAttr}
                                subtitle={`Total de ${clients.length} clientes cadastrados`}
                                showRightActions={false}
                                rows={clients}
                                rowComponent={ClientTableRowComponent}
                                tableTitles={[
                                    "",
                                    "Nome",
                                    "E-mail",
                                    "Data de Cadastro"
                                ]}
                            />
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

export default AdminClientListPage;
