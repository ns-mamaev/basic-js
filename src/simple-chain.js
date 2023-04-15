const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  nodes: [],
  getLength() {
    return this.nodes.length;
  },
  addLink(value) {
    this.nodes.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    const isValidPosition = typeof position === 'number' 
      && Math.round(position) === position
      && position > 0
      && position <= this.nodes.length;
    if (!isValidPosition) {
      this.nodes = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.nodes = [ ...this.nodes.slice(0, position - 1), ...this.nodes.slice(position) ];

    return this;
  },
  reverseChain() {
    this.nodes.reverse();
    return this;
  },
  finishChain() {
    const res = this.nodes.join('~~');
    this.nodes = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
