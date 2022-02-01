import { reactive } from 'vue'

const state = reactive({ isResponsive: false })

function handleResize () {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth
  if (viewportWidth < 744) { state.isResponsive = true } else { state.isResponsive = false }
}

window.addEventListener('resize', handleResize)
// run it once to detect initial size:
handleResize()
