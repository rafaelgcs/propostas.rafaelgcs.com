import React from "react";
import { MDBIcon } from "mdbreact";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@material-ui/core";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        // <div className={className} style={{ ...style, display: 'block' }}>
        //     <MDBBtn gradient="blue" onClick={onClick}>
        //         <i class="fas fa-arrow-right"></i>
        //     </MDBBtn>
        // </div>
        <div
            className={className}
            style={{ ...style, color: 'black', display: "none" }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Testimonials = () => {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <section className="text-center align-items-center blue-text transparent pb-5" style={{
            backgroundColor: '#0e0e14', borderStyle: 'solid',
            borderColor: '#0d0e14',
            borderWidth: '0 3vw 3vw 3vw',
        }}>
            <div className="pt-3">
                <h2 style={{ textTransform: 'uppercase' }} className="mb-2 font-weight-bold mt-5">Depoimentos</h2>
                <h6 className="h6-responsive mb-5 grey-text">
                    Veja depoimentos de alguns dos meus alunos
                </h6>
            </div>
            <Slider {...settings} style={{ maxWidth: window.innerWidth }}>
                <div className="container">
                    <Paper elevation={3} className={classes.paper}>
                        <Grid container className="mt-2 mb-2 justify-content-center">
                            <Grid item md={4}>
                                <div className="row justify-content-center">
                                    <div className="justify-content-center">
                                        <img
                                            src={require('assets/img/testimonials/Klauss.jpeg')}
                                            className='rounded-circle text-center'
                                            alt=''
                                            height='100%'
                                        />
                                    </div>
                                </div>
                                <h4 className='font-weight-bold'>Klauss</h4>
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                            </Grid>
                            <Grid item md={8}>
                                <p className="container grey-text">
                                    <MDBIcon icon='quote-left' /> Passei muito tempo sem fazer atividade física, até que no começo de 2019 conheci Tiago e comecei a treinar como seu aluno. Tiago é um profissional e professor exemplar, que me mostrou a importância a atividade física e como ela pode ser essencial para o bem estar biopsicossocial de um ser humano. Além disso, posso considerá-lo não só como professor, mas também como um amigo fiel, que se preocupa com seus alunos constantemente e seu cuidado e atenção vão além a preparação e do condicionamento físico. É evidente, então, o excelente resultado do trabalho personalizado que Tiago me ofereceu.
                            </p>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                <div className="container">
                    <Paper elevation={3} className={classes.paper}>
                        <Grid container className="mt-2 mb-2 justify-content-center">
                            <Grid item md={4}>
                                <div className="row justify-content-center">
                                    <div className="justify-content-center">
                                        <img
                                            src={require('assets/img/testimonials/Alcides.jpeg')}
                                            className='rounded-circle text-center'
                                            alt=''
                                            width='100%'
                                        />
                                    </div>
                                </div>
                                <h4 className='font-weight-bold'>Alcides</h4>
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                            </Grid>
                            <Grid item md={8}>
                                <p className="container grey-text">
                                    <MDBIcon icon='quote-left' /> Conheci Tiago quando ele ainda trabalhava em academia, ele era coordenador e dava aula de funcional. Eu comecei fazendo as aulas na academia e com a evolução no meu processo de emagrecimento, fui conhecer o projeto que ele tem de assessoria esportiva na praia. A partir daí, comecei a gostar mais e mais de praticar atividade física, pois os resultados não paravam de evoluir mês a mês. Além da assessoria esportiva, pude contar com um excelente acompanhamento do profissional que ele é. Sou grato ao professor e grande amigo que acabei ganhando pra vida!
                                </p>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                <div className="container">
                    <Paper elevation={3} className={classes.paper}>
                        <Grid container className="mt-2 mb-2 justify-content-center">
                            <Grid item md={4}>
                                <div className="row justify-content-center">
                                    <div className="justify-content-center">
                                        <img
                                            src={require('assets/img/testimonials/Natalia.jpeg')}
                                            className='rounded-circle text-center'
                                            alt=''
                                            width='100%'
                                        />
                                    </div>
                                </div>
                                <h4 className='font-weight-bold'>Natália</h4>
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                            </Grid>
                            <Grid item md={8}>
                                <p className="container grey-text">
                                    <MDBIcon icon='quote-left' /> Conheci Tiago nas areias da Barra há quase 4 anos, fazia parte do seu time do funcional. Nunca gostei muito de atividade física e nem fazia,então esse foi um começo bem divertido e prazeroso, Tiago sempre teve uma interação bacana com seus alunos, dentro e fora das atividades. Comecei a ver resultados, mais força , mais disposição, mais energia. Hoje não faço o funcional, mas levei ele comigo pra academia como personal. Tiago me acompanha, me aconselha, me diverte, me estimula. Através das areias da Barra, além de um professor/ treinador/mestre, ganhei um AMIGO.
                                </p>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                <div className="container">
                    <Paper elevation={3} className={classes.paper}>
                        <Grid container className="mt-2 mb-2 justify-content-center">
                            <Grid item md={4}>
                                <div className="row justify-content-center">
                                    <div className="justify-content-center">
                                        <img
                                            src={require('assets/img/testimonials/Patricia.jpeg')}
                                            className='rounded-circle text-center'
                                            alt=''
                                            width='100%'
                                        />
                                    </div>
                                </div>
                                <h4 className='font-weight-bold'>Patrícia</h4>
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                            </Grid>
                            <Grid item md={8}>
                                <p className="container grey-text">
                                    <MDBIcon icon='quote-left' /> Antes de começar a consultoria estava acostumada a passar mais de uma hora da academia, fazendo treinos longos, com exercício isolados, o que muitas vezes era uma desculpa para não malhar, pela falta de tempo. Quando Tiago mandou meu primeiro treino, estranhei, como aqueles treinos curtos e multiarticulares poderiam trazer o resultado que eu esperava? Fiz mil questionamentos pra ele como “não tem exercício específico pra glúteo?”, e ele, com toda calma e boa vontade do mundo, tirava todas as minhas dúvidas, e eu confiei. No fim do primeiro mês da consultoria, mandei as fotos e quando ele me mostrou o comparativo tomei um susto, consegui ter uma evolução absurda num período de 30 dias, o que pra mim não parecia ser possível, e a partir daí passei a entender tudo o que ele já havia me explicado sobre treinos curtos, mas muito intensos, e desde então, além da constante evolução no meu corpo, tenho aprendido a importância da intensidade dos treinos, do tempo de descanso e da constância para alcançar os resultados. Só tenho a agradecer a esse profissional incrível por tanta dedicação, atenção e responsabilidade. Morro de orgulho de fazer parte do Time TC!
                                </p>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                <div className="container">
                    <Paper elevation={3} className={classes.paper}>
                        <Grid container className="mt-2 mb-2 justify-content-center">
                            <Grid item md={4}>
                                <div className="row justify-content-center">
                                    <div className="justify-content-center">
                                        <img
                                            src={require('assets/img/testimonials/Juliana.jpeg')}
                                            className='rounded-circle text-center'
                                            alt=''
                                            width='100%'
                                        />
                                    </div>
                                </div>
                                <h4 className='font-weight-bold'>Juliana Brito</h4>
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                                <MDBIcon icon='star' className='blue-text' />
                            </Grid>
                            <Grid item md={8}>
                                <p className="container grey-text">
                                    <MDBIcon icon='quote-left' /> Conheci Tiago em 2018 numa época que eu estava buscando melhorar minha qualidade de vida e forma física. Começamos a nossa batalha em 01/05/2018 (sim, no dia do trabalho até porque dou trabalho até hoje kkkk) e desde então nunca mais larguei dele. Ele é um profissional super dedicado, atencioso e comprometido com o que faz. Busca sempre se aprimorar para os alunos terem o melhor resultado. Fora isso ele é uma pessoa muito alto astral, de bem com a vida, positiva e consegue extrair um sorriso e motivação mesmo quando não estamos tão dispostos assim. O período da quarentena me surpreendeu, mais uma vez, quando ele tomou a iniciativa, logo no início, de fazer as lives. Eu já estava me desmotivando, com medo de perder os 2 anos de muito esforço... Mas, mais uma vez, ele mostrou o tanto de conhecimento, foco e disposição que possui! Cada aula ele nos supera e mostra o quão bom é no que faz. Gostaria de agradecer pelos 2 anos de parceria e dedicação comigo, sou eternamente grata e tenho o maior ORGULHO de fazer parte do seu time!
                                </p>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Slider>
        </section >
    );
}

export default Testimonials;