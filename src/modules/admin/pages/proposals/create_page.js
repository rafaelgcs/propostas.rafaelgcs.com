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
import { createNewProposal, createNewProposalItem, getLoggedUserProposalsPagination } from '../../../../repositories/proposal_repository';
import ProposalItemsForm from '../../components/forms/proposal_items';
import { Button, fade, InputBase, makeStyles, MenuItem, TextField } from '@material-ui/core';
import { getAllClients } from '../../../../repositories/client_repository';
import { Form, FormikProvider, useFormik } from 'formik';
import { getUser } from '../../../../services/auth';
import { generateCode } from '../../../../utils/functions';

const AdminCreateProposalPage = () => {

  const navigate = useHistory();
  const [loading, setLoading] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [perPage, setPerPage] = useState(5);

  const [proposals, setProposals] = useState([]);
  const [clients, setClients] = useState([]);
  const [proposalsAttr, setProposalsAttr] = useState([]);
  const [proposal_items, setProposal_items] = useState([]);

  const onChangeDrawer = (opt) => {
    setShowDrawer(opt);
  }
  const onChangeNavbar = (opt) => {
    setShowNavbar(opt);
  }

  const createNewSession = () => {
    let newElement = {
      title: "NOVA SESSAO",
      description: JSON.stringify({
        "time": Date.now(),
        "blocks": [
          {
            "id": "hnPOLy7FKj",
            "type": "header",
            "data": {
              "text": "Título da Nova Sessão",
              "level": 2
            }
          },
          {
            "id": "cTytObwl9z",
            "type": "paragraph",
            "data": {
              "text": "Texto da nova sessão"
            }
          }
        ],
        "version": "2.22.0"
      })
    };

    setProposal_items(
      [
        ...proposal_items,
        newElement
      ]
    )
  }

  const submitFormCreateProposal = async (data, setIsSubmit) => {
    let loggedUser = getUser();

    let data_send = {
      ...data,
      owner_id: loggedUser.id
    }

    let response = await createNewProposal(data_send);

    if (response.id != null) {

      submitNewItems(response)
      // navigate.push('/admin/proposals')
    } else {
      console.log("ERROR NO POST:")
    }
  }

  const submitNewItems = async (proposal) => {

    for (var i = 0; i < proposal_items.length; i++) {
      let data_send = {
        proposal_id: proposal.id,
        title: proposal_items[i].title,
        description: proposal_items[i].description
      }

      let res = await createNewProposalItem(data_send)
      console.log(res)
    }
  }

  // {/* 'title', 'description', 'code', 'days_to_expires', 'client_id', 'owner_id' */}
  const FormSchema = Yup.object().shape({
    title: Yup.string().required('Título da proposta comercial é obrigatório!'),
    description: Yup.string().required('A descrição do projeto é obrigatória!'),
    days_to_expires: Yup.number().required('Dias para expirar é obrigatório!'),
    client_id: Yup.number().required('Selecionar um cliente é obrigatório!'),
    code: Yup.string().required('O código de acesso da proposta é obrigatório!')
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      days_to_expires: '',
      client_id: null,
      code: ''
    },
    validationSchema: FormSchema,
    onSubmit: (data, func) => {
      submitFormCreateProposal(data, func.setSubmitting);
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const generateNewCode = () => {

    let props_new = getFieldProps('code')
    props_new.onChange({ target: { value: generateCode(), name: 'code' }, type: "change" })
    // values.code = generateCode()
  }

  useEffect(() => {

    const getMyRecentProposals = async () => {
      setLoading(true);
      let result = await getLoggedUserProposalsPagination();

      setProposalsAttr(result);
      setProposals(result.data);
      setLoading(false);
    }

    const getMyRecentClients = async () => {
      setLoading(true);
      let result = await getAllClients();
      if (result.success) {
        setClients(result.data);
      }
    }

    getMyRecentClients();

    // getMyRecentProposals();
  }, []);

  useEffect(() => {
    setPerPage(proposalsAttr.per_page)
  }, [proposalsAttr])

  return (
    <div className={`g-sidenav-show bg-gray-100${showNavbar ? " g-sidenav-pinned" : ""}`}>
      <Sidebar logo={logos.navbar} bgWhite={showNavbar} onCloseSidebar={onChangeNavbar} />
      <main className="main-content mt-1 border-radius-lg" style={{ minHeight: '100vh' }}>
        <TopNavigator title="Criando Nova Proposta" showDrawer={onChangeDrawer} showNavbar={onChangeNavbar} breadcrumps={[{ title: "Início", link: '/admin' }, { title: "Propostas", link: '/admin/proposals' }]} navbarOpen={showNavbar} />
        <div className="container-fluid py-4">
          <FormikProvider value={formik}>
            <div className="row my-4">
              <Form autoComplete='on' noValidate onSubmit={handleSubmit} className="col-lg-12 col-md-6 mb-md-0 mb-4">
                <div className="card p-3">
                  <div className="row">
                    {/* 'title', 'description', 'code', 'days_to_expires', 'client_id', 'owner_id' */}
                    <div className="col-md-4 col-12">
                      <TextField
                        fullWidth
                        label="Título"
                        variant="filled"
                        autoComplete="text"
                        type="text"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <TextField
                        fullWidth
                        label="Dias Para Expirar"
                        variant="filled"
                        autoComplete="number"
                        type="number"
                        {...getFieldProps('days_to_expires')}
                        error={Boolean(touched.days_to_expires && errors.days_to_expires)}
                        helperText={touched.days_to_expires && errors.days_to_expires}
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="row">
                        <div className="col-8">

                          <TextField
                            fullWidth
                            label="Código"
                            variant="filled"
                            autoComplete="text"
                            type="text"
                            {...getFieldProps('code')}
                            error={Boolean(touched.code && errors.code)}
                            helperText={touched.code && errors.code}
                          />
                        </div>
                        <div className="col-4 py-2">
                          <Button onClick={() => generateNewCode()} className="bg-gradient-dark text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto">
                            {"Gerar"}
                            <i className="fa fa-repeat text-sm ms-1" aria-hidden="true"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <TextField
                        select
                        label="Cliente"
                        {...getFieldProps('client_id')}
                        error={Boolean(touched.client_id && errors.client_id)}
                        helperText={touched.client_id && errors.client_id}
                        variant="filled"
                        fullWidth
                      >
                        {clients.map((option) => (
                          <MenuItem key={`client_option-${option.id}`} value={option.id}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </TextField>

                    </div>
                    <div className="col-md-12 col-12">
                      <TextField
                        fullWidth
                        label="Descrição"
                        variant="filled"
                        multiline
                        rows={4}
                        {...getFieldProps('description')}
                        error={Boolean(touched.description && errors.description)}
                        helperText={touched.description && errors.description} />
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <Button className="bg-gradient-dark text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                    onClick={() => createNewSession()}>
                    {"Adicionar Seção"}
                    <i className="fas fa-plus text-sm ms-1" aria-hidden="true"></i>
                  </Button>
                  {
                    proposal_items.length > 0 ?
                      <Button type="submit" className="bg-gradient-dark text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                        style={{ marginLeft: 5 }}>
                        {"Criar Nova Proposta"}
                        <i className="fas fa-plus text-sm ms-1" aria-hidden="true"></i>
                      </Button> :
                      <></>
                  }
                </div>
                <ProposalItemsForm items={proposal_items} onChangeItems={(ev) => setProposal_items(ev)} />

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

export default AdminCreateProposalPage;
