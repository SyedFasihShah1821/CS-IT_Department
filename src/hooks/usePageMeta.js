import { useEffect } from 'react'

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — CS & IT Event Management Society` : 'CS & IT Event Management Society | Department of Computer Science & Information Technology'
    document.title = fullTitle

    // description
    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
      let ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', description)
      let twDesc = document.querySelector('meta[name="twitter:description"]')
      if (twDesc) twDesc.setAttribute('content', description)
    }
    // og:title / twitter:title
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', title)
      let twTitle = document.querySelector('meta[name="twitter:title"]')
      if (twTitle) twTitle.setAttribute('content', title)
    }
  }, [title, description])
}
