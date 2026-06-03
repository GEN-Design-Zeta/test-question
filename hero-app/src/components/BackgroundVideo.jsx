import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const SRC =
  'https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8'

/**
 * Full-bleed background video for the hero.
 * Plays the Mux HLS stream natively where supported (Safari/iOS),
 * otherwise attaches hls.js. Muted, looping, autoplaying, inline.
 */
export default function BackgroundVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS (Safari, iOS)
      video.src = SRC
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: false })
      hls.loadSource(SRC)
      hls.attachMedia(video)
    } else {
      // Last-resort: let the browser try directly
      video.src = SRC
    }

    const tryPlay = () => {
      const p = video.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
    video.addEventListener('canplay', tryPlay, { once: true })
    tryPlay()

    return () => {
      video.removeEventListener('canplay', tryPlay)
      if (hls) hls.destroy()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full scale-[1.15] object-cover object-center"
    />
  )
}
