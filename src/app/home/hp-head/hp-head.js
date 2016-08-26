import React, {Component} from 'react';

const styles = {
  img: {
      zIndex: -10
  },
  mask: {
      minHeight: '100%',
      minWidth: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(27, 38, 60, 0.85)',
      zIndex: -9
  }
};

export class HpHead extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fullscreen">
        <div>
            <img style={styles.img} className="img-fullscreen" src="./assets/homepage/hp-head.jpg" />
            <div style={styles.mask} ></div>
        </div>

        <div className="svg-centered">
            <svg>
                <symbol id="text-copy">
                    <text textAnchor="middle" x="50%" y="50%" className="text--line">
                        {this.props.hpTitle}
                    </text>
                </symbol>
                <g className='g-ants'>
                    <use xlinkHref='#text-copy' className='text-copy' id='outline'></use>
                    <use xlinkHref='#text-copy' className='text-copy' id='fill'></use>
                </g>                    
            </svg>     
        </div>
      </div>
    );
  }
}
