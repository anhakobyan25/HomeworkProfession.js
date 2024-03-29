//1
function makeTree(nodes, parentId = null) {
    let tree = {}
    let children = nodes.filter(node => node.parentId === parentId)
    children.forEach(child => {
        tree[child.id] = makeTree(nodes, child.id)
    })

    return tree
}

//2


function makeTree2(nodes, parentId = null) {
    const tree = { id: parentId, children: [] }
    const children = nodes.filter(node => node.parentId === parentId)
    children.forEach(child => {
        tree.children.push(makeTree2(nodes, child.id))
    })
    return tree
}

////////

function  findNode( tree, id){
 	for(let key in tree){
        if(+key === id){
            return tree[key]
        }else{
      return findNode(tree[key], id)
            }
    }
return null
}  

//3

function helloDecorated(fn){
     return function decorated(...rest){
     console.log('Hello this is Decorator function')
        return fn.apply(this,...rest)
      }
}
