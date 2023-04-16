const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = {};
  }

  root() {
    if (this.tree.data === undefined) return null;
    return this.tree;
  }

  add(data) {
    this.addData(this.tree, data);
  }

  addData(obj, data) {
    if (obj.data === undefined) {
      obj.data = data;
    }
    if (obj.data > data) {
      if (obj.left === undefined) {
        obj.left = { data: data };
      } else {
        this.addData(obj.left, data);
      }
    }
    if (obj.data < data) {
      if (obj.right === undefined) {
        obj.right = { data: data };
      } else {
        this.addData(obj.right, data);
      }
    }
  }

  has(data) {
    return this.hasData(this.tree, data);
  }

  hasData(obj, data) {
    if (obj.data === data) return true;
    if (obj.data > data) {
      if (obj.left === undefined) return false;
      return this.hasData(obj.left, data);
    }
    if (obj.data < data) {
      if (obj.right === undefined) return false;
      return this.hasData(obj.right, data);
    }
  }

  find(data) {
    if (this.has(data) === false) return null;
    return this.findData(this.tree, data);
  }

  findData(obj, data) {
    if (obj.data === data) return obj;
    if (obj.data > data) {
      return this.findData(obj.left, data);
    }
    if (obj.data < data) {
      return this.findData(obj.right, data);
    }
  }

  remove(data) {
    if (this.has(data) === false) return;
    if (this.tree.data === data) {
      const childValues = this.getAllChildValues(this.tree);
      this.tree = {};
      childValues.forEach((el) => {
        this.add(el);
      });
      return;
    }
    this.removeData(this.tree, data);
  }

  removeData(obj, data) {
    if (obj.left !== undefined && obj.left.data === data) {
      const childValues = this.getAllChildValues(obj.left);
      obj.left = undefined;
      childValues.forEach((el) => {
        this.add(el);
      });
      return;
    }
    if (obj.right !== undefined && obj.right.data === data) {
      const childValues = this.getAllChildValues(obj.right);
      obj.right = undefined;
      childValues.forEach((el) => {
        this.add(el);
      });
      return;
    }
    if (obj.data > data) {
      return this.removeData(obj.left, data);
    }
    if (obj.data < data) {
      return this.removeData(obj.right, data);
    }
  }

  getAllChildValues(obj) {
    let values = [];
    if (obj.left !== undefined) {
      values.push(obj.left.data);
      values.push(this.getAllChildValues(obj.left));
    }
    if (obj.right !== undefined) {
      values.push(obj.right.data);
      values.push(this.getAllChildValues(obj.right));
    }
    return values.flat();
  }

  min() {
    return this.minData(this.tree);
  }

  minData(obj) {
    if (obj.left === undefined) return obj.data;
    return this.minData(obj.left);
  }

  max() {
    return this.maxData(this.tree);
  }

  maxData(obj) {
    if (obj.right === undefined) return obj.data;
    return this.maxData(obj.right);
  }
}

module.exports = {
  BinarySearchTree,
};
