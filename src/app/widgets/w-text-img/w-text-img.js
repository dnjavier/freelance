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
      <div className="container fullscreen vcenter">
        <div className="w-light container">
          <div className="row vcenter">
            <div className="col-md-6">
              <h2>Titulo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam magni, eos veritatis veniam! Provident voluptatem a, explicabo temporibus quibusdam omnis facere nisi aliquam inventore voluptate voluptas, dolorum libero hic aspernatur!</p>
              <Link to="/work" className="btn btn-main">See work</Link>
            </div>
            <div className="col-md-6">
              <img className="wow slideInLeft img-responsive center-block" src="./assets/iphone.png" />
            </div> 
          </div>
        </div>              
      </div>
    );
  }
}