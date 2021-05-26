import { Grid } from '@material-ui/core';
import React from 'react';


const MFITSection = () => {

    return (<section id="app-mfit" className="text-center mt-5 align-items-center white-text" style={{ backgroundColor: 'transparent' }}>
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-10 col-12 align-items-center">
                    <h2 className="h1-responsive font-weight-bold mt-5 blue-text">
                        App MFITPERSONAL
                </h2>
                    <h4 className="h4-responsive mb-5">
                        Aplicativo Inteligente
                </h4>
                    <Grid container>
                        <Grid item md={6}>
                            <img className="mb-4" src={require('assets/img/mfit_logo-white.webp')} alt="LOGO MFIT Personal" />
                            <div className="text-left">
                                <h2 className="mb-4" style={{ textTransform: 'uppercase' }}>
                                    Tudo na palma da sua mão.
                                </h2>
                                <h4 className="mb-4">
                                    Receba seus treinos personalizados e completos, faça os pagamentos e tenha acompanhamento de forma presencial e online direto pelo app <strong className="blue-text">MFITPERSONAL</strong>.
                                </h4>
                                <h4 className="mb-4">
                                    Terá acesso, também, a todas as explicações do programa em vídeos super detalhados.
                                </h4>
                            </div>
                        </Grid>
                        <Grid item md={6} className="d-none d-md-block">
                            <img src={require("assets/img/MFIT_personal_phone.png")} alt="visualização do aplicativo mfit_personal" />
                        </Grid>
                        <Grid item md={6} className="d-block d-md-none">
                            <div style={{ maxHeight: 320, maxWidth: '96vw', overflow: 'hidden' }}>
                                <img style={{ position: 'relative' }} src={require("assets/img/MFIT_personal_phone.png")} alt="visualização do aplicativo mfit_personal" />
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </div>
    </section>);
}

export default MFITSection;