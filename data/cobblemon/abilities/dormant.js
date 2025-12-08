{
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target)) {
        this.boost({ spa: 1, spe: 1, def: -1 }, target, target);
      }
    },
    flags: {},
    "name": "Dormant"
}