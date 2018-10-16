export const createComponents = (handleClick) => {
  const issueCount = document.querySelector('.ghx-issue-count')

  let calcBtn = document.createElement("button")
  calcBtn.classList = "aui-button aui-button-primary"
  calcBtn.textContent = "Calcular pontos"
  calcBtn.style.marginLeft = "10px"
  calcBtn.addEventListener('click', () => {
    handleClick()
  })

  issueCount && issueCount.appendChild(calcBtn)
}

export const showPoints = (points) => {
  const issueCount = document.querySelector('.ghx-issue-count')

  const hasFrontPoints = document.querySelector('#jira-helper__front')
  const hasBackPoints = document.querySelector('#jira-helper__back')

  hasFrontPoints && issueCount.removeChild(hasFrontPoints)
  hasBackPoints && issueCount.removeChild(hasBackPoints)

  let frontPoints = document.createElement("span")
  let backPoints = document.createElement("span")

  frontPoints.classList = "aui-badge ghx-statistic-badge"
  frontPoints.id = "jira-helper__front"
  frontPoints.style.marginLeft = "10px"
  backPoints.classList = "aui-badge ghx-statistic-badge"
  backPoints.id = "jira-helper__back"
  backPoints.style.marginLeft = "10px"

  frontPoints.textContent = `Front: ${points.front}`
  backPoints.textContent = `Back: ${points.back}`

  issueCount && issueCount.appendChild(frontPoints)
  issueCount && issueCount.appendChild(backPoints)
}
