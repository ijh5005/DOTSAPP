export const trainRestrictions = {
  level1: {
    computerMoves: [{
        type: "clickSide",
        box: 20,
        side: "top"
      }, {
        type: "clickSide",
        box: 13,
        side: "right"
      }
    ],
    yourMoves: [{
      type: "clickSide",
      boxes: [14, 15],
      sides: ["right", "left"],
      text: "tap between",
      text2: "two dots"
    }, {
      type: "clickSide",
      boxes: [21, 22],
      sides: ["right", "left"],
      text: "draw more boxes than",
      text2: "your opponent",
      text3: "to win"
    }, {
      type: "clickSide",
      boxes: [8, 14],
      sides: ["bottom", "top"],
      text: "your turn"
    }, {
      type: "clickSide",
      boxes: [25, 26],
      sides: ["right", "left"],
      text: "your turn again",
      text2: "because you scored"
    }, {
      text: "your turn!"
    }, {
      text: ""
    }]
  },
  level2: {
    yourMoves: [{
      type: "explosionClick",
      bomb: "cheetah",
      text: "Use bombs to remove",
      text2: "Foot Of Oppression"
    }, {
      type: "boxClick",
      clickBox: 20,
      text: "click the box",
      text2: "it explodes right and left"
    }, {
      type: "explosionClick",
      bomb: "panther",
      text: "click a panther"
    }, {
      type: "boxClick",
      clickBox: 15,
      text: "it explodes up and down"
    }, {
      text: "remove the",
      text2: "Foot of Oppression",
      text3: "or lose!"
    }, {
      text: ""
    }]
  },
  level3: {yourMoves: [{text: ""}]},
  level4: {yourMoves: [{text: ""}]},
  level5: {yourMoves: [{text: ""}]},
  level6: {yourMoves: [{text: ""}]},
  level7: {yourMoves: [{text: ""}]},
  level8: {yourMoves: [{text: ""}]},
}
