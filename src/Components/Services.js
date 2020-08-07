import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import './Services.css'

class Services extends React.Component {
    constructor() {
        super();
        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    title: "free cocktails",
                    info: "lorem erfae aerf sfdaa asfdasdf asdfasdf sgwe rtwc asdwe hnurvaxaein"
                },
                {
                    icon: <FaHiking />,
                    title: "endless hiking",
                    info: "lorem erfae aerf sfdaa asfdasdf asdfasdf sgwe rtwc asdwe hnurvaxaein"
                },
                {
                    icon: <FaShuttleVan />,
                    title: "free shuttle",
                    info: "lorem erfae aerf sfdaa asfdasdf asdfasdf sgwe rtwc asdwe hnurvaxaein"
                },
                {
                    icon: <FaBeer />,
                    title: "strongest beers",
                    info: "lorem erfae aerf sfdaa asfdasdf asdfasdf sgwe rtwc asdwe hnurvaxaein"
                }
            ]
        }
    }

    render() {
        return (
            <section className="t">
                <Title title="service" />
                <div className="services-center">
                    {this.state.services.map((item, indx) => {
                        return (
                            <article key={indx} className="service">
                                <span className="a">{item.icon}</span>
                                <h6 className="b">{item.title}</h6>
                                <p className="c">{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Services;