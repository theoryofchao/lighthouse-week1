var minecraftWorld = {
  gravity: function() {
   //... 
  },
  wood: 1000,
  gold: 50,
  diamond: 10,
  chopWood: function() {
    if(this.wood>0) {
      this.wood--;
      return 1;
    } 
    else {
      return 0;
    }
  },
  findGold: function() {
    this.gold--;
  },

};

module.exports = minecraftWorld;
