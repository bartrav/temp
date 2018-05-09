import React from 'react';

export default class Footer extends React.Component {
    render() {
      let footerStyle = {
        backgroundColor: '#222',
        width: '100%',
        height: '200px',
        bottom: '0',
        fontFamily: 'monospace',
        boxShadow: '0px 0px 10px 3px #888'
      }
      return (
        <footer className="App-footer" style={footerStyle}>
        </footer>
      );
    }
  }

  /* class Map extends React.Component {
  render () {
    let mapStyle = {
      height: '300px',

    }
    return (
      <div style={mapStyle}></div>
      function initMap() {
        var map = new SVGFEMorphologyElement.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150644},
        zoom: 8
        });
      }
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCU6rpS75WdKNWUzpsyka7vbkS6ITv1WF4&callback=initMap"></script>
    );
  }
}

class Card extends Component {
  render() {
    let cardStyle = {
      'background-color': 'white',
      'box-shadow': '5px 5px 20px 5px black',
      margin: 'auto',
      width: '80%',
      height: '300px'
    }
    return (
      <div className="App-card" style={cardStyle}>
      </div>
    );
  }
} */