import React from "react";
import { tiers } from '../constants/constants';

const Footer = () => {
    const logo = require('assets/img/blue-logo-dark-293x200.png');
    return (
        <footer className="page-footer font-small blue-grey lighten-5">
            <div className="blue">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Fique ligado em minhas redes sociais!</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row blue-text">
                    <div className="col-md-12 py-5">
                        <div className="mb-5 flex-center">
                            <a className="fb-ic" href="https://facebook.com/tiago.carvalho.587606" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f fa-lg blue-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="tw-ic" href="mailto:contato@tiagocarvalho.online" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-envelope fa-lg blue-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="ins-ic" href="https://instagram.com/pt.tiagocarvalho" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram fa-lg blue-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                        </div>
                    </div>


                </div>

            </div>
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3 black-text">
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <img src={logo} height="200" alt="Logomarca Tiago Carvalho" />
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Planos</h6>
                        <hr className="teal blue mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        {tiers.map((tier) => {
                            return <p>
                                <a className="black-text" href={tier.url} target="_blank" rel="noopener noreferrer">{tier.title}</a>
                            </p>
                        })}

                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Links Úteis</h6>
                        <hr className="teal blue mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p>
                            <a className="black-text" href="https://api.whatsapp.com/send?phone=5571992483233">Fale Comigo no Whatsapp</a>
                        </p>
                        <p>
                            <a className="black-text" href="https://api.whatsapp.com/send?phone=5571992483233">Marque uma avaliação</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contato</h6>
                        <hr className="teal blue mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                        <p>
                            <i className="fas fa-envelope mr-3"></i> <a className="blue-text" href="mailto:contato@tiagocarvalho.online" target="_blank" rel="noopener noreferrer">contato@tiagocarvalho.online</a>
                        </p>
                        <p>
                            <i className="fab fa-instagram mr-3"></i> <a className="blue-text" href="https://instagram.com/pt.tiagocarvalho" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </p>
                        <p>
                            <i className="fab fa-facebook mr-3"></i> <a className="blue-text" href="https://facebook.com/tiago.carvalho.587606" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> <a className="blue-text" href="tel:71992483233" target="_blank" rel="noopener noreferrer">+55 71 9 9248-3233</a>
                        </p>
                    </div>


                </div>
            </div>
            <div className="footer-copyright text-center text-black-50 py-3"> © {new Date().getFullYear()} Copyright:
                <a className="black-text" href="/"> Tiago Carvalho</a>, feito com{" "}
                <i className="fa fa-heart heart black-text" /> por <a href="https://rafaelgcs.github.io" target="_blank" rel="noopener noreferrer" className="black-text">Rafael Guimarães</a>
            </div>


        </footer>
    );
}

export default Footer;