{
    onFoeType(types) {
      if (this.activeMove && this.activeMove.category === "Status" && this.activeMove.status && this.activePokemon === this.effectState.target && ["sunnyday", "desolateland"].includes(this.field.effectiveWeather())) {
        return types.filter((type) => this.dex.types.get(type).damageTaken[this.activeMove.status] !== 3);
      }
    },
    onModifyMove(move) {
      if (["sunnyday", "desolateland"].includes(this.field.effectiveWeather()) && move.category === "Status") {
        move.ignoreImmunity = true;
      }
    },
    onAnyInvulnerabilityPriority: 2,
    onAnyInvulnerability(target, source, move) {
      if (move && ["sunnyday", "desolateland"].includes(this.field.effectiveWeather()) && move.category === "Status" && (source === this.effectState.target || target === this.effectState.target)) return 0;
    },
    onAnyAccuracy(accuracy, target, source, move) {
      if (move && ["sunnyday", "desolateland"].includes(this.field.effectiveWeather()) && move.category === "Status" && (source === this.effectState.target || target === this.effectState.target)) {
        return true;
      }
      return accuracy;
    },
    flags: {},
    name: "Malignance"
}