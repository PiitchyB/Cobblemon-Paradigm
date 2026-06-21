{
    num: 9004,
    accuracy: 100,
    basePower: 95,
    category: "Physical",
    name: "Sugar Rush",
    pp: 10,
    priority: 0,
    flags: { contact: 1, metronome: 1, mirror: 1, protect: 1 },
    beforeMoveCallback(pokemon) {
      if (!pokemon.getItem().isBerry) return;
      pokemon.eatItem(true);
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Cute"
}