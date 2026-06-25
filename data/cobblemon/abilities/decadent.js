{
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target, true)) {
        this.heal(source.baseMaxhp / 16, source, target, this.dex.conditions.get("leechseed"));
        this.add("-activate", target, "ability: Decadent", source);
        source.m.decadentTrapped = true;
      }
    },
    onFoeTrapPokemon(pokemon) {
      if (pokemon.m.decadentTrapped && pokemon.isAdjacent(this.effectState.target)) {
        pokemon.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon, source) {
      if (!source) source = this.effectState.target;
      if (!source || !pokemon.isAdjacent(source)) return;
      if (pokemon.m.decadentTrapped) {
        pokemon.maybeTrapped = true;
      }
    },
    flags: {},
    name: "Decadent"
  }