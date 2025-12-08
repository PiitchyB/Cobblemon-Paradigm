{
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      if (move.flags["sound"] && !pokemon.volatiles["dynamax"]) {
        move.type = "Grass";
      }
    },
    onBasePowerPriority: 7,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["sound"]) {
        this.debug("Serpent Synergy boost");
        return this.chainModify([5325, 4096]);
      }
    },
    flags: {},
    name: "Serpent Synergy"
}