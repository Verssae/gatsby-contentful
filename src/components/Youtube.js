import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Youtube = ({ url, ...props }) => {
  const source =
    'https://www.youtube.com/embed/' +
    url.substring(url.indexOf('watch?v=') + 8)
  return <YoutubeFrame class="youtube" src={source} />
}

const YoutubeFrame = styled.iframe`
  display: table;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin: 0 auto;
  frameborder: 0;
  weight: 600;
  height: 300;
  marginwidth: 0;
  marginheight: 0;
  allowfullscreen: allowfullscreen;
`
export default Youtube
