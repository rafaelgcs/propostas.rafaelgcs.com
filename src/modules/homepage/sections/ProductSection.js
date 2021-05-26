import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FaceIcon from '@material-ui/icons/Face';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import StarsIcon from '@material-ui/icons/Stars';
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{textTransform: 'uppercase'}}>Consultoria Fitness</h2>
          <p>
            <h4 className={classes.description}>
              Antes de você escolher um dos planos de treino eu preciso te explicar algumas coisas.
            </h4>
          </p>
          <p>
            <h5 className={classes.description} style={{ textJustify: 'inherit' }}>
              Primeiramente, quero te dar parabéns por ter chegado até aqui, isso mostra que você está a fim de melhorar a sua saúde e eu, na qualidade de profissional de Educação Física, fico feliz em saber que você acredita que eu possa te ajudar nessa jornada. Quando você se afilia ao meu treino, você não está adquirindo uma consultoria, você investe em <strong>ECONOMIA DE TEMPO</strong>!
            </h5>
          </p>
          <p>
            <h5 className={classes.description}>
              <strong>
                MAS VOCÊ JÁ SABE COMO SERÁ ESTA CONSULTORIA? SE AINDA NÃO SABE...
              </strong>
            </h5>
          </p>
          <p>
            <h5 className={classes.description}>
              Com meu trabalho você não vai encontrar um "personal online". O que eu ofereço é um planejamento de treinamento baseado na ciência, com o intuito de te manter saudável, com um corpo bacana e com um programa eficaz, capaz de você economizar o seu tempo, coisa que poucos tem sobrando.
            </h5>
          </p>
          <p>
            <h5 className={classes.description} style={{ marginBottom: 10 }}>
              Então, baseado em um questionário que você deverá preencher no momento da compra do plano, informando dados corporais, disponibilidade, rotina, dieta e limitações, eu vou montar o melhor planejamento de treinamento possível para que você possa alcançar o seu objetivo. Isso significa que eu possa sugerir mudanças na sua rotina para poder maximizar o seu resultado.
            </h5>
          </p>
          <p className={classes.description} style={{ textAlign: 'left' }}>
            * Não está incluso plano de alimentação nos pacotes. Para isso você deve procurar um nutricionista da sua confiança.
          </p>
          <p className={classes.description} style={{ textAlign: 'left' }}>
            * Você pode escolher se deseja um treino para fazer na <strong>ACADEMIA OU EM CASA</strong>.
          </p>
          <p className={classes.description} style={{ textAlign: 'left' }}>
            * Lembrando que, em uma academia, as condições e equipamentos para treinar são melhores. Mas se não gosta do ambiente, se você não tem mais saco de sair de casa para treinar, quem sabe os exercícios em casa sejam o que faltava!
          </p>
          <p className={classes.description} style={{ textAlign: 'left', marginBottom: 10 }}>
            * O planejamento dos treinamentos tem validade de 30 dias.
          </p>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer className="mb-4">
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Treino Inteligente"
              description="Cada parte do seu treino é resultado de rigorosos estudos científicos. É assim que você garante a certeza de fazer o melhor treino possível no conforto de sua casa ou em uma academia."
              icon={FaceIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Suporte Exclusivo"
              description="Estarei lado a lado contigo durante todo processo. Você terá acesso direto ao meu Whatsapp pessoal para resolver qualquer dificuldade."
              icon={HeadsetMicIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Conteúdo Prêmio"
              description="E mais, você receberá materiais exclusivos que vão te levar aos resultados que você deseja muito mais rápido. Tudo isso dentro do nosso portal premium."
              icon={StarsIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <p className={classes.description} style={{ textAlign: 'left' }}>
              * Todo o processo de compra, preenchimento do questionário e recebimento do planejamento é feito pelo aplicativo.
            </p>
            <p className={classes.description} style={{ textAlign: 'left' }}>
              * As formas de pagamento são clicando no plano desejado.
            </p>
            <p className={classes.description} style={{ textAlign: 'left' }}>
              * Após a sua compra, toda a nossa comunicação se dará por meio da sua área de usuário; onde fico 100% disponível para ajudar nas dúvidas, questionamentos, entre outras situações.
            </p>
            <p>
              <h5 className={classes.description} style={{ marginBottom: 10 }}>
                Pra finalizar, te digo sem nenhum receio... se você fizer como combinado, permitindo que a ciência supere o senso comum, eu garanto os nossos resultados!
              </h5>
            </p>
            <p>
              <h4 className={classes.description} style={{ marginBottom: 10 }}>
                Vamos nessa?
              </h4>
            </p>
            <Button
              color="info"
              size="lg"
              href="#plans"
              rel="noopener noreferrer"
            >
              <span style={{ marginRight: 30 }}>Quero fazer parte</span>
              <i className="fas fa-play ml-2" />
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
