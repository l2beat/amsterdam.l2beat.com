export function initTracks() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>('[data-track-start]')
  )

  const TEN_MINUTES = 10 * 60 * 1000
  const veryStart = new Date(sections[0]?.dataset.trackStart ?? '').getTime()
  const keyboardMode = false
  let offset = 0

  if (keyboardMode) {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft') {
        offset -= 5 * 60 * 1000
      }
      if (e.code === 'ArrowRight') {
        offset += 5 * 60 * 1000
      }
    })
  }

  updateLive()
  setInterval(updateLive, 100)

  function updateLive() {
    const now = keyboardMode ? veryStart + offset : Date.now()

    let visibleSection: HTMLElement | undefined
    let isLive = false
    for (const section of sections) {
      section.classList.add('hidden')
      const start = new Date(section.dataset.trackStart ?? '').getTime()
      const end = new Date(section.dataset.trackEnd ?? '').getTime()
      const isVisible = now >= start - TEN_MINUTES && now < end - TEN_MINUTES
      if (isVisible) {
        visibleSection = section
        isLive = now >= start && now < end
      }
    }
    if (!visibleSection) {
      visibleSection = sections[0]
    }
    if (!visibleSection) {
      return
    }

    visibleSection.classList.remove('hidden')
    const liveBadge = visibleSection.querySelector('[data-track-live]')
    const startingBadge = visibleSection.querySelector('[data-track-starting]')
    liveBadge?.classList.toggle('hidden', !isLive)
    startingBadge?.classList.toggle('hidden', isLive)
  }
}
