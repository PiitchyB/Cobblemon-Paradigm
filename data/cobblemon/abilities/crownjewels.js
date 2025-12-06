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
      if (!heldGemType[source.getItem().id]) return;
      this.add("-ability", source, "Crown Jewels", "[of] " + source);
      if (["brn", "par", "psn"].includes(heldGemType[source.getItem().id])) {
        target.setStatus(heldGemType[source.getItem().id], source, effect, true);
      } else if (heldGemType[source.getItem().id] === "haze") {
        for (const pokemon of this.getAllActive()) {
          pokemon.clearBoosts();
        }
        this.add("-clearallboost");
      } else {
        target.addVolatile(heldGemType[source.getItem().id], source, effect);
      }
      source.takeItem(source);
    },
    flags: { breakable: 1 },
    name: "Crown Jewels"
}