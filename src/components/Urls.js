import React, { Component, PropTypes } from 'react'

class Urls extends Component {
  render() {
    const { urls, addUrl } = this.props
    const urlsNode = urls.map(url => {
    	return <p key={url.uri} >{url.uri}</p>
    })
    return (
      <div>
        {urlsNode}

        <div>
          
          <button onClick={() => addUrl('lala')}>Add URL</button>
        </div>
      </div>
    )
  }
}

export default Urls
