{
    onModifyDefPriority: 6,
    onModifyDef(def, pokemon) {
      if (def < pokemon.getStat("spd", false, true)) {
        return def + pokemon.getStat("spd", false, true) * 0.5;
      }
      return def;
    },
    onModifySpDPriority: 6,
    onModifySpD(spd, pokemon) {
      if (spd < pokemon.getStat("def", false, true)) {
        return spd + pokemon.getStat("def", false, true) * 0.5;
      }
      return spd;
    },
    flags: { breakable: 1 },
    name: "Molt Scale"
}