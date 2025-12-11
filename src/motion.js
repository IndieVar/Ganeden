const animationLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: custom => (
    {
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2 }
    }
  ),
}

const animationRight = {
  hidden: { opacity: 0, x: 100 },
  visible: custom => (
    {
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2 }
    }
  ),
}

const animationUp = {
  hidden: { opacity: 0, y: -100 },
  visible: custom => (
    {
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2 }
    }
  ),
}

const animationDown = {
  hidden: { opacity: 0, y: 100 },
  visible: custom => (
    {
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2 }
    }
  ),
}

export { animationLeft, animationRight, animationUp, animationDown };