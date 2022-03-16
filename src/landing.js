import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {

    render() {
        return (
            // <div style={{width: '100%',  justifyContent:'center', alignItems:'center', display: 'flex', flexWrap: 'wrap'}}>
            //     Welcome to RepoRadar, to begin viewing vehicles: click Search.
            // </div>
            <div>
                <div className="banner">
                </div>
                <div className="header">
                    <h1 id='title'>Repo Radar</h1>
                    <nav className="tabs">
                        <div className="selector"></div>
                        < a href="search" >Begin your shopping.</ a>

                    </nav>
                </div>
            </div>
        );


    }
}

export default LandingPage;