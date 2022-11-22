import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { logos, shapes, illustrations, people, smallLogos, defaultImages } from '../../../../core/app_images';
import DrawerConfig from '../../components/drawer/drawer_config';
import TopNavigator from '../../components/navigator/top_navigator';
import Sidebar from '../../components/sidebar/sidebar';
import '../../../../assets/css/soft-ui-dashboard.css';

// import ApexCharts from 'apexcharts';
// import CountSection from '../components/sections/count_section';
// import { getCounts } from '../../../repositories/user_repository';
import { Link, useHistory } from 'react-router-dom';
// import TableComponent from '../components/tables/table_component';
// import HomeTableRowComponent from '../components/tables/home_table_row_component';
import { getLoggedUserProposalsPagination } from '../../../../repositories/proposal_repository';
import ProposalItemsForm from '../../components/forms/proposal_items';
import { Button, fade, InputBase, makeStyles, TextField } from '@material-ui/core';
import { getUser } from '../../../../services/auth';
import { Form, FormikProvider, useFormik } from 'formik';
import { createNewClient } from '../../../../repositories/client_repository';


const AdminCreateClientPage = () => {
    const navigate = useHistory();
    const [loading, setLoading] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [perPage, setPerPage] = useState(5);

    const [proposals, setProposals] = useState([]);
    const [proposalsAttr, setProposalsAttr] = useState([]);

    const FormSchema = Yup.object().shape({
        name: Yup.string().required('Nome do cliente ou título da empresa é obrigatório!'),
        email: Yup.string().email('O e-mail informado precisa ser válido!')
            .required('E-mail do cliente é obrigatório!'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        validationSchema: FormSchema,
        onSubmit: (data, func) => {
            submitFormCreateClient(data, func.setSubmitting);
        }
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
        formik;

    const onChangeDrawer = (opt) => {
        setShowDrawer(opt);
    }
    const onChangeNavbar = (opt) => {
        setShowNavbar(opt);
    }

    const submitFormCreateClient = async (data, setSubmiting) => {

        let loggedUser = getUser();

        let data_send = {
            ...data,
            owner_id: loggedUser.id
        }

        let response = await createNewClient(data_send);

        if (response.id != null) {
            navigate.push('/admin/clients')
        }

        setSubmiting(false)
    }

    useEffect(() => {

        const getMyRecentProposals = async () => {
            setLoading(true);
            let result = await getLoggedUserProposalsPagination();

            setProposalsAttr(result);
            setProposals(result.data);
            setLoading(false);
        }

        // getMyRecentProposals();
    }, []);


    return (
        <div className={`g-sidenav-show bg-gray-100${showNavbar ? " g-sidenav-pinned" : ""}`}>
            <Sidebar logo={logos.navbar} bgWhite={showNavbar} onCloseSidebar={onChangeNavbar} />
            <main className="main-content mt-1 border-radius-lg" style={{ minHeight: '100vh' }}>
                <TopNavigator title="Criando Novo Cliente" showDrawer={onChangeDrawer} showNavbar={onChangeNavbar} breadcrumps={[{ title: "Início", link: '/admin' }, { title: "Clientes", link: '/admin/clients' }]} navbarOpen={showNavbar} />
                <div className="container-fluid py-4">
                    <FormikProvider value={formik}>
                        <div className="row my-4">
                            <Form autoComplete='on' noValidate onSubmit={handleSubmit} className="col-lg-12 col-md-6 mb-md-0 mb-4">
                                <div className="card p-3">
                                    <div className="row">
                                        {/* 'title', 'description', 'code', 'days_to_expires', 'client_id', 'owner_id' */}
                                        <div className="col-md-12 col-12">
                                            <TextField
                                                fullWidth
                                                label="Nome/Título"
                                                variant="filled"
                                                autoComplete="name"
                                                type="text"
                                                {...getFieldProps('name')}
                                                error={Boolean(touched.name && errors.name)}
                                                helperText={touched.name && errors.name}
                                            />
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <TextField fullWidth
                                                label="E-mail"
                                                variant="filled"
                                                autoComplete="email"
                                                type="email"
                                                {...getFieldProps('email')}
                                                error={Boolean(touched.email && errors.email)}
                                                helperText={touched.email && errors.email} />
                                        </div>
                                        <div className="col-12 py-4">
                                            <Button type="submit" className="bg-gradient-dark text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto">
                                                {"Criar Novo Cliente"}
                                                <i className="fas fa-plus text-sm ms-1" aria-hidden="true"></i>
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </Form>
                        </div>
                    </FormikProvider>
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

export default AdminCreateClientPage;
