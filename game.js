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
  while (optionsButtonElement.firstChild) {
    optionsButtonElement.removeChild(optionsButtonElement.firstChild)
  }

  textNode.options.map(option => {
    console.log(option)
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionsButtonElement.appendChild(button)
    }
  })


}

const showOption = (option) => {
  return option.requiredState == null || option.requiredState(state)
}

const selectOption = (option) => {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
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
        text: 'leave the powder',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'As you are walking through the forest you come across a merchant.  ',
    options: [
      {
        text: 'trade the power for a bow',
        requiredState: (currentState) => currentState.powder,
        setState: { powder: false, bow: true },
        nextText: 3
      },
      {
        text: 'trade the power for a dagger',
        requiredState: (currentState) => currentState.powder,
        setState: { powder: false, dagger: true },
        nextText: 3
      },
      {
        text: 'ignore the merchant',
        requiredState: (currentState) => currentState.powder,
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous castle. ',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4
      },
      {
        text: 'Find a room to sleep in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and you are killed by a Oger in your sleep. ',
    options: [
      {
        text: 'Explore the Restart',
        nextText: -1
      },

    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your bow',
        requiredState: (currentState) => currentState.bow,
        nextText: 9
      },
      {
        text: 'Hide behind your dagger',
        requiredState: (currentState) => currentState.dagger,
        nextText: 10
      },
      {
        text: 'Throw the black powder at it',
        requiredState: (currentState) => currentState.powder,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a bow',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you attacked him with your dagger and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your black powder at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]
startGame()