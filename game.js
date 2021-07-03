const textElement = document.getElementById('text')
const optionsButtonElement = document.getElementById('option-buttons')

let state = {}

const startGame = () => {
  state = {}
  showTextNode(1)
}

const showTextNode = (textNodeIndex) => {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text


}

const selectOption = (option) => {

}

const textNodes = [
  {
    id: 1,
    text: 'You wake up cold and alone surrounded by massive trees. As your eyes adjust to the darkness you see a flask of black powder near you. What do you do?',
    options: [
      {
        text: 'take the powder',
        setState: { powder: true },
        nextText: 2
      },
      {
        text: 'leave the powder'
      }
    ]
  },
  {
    id: 2
  }
]
startGame()