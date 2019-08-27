import React from 'react';
import _chunk from 'lodash/chunk';
import _sum from 'lodash/sum';
import _isEmpty from 'lodash/isEmpty';

class Display extends React.Component {
  render() {
    if (_isEmpty(this.props.decoded)) {
      return <div />;
    }

    const chunked = _chunk(this.props.decoded.data, 4);
    const result = chunked.map(e => _sum(e) === 0 ? 0 : 1);
    const binaryRegex = new RegExp(`.{${this.props.decoded.width}}`, 'g');
    console.log(this.props.decoded.width, binaryRegex);
    const decodedData = result.join('').replace(binaryRegex, (match) => {return `${match}\n`;});

    const byteData = _chunk(result, 8);

    console.log(byteData);

    const hexData = byteData.map(byte => parseInt(byte.join(''), 2)).map(e => e.toString(16).padStart(2, '0'));

    const hexRegex = new RegExp(`.{${this.props.decoded.width / 4}}`, 'g');
    const hexString = hexData.join('').replace(hexRegex, (match) => `${match}\n`);

    return (
      <div>
        <pre style={{'font-size': '6px'}}>{decodedData}</pre>
        <pre>{hexString}</pre>
      </div>
    );
  }
}

export default Display;
