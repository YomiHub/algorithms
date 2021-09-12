
/*来源于awesome-coding-js：http://www.conardli.top/docs/*/

function Node(data,left,right){
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype = {
  show:function(){
    console.log(this.data);
  }
}

function Tree(){
  this.root = null;
}

Tree.prototype = {
  insert:function(data){
    var node = new Node(data,null,null);
    if(!this.root){
      this.root = node;
      return;
    }

    var current = this.root;
    var parent = null;

    while(current){
      parent = current;
      if(data<parent.data){
        current = current.left;
        if(!current){
          parent.left = node;
          return;
        }
      }else{
        current = current.right;
        if(!current){
          parent.right = node;
          return;
        }
      }
    }
  },

  preOrder:function(node){
    if(node){
      node.show();
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  },

  middleOrder:function(node){
    if(node){
      this.middleOrder(node.left);
      node.show();
      this.middleOrder(node.right);
    }
  },

  laterOrder:function(node){
    if(node){
      this.laterOrder(node.left);
      this.laterOrder(node.right);
      node.show();
    }
  },

  getMin:function(){
    var current = this.root;
    while(current){
      if(!current.left){
        return current;
      }
      current = current.left;
    }
  },

  getMax:function(){
    var current = this.root;
    while(current){
      if(!current.right){
        return current;
      }
      current = current,right;
    }
  },

  getDeep:function(node,deep){
    deep = deep||0;
    if(node == null){
      return deep;
    }
    deep++;
    var leftDeep = this.getDeep(node.left,deep);
    var rightDeep = this.getDeep(node.right,deep);
    return Math.max(leftDeep,rightDeep);
  },

  //二叉树查找（左节点<根节点<右节点）
  getNode:function(data,node){
    if(!node){
      return null
    }

    if(data==node.data){
      return node;
    }else if(data<node.data){
      return this.getNode(data,node.left);
    }else{
      return this.getNode(data,node.right); 
    }
  }
}

var tree = new Tree();
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(2);
tree.insert(5);
tree.insert(7);
tree.insert(6);
tree.insert(0);

//tree.preOrder(tree.root);
//console.log(tree.getDeep(tree.root,0));
//console.log(tree.getNode(5,tree.root));

//二分查找（适用于有序线性表）
function binarySearch(arr,data,start,end){
  if(start>end){
    return -1;
  }

  var mid = Math.floor((end+start)/2);
  if(data==arr[mid]){
    return mid;
  }else if(data<arr[mid]){
    return binarySearch(arr,data,start,mid-1);
  }else{
    return binarySearch(arr,data,mid+1,end);
  }
}

var testArr = [0,2,4,4,4,4,5,6,8,9,11,34,56];
  
console.log(binarySearch(testArr,4,0,testArr.length-1));