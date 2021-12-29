// 1、首先找出根节点，没有parentId的就是根节点

// 2、有父节点的均为子节点，根据关联的父节点，设置到一个父节点的对象数组中。

// 3、针对同一个父节点的子节点数组，因为关联的父节点是唯一的。可以把父节点作为键，所有子节点放到键值对中。

// 4、根据节点的id,查找以节点id为建的children数组，递归查找是否都有子节点，没有就是leaf节点，或者children为null

function buildTree(data) {
  const len = data.length
  let nodemap = {}
  let treeData = []

  data.forEach((item, i) => {
    nodemap[item.id] = item
  })

  data.forEach((item) => {
    if (item["parentId"]) {
      // 子节点
      let parent = nodemap[item["parentId"]]
      if (parent) {
        !parent["children"] && (parent["children"] = [])
        parent["children"].push(item)
      }
    } else {
      // 根节点
      treeData.push(item)
    }
  })
  return treeData
}

let testDataArr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2", parentId: 1 },
  { id: 3, name: "test3", parentId: 2 },
  { id: 4, name: "test4", parentId: 3 },
  { id: 5, name: "test5", parentId: 3 },
  { id: 8, name: "test18", parentId: 7 },
]

console.log(JSON.stringify(buildTree(testDataArr)))