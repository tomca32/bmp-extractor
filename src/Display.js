import React from 'react';
import _chunk from 'lodash/chunk';
import _sum from 'lodash/sum';
import _isEmpty from 'lodash/isEmpty';
import _flatten from 'lodash/flatten';

function flipVertical(data, width) {
  let chunked = _chunk(data, width * 4);
  return _flatten([...chunked].reverse());
}

class Display extends React.Component {
  render() {
    if (_isEmpty(this.props.decoded)) {
      return <div />;
    }


    let data = this.props.decoded.data.slice();
    if (this.props.reverse) {
      data = [...data].reverse();
    }

    if (this.props.flipVertical) {
      data = flipVertical(data, this.props.decoded.width);
    }

    const chunked = _chunk(data, 4);
    const result = chunked.map(e => {
      let bit = _sum(e) === 0 ? 0 : 1;
      if (this.props.flipBits) {
        bit = bit === 0 ? 1 : 0;
      }
      return bit;
    });
    const binaryRegex = new RegExp(`.{${this.props.decoded.width}}`, 'g');
    console.log(this.props.decoded.width, binaryRegex);
    const decodedData = result.join('').replace(binaryRegex, (match) => {return `${match}\n`;});

    const byteData = _chunk(result, 8);

    console.log(byteData);

    const hexData = byteData.map(byte => parseInt(byte.join(''), 2)).map(e => e.toString(16).toUpperCase().padStart(2, '0'));

    const hexRegex = new RegExp(`.{${this.props.decoded.width / 4}}`, 'g');
    const hexString = hexData.join('').replace(hexRegex, (match) => `${match}\n`);

    return (
      <div>
        <pre style={{'fontSize': '6px'}}>{decodedData}</pre>
        <pre>{hexString}</pre>
        <ul>
          <li>Width: {this.props.decoded.width}</li>
          <li>Height: {this.props.decoded.height}</li>
        </ul>
      </div>
    );
  }
}

export default Display;
