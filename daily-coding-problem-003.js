/*
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node: def __init__(self, val, left=None, right=None): self.val = val self.left = left self.right = right

The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right')) assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

class Node {
    constructor(val, left = undefined, right = undefined) {
        this.val = val
        this.left = left
        this.right = right
    }
}

serialize = (node) => JSON.stringify(node)

deserialize = (str) => instantiate(JSON.parse(str))

instantiate = (obj) => {
    if (obj === undefined) obj
    else {
        let node = new Node(obj.val)
        node.left = instantiate(obj.left)
        node.right = instantiate(obj.right)
        return node
    }
}

node = new Node(
    'root',
    new Node('left', new Node('left.left')),
    new Node('right')
)

console.log('input :')
console.log('-------')
console.log(node)
let str = serialize(node)
let result = deserialize(str)
console.log()
console.log('output :')
console.log('--------')
console.log(result); 
