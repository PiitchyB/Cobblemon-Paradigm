{
    num: 9000,
    accuracy: 100,
    basePower: 15,
    category: "Special",
    name: "Bottomless Bellow",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1 },
    onModifyMove(move, pokemon) {
      move.multihit = 3 + (pokemon.m[move.id + "Faints"] || 0);
    },
    onAfterMoveSecondarySelf(source, target, move) {
      if (!target || target.fainted || target.hp <= 0) {
        if (!source.m[move.id + "Faints"]) source.m[move.id + "Faints"] = 0;
        source.m[move.id + "Faints"]++;
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Tough"
}