import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay muted loop src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1778083781~exp=1778087381~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=c34a49d497b643d93cd90938c7d700803d287e93205b9cd8884358f6d1b55605&r=dXMtZWFzdDE%3D"></video> 
    </div>
  )
}

export default Video
