import React, { useEffect } from 'react'
import './styles.css'

export default function Comment() {
  useEffect(() => {
    const scriptTag = document.createElement('script')
    const comments = document.getElementById('comment')
    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'dongmikim/dongmi-blog',
      'issue-term': 'pathname',
      label: 'comment',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      scriptTag.setAttribute(key, value)
    })

    if (comments) {
      comments.appendChild(scriptTag)
    }
  }, [])

  return <div id="comment" />
}
