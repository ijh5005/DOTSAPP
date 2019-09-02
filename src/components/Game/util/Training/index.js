export const trainRestrictions = {
  level1: {
    computerMoves: [{
        type: "clickSide",
        box: 19,
        side: "top"
      }, {
        type: "clickSide",
        box: 14,
        side: "right"
      }
    ],
    yourMoves: [{
      type: "clickSide",
      boxes: [15, 16],
      sides: ["right", "left"],
      text: "tap between",
      text2: "two dots"
    }, {
      type: "clickSide",
      boxes: [9, 15],
      sides: ["bottom", "top"],
      text: "draw more boxes than",
      text2: "your opponent",
      text3: "to win"
    }, {
      type: "clickSide",
      boxes: [15, 21],
      sides: ["bottom", "top"],
      text: "your turn"
    }, {
      type: "clickSide",
      boxes: [10, 11],
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
      clickBox: 16,
      text: "click the box",
      text2: "it explodes right and left"
    }, {
      type: "explosionClick",
      bomb: "panther",
      text: "click a panther"
    }, {
      type: "boxClick",
      clickBox: 10,
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
