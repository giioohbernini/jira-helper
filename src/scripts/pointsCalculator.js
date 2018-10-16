const singleCalculator = (color) => {
  const tasksContainer = document.querySelector('.ghx-issues.js-issue-list.ghx-has-issues')

  const taskList = [...tasksContainer.children].filter(item => item.querySelector(`[style="background-color:#${color};"]`))

  const taskValue = [...taskList].reduce((acc, item) => {
    const value = item.querySelector('[title="Story Points"]').innerHTML
    return acc + ~~value
  }, 0)

  return taskValue
}

export const pointsCalculator = (colorArray) => {
  const toColorsObject = (acc, { type, color }) => {
    const points = singleCalculator(color)

    return {
      ...acc,
      [type]: points
    }
  }

  const colorsObject = colorArray.reduce(toColorsObject, {})

  return colorsObject
}
