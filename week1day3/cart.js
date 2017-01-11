var cart = {
  items: [],
  addItem: function(newItem) {
    this.items.push(newItem);
  },

  removeItem: function(itemToRemove) {
    var index = this.items.indexOf(itemToRemove);
    if(index > - 1) {
      this.items.splice(index, 1);
    }
  },

  calculateTotal: function() {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  }
};
