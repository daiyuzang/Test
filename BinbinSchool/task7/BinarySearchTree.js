	function BinarySearchTree (){
		var Node = function(key){
			this.key = key;
			this.left = null;
			this.right = null;
		}
		var root = null;
		this.insert = function(key){
			var newNode = new Node(key);
			if (root === null) 
				root = newNode;
			else
				insertNode(root,newNode);
		}
		this.preOrder = function(callback){
			preOrderNode(root,callback);
		}
		this.inOrder = function(callback){
			inOrderNode(root,callback);
		}
		this.postOrder = function(callback){
			postOrderNode(root,callback);
		}
	}
	var insertNode = function(node,newNode){
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			}
			else{
				insertNode(node.left,newNode);
			}
		}
		else{
			if (node.right === null) {
				node.right = newNode;
			}
			else{
				insertNode(node.right,newNode);
			}
		}
	}
	var preOrderNode = function(node,callback){
		if (node) {
			callback(node);
			preOrderNode(node.left,callback);
			preOrderNode(node.right,callback);
		}
	}
	var inOrderNode = function(node,callback){
		if (node) {
			inOrderNode(node.left,callback);
			callback(node);
			inOrderNode(node.right,callback);
		}
	}
	var postOrderNode = function(node,callback){
		if (node) {
			postOrderNode(node.left,callback);
			postOrderNode(node.right,callback);
			callback(node);
		}
	}

	var array = ["a","b","c","d","e","f","g"];
	var binary = new BinarySearchTree();
	array.forEach(function(e){
		binary.insert(e);
	});
	function show(value){
		console.log(value.key);
	}

	console.log("先序遍历");
	binary.preOrder(show);
	console.log("中序遍历");
	binary.inOrder(show);
	console.log("后序遍历");
	binary.postOrder(show);