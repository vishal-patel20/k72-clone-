import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay muted loop src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1770106674~exp=1770110274~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=aff110e5d37998e2a991ff6409c85c7fc523c4c53d5966ac62040ae9dda4dda9&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video
