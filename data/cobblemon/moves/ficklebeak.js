{
    num: 9003,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    name: "Fickle Beak",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, contact: 1, metronome: 1 },
    onBasePower(basePower, pokemon) {
      if (this.randomChance(3, 10)) {
        this.debug("fickle beak boost");
        return this.chainModify(2);
      }
    },
    multihit: 4,
    secondary: null,
    target: "normal",
    type: "Flying",
    contestType: "Clever"
}