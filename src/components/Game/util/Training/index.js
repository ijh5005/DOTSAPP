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
      text: "create a box to score"
    }, {
      type: "clickSide",
      boxes: [21, 22],
      sides: ["right", "left"]
    }, {
      type: "clickSide",
      boxes: [8, 14],
      sides: ["bottom", "top"]
    }]
  },
  level2: {
    yourMoves: [{
      type: "explosionClick",
      bomb: "cheetah",
      text: "Use the bombs to",
      text2: "remove the",
      text3: "Foot Of Oppression"
    }, {
      type: "boxClick",
      clickBox: 20,
    }, {
      type: "explosionClick",
      bomb: "panther",
    }, {
      type: "boxClick",
      clickBox: 15
    }]
  },
  level3: null,
  level4: null,
  level5: null,
  level6: null,
  level7: null,
  level8: null,
}
