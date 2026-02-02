import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay muted loop src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1770020823~exp=1770024423~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=d76fe8b9838ad47894d94a82291840d6353ffe7cbaa10ddb9205a52b578730cb&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video
