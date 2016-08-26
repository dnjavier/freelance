import React, {Component} from 'react';
import axios from 'axios';

import {Service} from './service';

const styles = {
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Services extends Component {
  constructor() {
    super();
    this.state = {services: []};
  }

  componentDidMount() {
    axios
      .get('app/home/services/services.json')
      .then(response => {
        this.setState({services: response.data});
      });
  }

  render() {
    return (
      <div className="container fullscreen">
        <h2 style={styles.h2}>
          Services:
        </h2>
        <div style={styles.techs}>
          {this.state.services.map((service, i) => (
            <Service key={i} service={service}/>
          ))}
        </div>
      </div>
    );
  }
}
