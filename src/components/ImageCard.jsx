import React from 'react'
import unslpash from '../api/unslpash';
import DownloadBtn from './DownloadBtn';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {spans: 0}
  }

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;
    const spans   = Math.ceil(height/10);
    this.setState({spans})
  }

  render() {
    const {description, urls, links} = this.props.image;
    return (
      <div 
        style={{gridRowEnd: `span ${this.state.spans}`}}
        className='rounded-md overflow-clip relative img after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:top-0 after:bg-black/50 after:z-50 after:opacity-0 after:transition-all' >
        <img 
          ref={this.imgRef}
          alt={description}
          src={urls.regular}
        />
        <DownloadBtn href={links.download} />
      </div>
    );
  }
}

export default ImageCard;
