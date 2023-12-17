const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    //this.tree = {};
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.tree === null) {
      this.tree = newNode;
    } else {
      let current = this.tree;
      while (current.data !== data) {
        if (current.data < data) {
          if (current.right === null) {
            current.right = newNode;
          } else {
            current = current.right;
          }
        } else {
          if (current.left === null) {
            current.left = newNode;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  min() {
    let current = this.tree;
    if (current === null) {
      return null;
    }
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.tree;
    if (current === null) {
      return null;
    }
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  has(data) {
    let current = this.tree;
    if (current === null) return false;

    while (current !== null) {
      if (current.data === data) return true;
      if (current.data < data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  find(data) {
    let current = this.tree;
    if (current === null) return null;

    while (current !== null) {
      if (current.data === data) return current;
      if (current.data < data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return null;
  }

  remove(data) {}

  // root() {
  //   if (this.tree.data === undefined) return null;
  //   return this.tree;
  // }

  // add(data) {
  //   this.addData(this.tree, data);
  // }

  // addData(obj, data) {
  //   if (obj.data === undefined) {
  //     obj.data = data;
  //   }
  //   if (obj.data > data) {
  //     if (obj.left === undefined) {
  //       obj.left = { data: data };
  //     } else {
  //       this.addData(obj.left, data);
  //     }
  //   }
  //   if (obj.data < data) {
  //     if (obj.right === undefined) {
  //       obj.right = { data: data };
  //     } else {
  //       this.addData(obj.right, data);
  //     }
  //   }
  // }

  // has(data) {
  //   return this.hasData(this.tree, data);
  // }

  // hasData(obj, data) {
  //   if (obj.data === data) return true;
  //   if (obj.data > data) {
  //     if (obj.left === undefined) return false;
  //     return this.hasData(obj.left, data);
  //   }
  //   if (obj.data < data) {
  //     if (obj.right === undefined) return false;
  //     return this.hasData(obj.right, data);
  //   }
  // }

  // find(data) {
  //   if (this.has(data) === false) return null;
  //   return this.findData(this.tree, data);
  // }

  // findData(obj, data) {
  //   if (obj.data === data) return obj;
  //   if (obj.data > data) {
  //     return this.findData(obj.left, data);
  //   }
  //   if (obj.data < data) {
  //     return this.findData(obj.right, data);
  //   }
  // }

  // remove(data) {
  //   if (this.has(data) === false) return;
  //   if (this.tree.data === data) {
  //     const childValues = this.getAllChildValues(this.tree);
  //     this.tree = {};
  //     childValues.forEach((el) => {
  //       this.add(el);
  //     });
  //     return;
  //   }
  //   this.removeData(this.tree, data);
  // }

  // removeData(obj, data) {
  //   if (obj.left !== undefined && obj.left.data === data) {
  //     const childValues = this.getAllChildValues(obj.left);
  //     obj.left = undefined;
  //     childValues.forEach((el) => {
  //       this.add(el);
  //     });
  //     return;
  //   }
  //   if (obj.right !== undefined && obj.right.data === data) {
  //     const childValues = this.getAllChildValues(obj.right);
  //     obj.right = undefined;
  //     childValues.forEach((el) => {
  //       this.add(el);
  //     });
  //     return;
  //   }
  //   if (obj.data > data) {
  //     return this.removeData(obj.left, data);
  //   }
  //   if (obj.data < data) {
  //     return this.removeData(obj.right, data);
  //   }
  // }

  // getAllChildValues(obj) {
  //   let values = [];
  //   if (obj.left !== undefined) {
  //     values.push(obj.left.data);
  //     values.push(this.getAllChildValues(obj.left));
  //   }
  //   if (obj.right !== undefined) {
  //     values.push(obj.right.data);
  //     values.push(this.getAllChildValues(obj.right));
  //   }
  //   return values.flat();
  // }

  // min() {
  //   return this.minData(this.tree);
  // }

  // minData(obj) {
  //   if (obj.left === undefined) return obj.data;
  //   return this.minData(obj.left);
  // }

  // max() {
  //   return this.maxData(this.tree);
  // }

  // maxData(obj) {
  //   if (obj.right === undefined) return obj.data;
  //   return this.maxData(obj.right);
  // }
}

module.exports = {
  BinarySearchTree,
};
