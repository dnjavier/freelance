import React, {Component} from 'react';
import {Link} from 'react-router';

const styles = {

};

export class WTextImg extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fullscreen aligner">
        <div className="w-light">
          <h2>
              Work
          </h2>
          <div className="aligner">
            <div className="col-sm-6 aligner-item">
              <h2>Titulo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam magni, eos veritatis veniam! Provident voluptatem a, explicabo temporibus quibusdam omnis facere nisi aliquam inventore voluptate voluptas, dolorum libero hic aspernatur!</p>
              <Link to="/work" className="btn btn-main">see work</Link>
            </div>
            <div className="col-sm-6">
              <img className="wow slideInLeft img-responsive center-block" src="./assets/iphone.png" />
            </div> 
          </div>
        </div>              
      </div>
    );
  }
}