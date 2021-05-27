import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProjectDescriptionSection from '../components/sections/project_description_section';
import ProjectDetailTabsSection from '../components/sections/project_detail_tabs_section';
import { useHistory, useParams } from 'react-router';
import { getProposalById } from '../../../repositories/proposal_repository';
import { CircularProgress } from '@material-ui/core';
import TopNavigator from '../components/navigation/top_navigator';
import { Helmet } from "react-helmet";

const ProposalPage = () => {
    const { id } = useParams();
    const navigation = useHistory();
    const [proposal, setProposal] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [enabled, setEnabled] = useState(false);
    const [codeInput, setCodeInput] = useState("");
    const [codeInputError, setCodeInputError] = useState(false);

    useEffect(() => {
        const getProposal = async () => {
            setIsLoading(true);
            let arrId = id.split('-');
            let proposal = await getProposalById(arrId[0], arrId[1]);

            if (proposal.success) {
                setProposal(proposal.data);
            } else {
                navigation.push('/');
            }
            setIsLoading(false);
        }
        if (id == null) {
            navigation.push('/');
        } else {
            getProposal();
        }
    }, [])

    const handleCloseDialog = () => {
        navigation.push('/');
    }

    const submitValidateCode = (ev) => {
        ev.preventDefault();

        if (codeInput == proposal.code) {
            setCodeInputError(false);
            setEnabled(true);
        } else {
            setCodeInputError(true);
        }
    }

    return (
        <div class="blog-author bg-gray-100">
            <TopNavigator page={"Proposta"} title={proposal.title} />
            {
                isLoading ?
                    <section className="py-sm-5 py-5 position-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mx-auto">
                                    <div className="row py-lg-8 py-8 text-center align-center">
                                        <div className="col-lg-2 col-md-5 position-relative my-auto">
                                            <CircularProgress /> <p>Carregando proposta...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    enabled ?
                        <>
                            <Helmet>
                                <title>{`Proposta - ${proposal.title}`}</title>
                                <meta name="description" content={proposal.description} />
                            </Helmet>
                            <ProjectDescriptionSection project={proposal} tabTo={"tab_sections"} />
                            {
                                proposal.items.length > 0 &&
                                <div id="tab_sections" className="container" style={{ minHeight: '70vh' }}>
                                    <ProjectDetailTabsSection items={proposal.items} />
                                </div>

                            }
                        </>
                        :
                        <form onSubmit={submitValidateCode}>
                            <Helmet>
                                <title>{`Proposta - ${proposal.title}`}</title>
                                <meta name="description" content={proposal.description} />
                            </Helmet>
                            <Dialog open={!enabled && !isLoading} onClose={handleCloseDialog} aria-labelledby="form-dialog-title" style={{ borderRadius: 40 }}>
                                <DialogTitle id="form-dialog-title">Validação do código</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        {"Para visualizar a proposta por completo... Insira o código!"}
                                    </DialogContentText>
                                    <TextField
                                        error={codeInputError}
                                        autoFocus
                                        margin="dense"
                                        label="Código da proposta"
                                        type="password"
                                        value={codeInput}
                                        onChange={(ev) => { setCodeInput(ev.target.value) }}
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseDialog} color="primary">
                                        {"Cancelar"}
                                    </Button>
                                    <Button type="submit" onClick={submitValidateCode} color="primary">
                                        {"Confirmar"}
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </form>
            }
            <footer class="footer">
                <div class="container">
                    <div class=" row">
                        <div class="col-12">
                            <div class="text-center">
                                <p class="my-4 text-sm">
                                    {"All rights reserved. Copyright © "}
                                    {new Date().getFullYear()}
                                    {". Rafael GCS - Propostas by"} <a href="https://www.rafaelgcs.com" target="_blank">Rafael Guimarães</a>{"."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ProposalPage;
