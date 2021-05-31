import React from 'react'
import CountCard from '../card/count_card';

const CountSection = (props) => {
    const { counts, loading } = props;
    const cards = [
        {
            title: "Propostas Hoje",
            icon: 'paper-diploma',
            count: counts.proposals_today,
            sufix: '',
            showSufix: false
        },
        {
            title: "Propostas",
            icon: 'money-coins',
            count: counts.proposals,
            sufix: '',
            showSufix: false
        },
        {
            title: "Clientes",
            icon: 'single-02',
            count: counts.clients,
            sufix: '',
            showSufix: false
        },
    ]

    return (
        <div className="row">
            {
                cards.map((card, index) => {

                    return (
                        <div key={`count_card_${index}`} className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                            <CountCard card={card} loading={loading} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CountSection