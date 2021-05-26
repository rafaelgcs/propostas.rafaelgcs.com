import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from '@material-ui/lab';
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg.jpg";
import { useHistory } from "react-router";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ViewProposal(props) {
    const history = useHistory();
    const [code, setCode] = useState()
    const [showAlert, setShowAlert] = useState(false)
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();

    const onChangeInputCode = (ev) => {
        let text = ev.target.value;
        setCode(text);
    }

    const onSubmitViewProposal = (ev) => {
        ev.preventDefault();
        if (code === "beCourse_2021_proposal") {
            setShowAlert(false)
            history.push('/beCourse_2021_proposal')
        } else {
            setShowAlert(true)
        }
    }
    return (
        <div>
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form onSubmit={onSubmitViewProposal} className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>Encontre sua proposta!</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <Collapse in={showAlert}>
                                            <Alert onClose={() => setShowAlert(false)} severity="warning">
                                                <AlertTitle>Ops!</AlertTitle>
                                            O código inserido não foi encontrado — <strong>Verifique se digitou corretamente e tente novamente!</strong>
                                            </Alert>
                                        </Collapse>
                                        <CustomInput
                                            labelText="Seu e-mail?"
                                            id="e-mail"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                required: true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Código da Proposta"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true,
                                                required: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                onChange: onChangeInputCode,
                                                required: true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon className={classes.inputIconsColor}>
                                                            lock_outline
                                                        </Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off"
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button type="submit" simple color="primary" size="lg">
                                            Encontrar
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
