let { cards } = require('../assets/cards.json');
//let prompt = require('prompt-sync')();
const { returnScenario } = require('./scenarioLoader');

let cardsCopy = cards;
// for (let i of cards) {
//   let type = '';
//   switch (i.type) {
//     case '1':
//       type = 'Heart';
//       break;
//     case '2':
//       type = 'Spade';
//       break;
//     case '3':
//       type = 'Club';
//       break;
//     case '4':
//       type = 'Diamond';
//       break;
//   }
//   // console.log(`${type} : ${i.cardValue}`);
// }
let gameWonFlag = false;
let gameStates = {
  name: 'gamestates',
  stack: [],
};

let stack_1 = {
  name: 'stack_1',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let stack_2 = {
  name: 'stack_2',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let stack_3 = {
  name: 'stack_3',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let stack_4 = {
  name: 'stack_4',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let stack_5 = {
  name: 'stack_5',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let stack_6 = {
  name: 'stack_6',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let stack_7 = {
  name: 'stack_7',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};

let endstack_1 = {
  name: 'endstack_1',
  type: '1',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let endstack_2 = {
  name: 'endstack_2',
  type: '2',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let endstack_3 = {
  name: 'endstack_3',
  type: '3',

  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let endstack_4 = {
  name: 'endstack_4',
  type: '4',

  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};

let deck = {
  name: 'deck',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};
let deckOpen = {
  name: 'deckOpen',
  stack: [],
  toString: function() {
    return this.stack
      .filter((el) => el.visible == true)
      .map((el) => ({ cardValue: el.cardValue, type: el.type }));
  },
};

const stack_List = [
  stack_1,
  stack_2,
  stack_3,
  stack_4,
  stack_5,
  stack_6,
  stack_7,
  deck,
  deckOpen,
  endstack_1,
  endstack_2,
  endstack_3,
  endstack_4,
];

function moveCard(oldStackName, index, newStackName) {
  // console.log('IN MOVE FUNC');
  // console.log(oldStack.name);
  // console.log(newStack.name);
  let oldStack = stack_List.find((el) => el.name == oldStackName);
  let newStack = stack_List.find((el) => el.name == newStackName);

  if (gameWonFlag) return;
  // if (newStack.name == deck.name || newStack.name == deckOpen.name) {
  //   throw 'Oldstack => Deck || DeckOpen';
  // }
  console.log(oldStack.name == deckOpen.name && Number(index) != 0);
  console.log(Number(index));
  console.log(deckOpen.stack.length);

  if (oldStack.name == deck.name || (oldStack.name == deckOpen.name && Number(index) != 0)) {
    throw 'Oldstack => Deck || DeckOpen AND INDEX';
  }

  if (
    oldStack.name == endstack_1.name &&
    oldStack.name == endstack_2.name &&
    oldStack.name == endstack_3.name &&
    oldStack.name == endstack_4.name
  ) {
    // console.log('INSIDE OLDSTACK-ENDSTACK-IF');
    if (index != 0) {
      throw 'oldstack == Endstack_X && Index != 0';
    }
  }
  if (
    newStack.name != endstack_1.name &&
    newStack.name != endstack_2.name &&
    newStack.name != endstack_3.name &&
    newStack.name != endstack_4.name
  ) {
    // console.log('INSIDE NEWSTACK-ENDSTACK-IF');
    if (oldStack.stack[Number(index)].visible == false) {
      throw 'newstack !=> Endstack_X && Visible == false';
    }
    // console.log('Flag 1');

    // console.log('IF 1: ', oldStack.stack[index].cardValue == 13 && newStack.stack.length != 0);
    // console.log('IF 2: ', Number(oldStack.stack[index].cardValue) + 1 != newStack.stack[0].cardValue);
    console.log('MAIN GAME: ', oldStack.stack[Number(index)].cardValue == 13 && newStack.stack.length != 0);

    if (oldStack.stack[Number(index)].cardValue == 13 && newStack.stack.length != 0) {
      throw 'newstack !=> Endstack_X && oS.cardvalue == 13 && nS.length != 0';
    }
    if (newStack.stack.length != 0 && oldStack.stack[Number(index)].cardValue != 13) {
      if (Number(oldStack.stack[Number(index)].cardValue) + 1 != newStack.stack[0].cardValue) {
        throw `newstack !=> Endstack_X && oS.cardvalue+1 != nS.cardValue::::: Card Old: ${
          oldStack.stack[Number(index)].cardValue
        } --- Card New: ${newStack.stack[0].cardValue}`;
      }
      let allowedColor = [1, 4];
      switch (Number(oldStack.stack[index].type)) {
        case 1:
          allowedColor = [2, 3];
          break;
        case 4:
          allowedColor = [2, 3];
          break;
        case 2:
          allowedColor = [1, 4];
          break;
        case 3:
          allowedColor = [1, 4];
          break;
      }
      // console.log('Flag 3');
      let newCard = Number(newStack.stack[0].type);
      //console.log('IF 3: ', !allowedColor.includes(Number(newCard)));

      if (!allowedColor.includes(newCard)) {
        throw `newstack !=> Endstack_X && allowedColor == false::::: Card Color: ${oldStack.stack[index].type}|| Allowed Color: ${allowedColor}|| NewStack Card Color: ${newStack.stack[0].type}`;
      }
    }
    // console.log('Flag 2');

    // console.log('ENDE VON NEWSTACK-IF');
  } else {
    // console.log('INSIDE LAST-BIG-ELSE');
    console.log('INSIDE NEWSTACK == ENDSTACK');
    console.log('##########');
    console.log(oldStack.stack[index]);
    let tempCard = oldStack.stack[index];
    console.log('##########');

    if (newStack.stack.length == 0 && tempCard.cardValue != 1) {
      throw 'newstack.length == 0 && oldstack.cardvalue != 1';
    } else if (
      newStack.stack.length != 0 &&
      oldStack.stack[index].cardValue - 1 != newStack.stack[index].cardValue &&
      oldStack.stack[index].cardValue > 1
    ) {
      throw 'oS.cardvalue-1 != nS.cardvalue';
    }
    let tempType = newStack.type;
    let notAllowedFlag = false;
    for (let i = index; i >= 0; i--) {
      if (oldStack.stack[i].type != tempType) notAllowedFlag = true;
    }
    if (notAllowedFlag) {
      throw 'notAllowedFlag == true';
    }
  }
  // console.log('NO EXECPTIONS');

  gameStates.stack.push(new GameState());
  // console.log(oldStack.stack[index + 1]);
  if (oldStack.stack.length - Number(index) > 1) oldStack.stack[index + 1].visible = true;

  for (let i = index; i >= 0; i--) {
    newStack.stack.unshift(oldStack.stack[i]);
  }
  for (let i = 0; i <= index; i++) {
    oldStack.stack.shift();
  }

  console.log('THIS IS GAME:');
  console.log(gameStates);
  //Nach jedem Card_Move wird gecheckt
  checkWin();
}
function drawNextCard() {
  if (gameWonFlag) return;
  gameStates.stack.push(new GameState());

  if (deck.stack.length != 0) {
    let temp = deck.stack[0];
    deck.stack.shift();
    temp.visible = true;
    deckOpen.stack.unshift(temp);

    if (deckOpen.stack.length > 1) deckOpen.stack[1].visible = false;
  } else {
    deckOpen.stack[0].visible = false;
    let temp = deckOpen.stack.reverse();
    deck.stack = temp;
    deckOpen.stack = [];
  }
}

function checkWin() {
  if (
    endstack_1.stack.length == 14 &&
    endstack_2.stack.length == 14 &&
    endstack_3.stack.length == 14 &&
    endstack_4.stack.length == 14
  ) {
    throw 'GAME END';
    // console.log('Game END: WON');
  }
}

function GameState() {
  this.stack_1 = stack_1;
  this.stack_2 = stack_2;
  this.stack_3 = stack_3;
  this.stack_4 = stack_4;
  this.stack_5 = stack_5;
  this.stack_6 = stack_6;
  this.stack_7 = stack_7;

  this.endstack_1 = endstack_1;
  this.endstack_2 = endstack_2;
  this.endstack_3 = endstack_3;
  this.endstack_4 = endstack_4;

  this.deck = deck;
  this.deckOpen = deckOpen;

  this.Logger = function() {
    // console.log('Deck: ' + this.deck.stack);
    // console.log('DeckOpen: ' + this.deckOpen.stack);
    // console.log('Stack 1: ' + this.stack_1.stack);
    // console.log('Stack 2: ' + this.stack_2.stack);
    // console.log('Stack 3: ' + this.stack_3.stack);
    // console.log('Stack 4: ' + this.stack_4.stack);
    // console.log('Stack 5: ' + this.stack_5.stack);
    // console.log('Stack 6: ' + this.stack_6.stack);
    // console.log('Stack 7: ' + this.stack_7.stack);
    // console.log('End Stack Heart: ' + this.endstack_1.stack);
    // console.log('End Stack Spade: ' + this.endstack_2.stack);
    // console.log('End Stack Club: ' + this.endstack_3.stack);
    // console.log('End Stack Diamond: ' + this.endstack_4.stack);
  };
}

//StartUp Card-Deal: Random
function setUpAlgo() {
  for (let x = 1; x <= 1; x++) {
    let tempIndex = Math.floor(Math.random() * cardsCopy.length);
    let temp = cardsCopy[tempIndex];
    cardsCopy = cardsCopy.filter((el, i) => i != tempIndex);
    if (x == 1) temp.visible = true;
    else temp.visible = false;
    stack_1.stack.unshift(temp);
  }

  for (let x = 1; x <= 2; x++) {
    let tempIndex = Math.floor(Math.random() * cardsCopy.length);
    let temp = cardsCopy[tempIndex];
    cardsCopy = cardsCopy.filter((el, i) => i != tempIndex);
    if (x == 2) temp.visible = true;
    else temp.visible = false;
    stack_2.stack.unshift(temp);
  }

  for (let x = 1; x <= 3; x++) {
    let tempIndex = Math.floor(Math.random() * cardsCopy.length);
    let temp = cardsCopy[tempIndex];
    cardsCopy = cardsCopy.filter((el, i) => i != tempIndex);
    if (x == 3) temp.visible = true;
    else temp.visible = false;
    stack_3.stack.unshift(temp);
  }

  for (let x = 1; x <= 4; x++) {
    let tempIndex = Math.floor(Math.random() * cardsCopy.length);
    let temp = cardsCopy[tempIndex];
    cardsCopy = cardsCopy.filter((el, i) => i != tempIndex);
    if (x == 4) temp.visible = true;
    else temp.visible = false;
    stack_4.stack.unshift(temp);
  }

  for (let x = 1; x <= 5; x++) {
    let tempIndex = Math.floor(Math.random() * cardsCopy.length);
    let temp = cardsCopy[tempIndex];
    cardsCopy = cardsCopy.filter((el, i) => i != tempIndex);
    if (x == 5) temp.visible = true;
    else temp.visible = false;
    stack_5.stack.unshift(temp);
  }

  for (let x = 1; x <= 6; x++) {
    let tempIndex = Math.floor(Math.random() * cardsCopy.length);
    let temp = cardsCopy[tempIndex];
    cardsCopy = cardsCopy.filter((el, i) => i != tempIndex);
    if (x == 6) temp.visible = true;
    else temp.visible = false;
    stack_6.stack.unshift(temp);
  }

  for (let x = 1; x <= 7; x++) {
    let tempIndex = Math.floor(Math.random() * cardsCopy.length);
    let temp = cardsCopy[tempIndex];
    cardsCopy = cardsCopy.filter((el, i) => i != tempIndex);
    if (x == 7) temp.visible = true;
    else temp.visible = false;
    stack_7.stack.unshift(temp);
  }
  //Deck mit restlichen Karten auffüllen
  //deck.stack = cardsCopy;
  for (let x = 0; x < cardsCopy.length; x++) {
    let tempIndex = Math.floor(Math.random() * cardsCopy.length);
    let temp = cardsCopy[tempIndex];
    cardsCopy = cardsCopy.filter((el, i) => i != tempIndex);
    temp.visible = false;
    deck.stack.unshift(temp);
  }
}

//--------------------------Game Loop
// setUpScene(1);
// console.log(stack_1.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
// console.log('-----------------------------------------------');
// console.log(stack_2.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
// console.log('-----------------------------------------------');
// console.log(stack_3.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
// console.log('-----------------------------------------------');
// console.log(stack_4.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
// console.log('-----------------------------------------------');
// console.log(stack_5.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
// console.log('-----------------------------------------------');
// console.log(stack_6.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
// console.log('-----------------------------------------------');
// console.log(stack_7.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));

// let input = prompt('moveCard(o,i,n) | dc: ');
// while (input != '') {
//   if (input == 'dc') {
//     drawNextCard();

//     console.log(stack_1.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_2.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_3.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_4.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_5.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_6.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_7.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(
//       deckOpen.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })),
//     );
//   } else if (input.includes('moveCard')) {
//     let temp = input
//       .split('(')[1]
//       .split(')')[0]
//       .split(',');
//     try {
//       moveCard(temp[0], Number(temp[1]), temp[2]);
//     } catch (ex) {
//       console.log(ex);
//     }
//     console.log(temp);

//     console.log(stack_1.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_2.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_3.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_4.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_5.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_6.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('-----------------------------------------------');
//     console.log(stack_7.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })));
//     console.log('----------------------DECK OPEN-------------------------');
//     console.log(
//       deckOpen.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })),
//     );
//     console.log('----------------------Endstack 1-------------------------');
//     console.log(
//       endstack_1.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })),
//     );
//     console.log('----------------------Endstack 2-------------------------');
//     console.log(
//       endstack_2.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })),
//     );
//     console.log('----------------------Endstack 3-------------------------');
//     console.log(
//       endstack_3.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })),
//     );
//     console.log('----------------------Endstack 4-------------------------');
//     console.log(
//       endstack_4.stack.map((el) => ({ cardValue: el.cardValue, type: el.type, visible: el.visible })),
//     );
//   } else {
//     console.log('Wrong');
//   }

//   input = prompt('moveCard(o,i,n) | dc: ');
// }

//---------------------------------------------------------

// // console.log('###########################################');

// // console.log(stack_1.stack.length);
// // console.log('-----------------------------------------------');
// // console.log(stack_2.stack.length);
// // console.log('-----------------------------------------------');
// // console.log(stack_3.stack.length);
// // console.log('-----------------------------------------------');
// // console.log(stack_4.stack.length);
// // console.log('-----------------------------------------------');
// // console.log(stack_5.stack.length);
// // console.log('-----------------------------------------------');
// // console.log(stack_6.stack.length);
// // console.log('-----------------------------------------------');
// // console.log(stack_7.stack.length);

// // console.log('###########################################');

// // console.log(
//   'Sum of all Stacks: ',
//   stack_1.stack.length +
//     stack_2.stack.length +
//     stack_3.stack.length +
//     stack_4.stack.length +
//     stack_5.stack.length +
//     stack_6.stack.length +
//     stack_7.stack.length,
// );

// // console.log('Sum of Deck: ', cardsCopy.length);

// console.log('Stack 1: \n', stack_1.toString());
// console.log('Stack 2: \n', stack_2.toString());
// console.log('Stack 3: \n', stack_3.toString());
// console.log('Stack 4: \n', stack_4.toString());
// console.log('Stack 5: \n', stack_5.toString());
// console.log('Stack 6: \n', stack_6.toString());
// console.log('Stack 7: \n', stack_7.toString());

/* from: name of stack
  to: name of stack
  index
  */
function setUpScene(SceneNumber) {
  let funcObject = returnScenario(SceneNumber);
  deck.stack = [];
  let temps1 = [];
  let temps2 = [];
  let temps3 = [];
  let temps4 = [];
  let temps5 = [];
  let temps6 = [];
  let temps7 = [];
  for (let x = funcObject.deck.length - 1; x >= 0; x--) {
    let temp = cards.find(
      (el) => el.cardValue == funcObject.deck[x].cardValue && el.type == funcObject.deck[x].type,
    );
    temp.visible = false;
    deck.stack.push(temp);
  }
  for (let x = funcObject.stack_1.length - 1; x >= 0; x--) {
    let temp = cards.find(
      (el) => el.cardValue == funcObject.stack_1[x].cardValue && el.type == funcObject.stack_1[x].type,
    );
    temp.visible = false;
    temps1.push(temp);
  }
  for (let x = funcObject.stack_2.length - 1; x >= 0; x--) {
    let temp = cards.find(
      (el) => el.cardValue == funcObject.stack_2[x].cardValue && el.type == funcObject.stack_2[x].type,
    );
    temp.visible = false;
    temps2.push(temp);
  }
  for (let x = funcObject.stack_3.length - 1; x >= 0; x--) {
    let temp = cards.find(
      (el) => el.cardValue == funcObject.stack_3[x].cardValue && el.type == funcObject.stack_3[x].type,
    );
    temp.visible = false;
    temps3.push(temp);
  }
  for (let x = funcObject.stack_4.length - 1; x >= 0; x--) {
    let temp = cards.find(
      (el) => el.cardValue == funcObject.stack_4[x].cardValue && el.type == funcObject.stack_4[x].type,
    );
    temp.visible = false;
    temps4.push(temp);
  }
  for (let x = funcObject.stack_5.length - 1; x >= 0; x--) {
    let temp = cards.find(
      (el) => el.cardValue == funcObject.stack_5[x].cardValue && el.type == funcObject.stack_5[x].type,
    );
    temp.visible = false;
    temps5.push(temp);
  }
  for (let x = funcObject.stack_6.length - 1; x >= 0; x--) {
    let temp = cards.find(
      (el) => el.cardValue == funcObject.stack_6[x].cardValue && el.type == funcObject.stack_6[x].type,
    );
    temp.visible = false;

    temps6.push(temp);
  }
  for (let x = funcObject.stack_7.length - 1; x >= 0; x--) {
    let temp = cards.find(
      (el) => el.cardValue == funcObject.stack_7[x].cardValue && el.type == funcObject.stack_7[x].type,
    );
    temp.visible = false;
    temps7.push(temp);
  }

  temps1[0].visible = true;
  temps2[0].visible = true;
  temps3[0].visible = true;
  temps4[0].visible = true;
  temps5[0].visible = true;
  temps6[0].visible = true;
  temps7[0].visible = true;

  stack_1.stack = temps1;
  stack_2.stack = temps2;
  stack_3.stack = temps3;
  stack_4.stack = temps4;
  stack_5.stack = temps5;
  stack_6.stack = temps6;
  stack_7.stack = temps7;
}

module.exports = {
  stack_1,
  stack_2,
  stack_3,
  stack_4,
  stack_5,
  stack_6,
  stack_7,
  endstack_1,
  endstack_2,
  endstack_3,
  endstack_4,
  deck,
  deckOpen,
  drawNextCard,
  moveCard,
  gameStates,
  setUpAlgo,
  stack_List,
  setUpScene,
};
