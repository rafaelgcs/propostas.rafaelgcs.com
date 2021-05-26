
import React from 'react';
import ButtonMKR from "components/CustomButtons/Button.js";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { tiers } from '../constants/constants';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

export default function Plans() {
    const classes = useStyles();

    return (
        <div style={{ backgroundColor: '#fff' }} id="plans">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#0d0e14" fill-opacity="1" d="M0,160L1440,32L1440,0L0,0Z"></path></svg>

            <div className="text-center">
                <h2 style={{ textTransform: 'uppercase' }} className="mb-4 font-weight-bold">Planos</h2>
                <h4>
                </h4>
            </div>
            <Container maxWidth="md" component="main">
                <Grid container spacing={0} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card style={{ borderRadius: 20 }}>
                                <CardHeader
                                    style={{backgroundColor: tier.popular ? "#0d0e14" : "#fff", color: !tier.popular ? "#0d0e14" : "#fff",}}
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center', color: !tier.popular ? "#0d0e14" : "#fff", }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent style={{backgroundColor: tier.popular ? "#0d0e14" : "#fff", color: !tier.popular ? "#0d0e14" : "#fff",}}>
                                    <div className={classes.cardPricing} style={{ color: !tier.popular ? "#0d0e14" : "#fff",}}>
                                        <Typography component="h2" variant="h3">
                                            R${tier.price}
                                        </Typography>
                                        {/* <Typography variant="h6" color="textSecondary">
                                            /mo
                                        </Typography> */}
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions style={{backgroundColor: tier.popular ? "#0d0e14" : "#fff", color: !tier.popular ? "#0d0e14" : "#fff",}}>
                                    <ButtonMKR
                                        style={{width: '100%', borderRadius: 30}}
                                        color={tier.popular ? 'info' : 'default'}
                                        size="lg"
                                        href={tier.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Quero esse plano</span>
                                    </ButtonMKR>
                                    {/* <Button fullWidth variant={tier.buttonVariant} color="primary">
                                        {tier.buttonText}
                                    </Button> */}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#0d0e14" fill-opacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
        </div>
    );
}