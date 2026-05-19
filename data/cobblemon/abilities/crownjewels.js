{
    onAnyAfterBoost(boost, target, source, effect) {
      if (source !== this.effectState.target) return;
      if (!target || target === source) return;
      let statsLowered = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0) {
          statsLowered = true;
        }
      }
      if (!statsLowered) return;
      const heldGemType = {
        firegem: "brn",
        icegem: "haze",
        poisongem: "psn",
        electricgem: "par",
        normalgem: "yawn",
        grassgem: "leechseed"
      };
      let gemID = source.getItem().id;
      if (!gemID && source.volatiles["gem"] && effect?.effectType === "Move") {
        gemID = toID(effect.type + "gem");
      }
      if (!heldGemType[gemID]) return;
      this.add("-ability", source, "Crown Jewels", "[of] " + source);
      if (["brn", "par", "psn"].includes(heldGemType[gemID])) {
        target.setStatus(heldGemType[gemID], source, effect, true);
      } else if (heldGemType[gemID] === "haze") {
        for (const pokemon of this.getAllActive()) {
          pokemon.clearBoosts();
        }
        this.add("-clearallboost");
      } else {
        target.addVolatile(heldGemType[gemID], source, effect);
      }
      if (source.getItem().id in heldGemType) {
        source.takeItem(source);
      }
    },
    flags: {},
    name: "Crown Jewels"
}