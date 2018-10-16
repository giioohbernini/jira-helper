import { showPoints, createComponents } from './components'
import { pointsCalculator } from './pointsCalculator'

const colors = [
  {
    type: 'back',
    color: 'cc0000'
  },
  {
    type: 'front',
    color: 'ff9933'
  }
]

console.log('-------------------------IHIB')

const handleLoad = () => {
  console.log('-------------------------IHIA')
  const queryString = window.location.search
  const isPlanningView = queryString.includes('view=planning')

  if (isPlanningView) {
    console.log('-------------------------IHI')
    const handleClick = () => {
      const obj = pointsCalculator(colors)
      showPoints(obj)
    }

    createComponents(handleClick)
  }
}

const docLoaded = setInterval(() => {
  console.log("-----------ihi", document.readyState)
  if(document.readyState !== "complete") return;
  clearInterval(docLoaded);
  handleLoad()
}, 30);
