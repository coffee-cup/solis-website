import React, { Component } from 'react';
import $ from 'zeptojs';

let didYou = 'Did you know...';

function requestFakt(callback) {
    const href = window.location.href.split(':');
    let url = href[0] + ':' + href[1];
    let localhost = false;
    if (url.indexOf('localhost') !== -1) {
        url += ':9090/';
        localhost = true;
    }
    url += 'fakt';
    $.ajax({
        url,
        type: 'GET',
        crossDomain: localhost,
        success(json) {
            if (json.status === 'success') {
                callback(json.fact);
            } else {
                callback('Error ☹️');
            }
        },
        error(xhr, status) {
            console.log('error fetching fact: ' + status);
        },
    });
}

class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        );
    }
}

class Fakts extends Component {
    constructor() {
        super();
        this.state = {
            fact: '',
            loading: true,
        };
    }

    componentDidMount() {
        this.newFact();
    }

    newFact() {
        this.setState({
            loading: true,
        });
        requestFakt((fact) => {
            this.setState({
                fact,
                loading: false,
            });
        });
    }

    render() {
        return (
        <div className="fakts grid">
            <div className="col-12">
                <div className="grid-centered">
                    <h2 ref="didYou" className="did-you-know col-6_sm-8_xs-10">
                    {didYou}
                    </h2>
                </div>
            </div>
            <div className="col-12">
                <div className="grid-centered">
                    {(this.state.loading
                        ? <Spinner />
                        : <p className="fact pt0 mt0 pb0 mb0 animated fadeIn col-6_sm-8_xs-10">{this.state.fact}</p>
                    )}
                </div>
            </div>
            <div className="col-12">
                <div className="grid-centered">
                    <div className="col-4_xs-8">
                        <a onClick={this.newFact.bind(this)} className="new-fact button none">New Fact!</a>
                    </div>
                </div>
            </div>
        </div>
            );
    }
}

export default Fakts;
