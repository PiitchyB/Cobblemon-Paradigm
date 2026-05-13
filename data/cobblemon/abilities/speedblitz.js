{
    onBasePower(basepower, attacker, defender, move) {
      let ratio = Math.floor(attacker.getStat("spe") / defender.getStat("spe"));
      if (!isFinite(ratio)) ratio = 0;
      const boost = [1, 1.1, 1.2, 1.3, 1.4, 1.5][Math.min(ratio, 5)];
      this.debug(`speed blitz boost: ${boost}`);
      return this.chainModify(boost);
    },
    onSourceModifyDamage(damage, source, target, move) {
      let ratio = Math.floor(target.getStat("spe") / source.getStat("spe"));
      if (!isFinite(ratio)) ratio = 0;
      const drop = [1, 1.1, 1.2, 1.3, 1.4, 1.5][Math.min(ratio, 5)];
      this.debug(`speed blitz defense drop: ${drop}`);
      return this.chainModify(drop);
    },
    flags: {},
    name: "Speed Blitz"
}