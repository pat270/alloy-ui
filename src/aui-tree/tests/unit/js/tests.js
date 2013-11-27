YUI.add('module-tests', function(Y) {

    var suite = new Y.Test.Suite('aui-tree');

    var createNewTreeView = function() {

        return new Y.TreeView({
            children: [
                {
                    children: [
                        {
                            id: 'one-one'
                        },
                        {
                            id: 'one-two'
                        },
                        {
                            id: 'one-three'
                        },
                        {
                            id: 'one-four'
                        }
                    ],
                    id: 'one'
                },
                {
                    id: 'two'
                },
                {
                    id: 'three'
                }
            ]
        }).render();
    };

    var createNewTreeViewRadio = function(string) {
        var selectAll = (string === 'selectAllChildren') ? true : false;

        var apricotNode = new Y.TreeNodeRadio({
            expanded: true,
            id: 'apricotNode',
            label: 'Apricot',
            leaf: false,
            selectAllChildren: selectAll
        });

        var fruitNode = new Y.TreeNodeRadio({
            expanded: true,
            id: 'fruitNode',
            label: 'Fruit',
            leaf: false,
            selectAllChildren: selectAll
        });

        var radioTree = new Y.TreeView({
            id: 'testRadioButton'
        });

        var radioTreeChild = new Y.TreeNodeRadio({
            expanded: true,
            id: 'testRadioNode',
            label: 'Radio',
            selectAllChildren: selectAll
        });

        var seedsNode = new Y.TreeNodeRadio({
            id: 'seedsNode',
            label: 'Seeds',
            leaf: true,
            selectAllChildren: selectAll
        });

        var watermelonNode = new Y.TreeNodeRadio({
            expanded: true,
            id: 'watermelonNode',
            label: 'Watermelon',
            leaf: false,
            selectAllChildren: selectAll
        });

        radioTree.appendChild(radioTreeChild);

        radioTreeChild.appendChild(fruitNode);

        fruitNode.appendChild(apricotNode);

        fruitNode.appendChild(watermelonNode);

        apricotNode.appendChild(seedsNode);

        radioTree.render();

        return radioTree;
    };

    var createNewTreeViewTask = function(string) {
        var selectAll = (string === 'selectAllChildren') ? true : false;

        var apricotNode = new Y.TreeNodeTask({
            expanded: true,
            id: 'apricotNode',
            label: 'Apricot',
            leaf: false,
            selectAllChildren: selectAll
        });

        var fruitNode = new Y.TreeNodeTask({
            expanded: true,
            id: 'fruitNode',
            label: 'Fruit',
            leaf: false,
            selectAllChildren: selectAll
        });

        var taskTree = new Y.TreeView({
            id: 'testTaskButton'
        });

        var taskTreeChild = new Y.TreeNodeTask({
            expanded: true,
            id: 'testTaskNode',
            label: 'Task',
            selectAllChildren: selectAll
        });

        var seedsNode = new Y.TreeNodeTask({
            id: 'seedsNode',
            label: 'Seeds',
            leaf: true,
            selectAllChildren: selectAll
        });

        var watermelonNode = new Y.TreeNodeTask({
            expanded: true,
            id: 'watermelonNode',
            label: 'Watermelon',
            leaf: false,
            selectAllChildren: selectAll
        });

        taskTree.appendChild(taskTreeChild);

        taskTreeChild.appendChild(fruitNode);

        fruitNode.appendChild(apricotNode);

        fruitNode.appendChild(watermelonNode);

        apricotNode.appendChild(seedsNode);

        taskTree.render();

        return taskTree;
    };

    var childrenShouldBeChecked = function(node) {
        node.all('.tree-node').each(
            function(node) {
                Y.Assert.isTrue(
                    node.one('.tree-node-content').hasClass('tree-node-checked'),
                    '#' + node.get('id') + ' should be checked');
            }
        );
    };

    var childrenShouldNotBeChecked = function(node) {
        node.all('.tree-node').each(
            function(node) {
                Y.Assert.isFalse(
                    node.one('.tree-node-content').hasClass('tree-node-checked'),
                    '#' + node.get('id') + ' should not be checked');
            }
        );
    };

    var parentsShouldBeChecked = function(node) {
        var parentNode = node.ancestor('.tree-node');

        if (parentNode) {
            Y.Assert.isTrue(
                parentNode.one('.tree-node-content').hasClass('tree-node-checked'),
                '#' + parentNode.get('id') + ' should be checked.');

            parentsShouldBeChecked(parentNode);
        }
    };

    var parentsShouldNotBeChecked = function(node) {
        var parentNode = node.ancestor('.tree-node');

        if (parentNode) {
            Y.Assert.isFalse(
                parentNode.one('.tree-node-content').hasClass('tree-node-checked'),
                '#' + parentNode.get('id') + ' should not be checked.');

            parentsShouldNotBeChecked(parentNode);
        }
    };

    suite.add(new Y.Test.Case({
        name: 'Tree View',

        'TreeView constructor should work without a config object': function() {
            var treeView = new Y.TreeView();

            Y.Assert.isInstanceOf(Y.TreeView, treeView, 'treeView should be an instance of Y.TreeView.');
        },

        'TreeNode constructor should work without a config object': function() {
            var treeNode = new Y.TreeNode();

            Y.Assert.isInstanceOf(Y.TreeNode, treeNode, 'treeNode should be an instance of Y.TreeNode.');
        },

        'getNodeById() should return a valid TreeNode': function() {
            var tree = createNewTreeView();

            var childNode = tree.getNodeById('one');

            Y.Assert.isInstanceOf(Y.TreeNode, childNode, 'childNode should be an instance of Y.TreeNode.');
        },

        'getNodeById() should not return a valid TreeNode': function() {
            var tree = createNewTreeView();

            var childNode = tree.getNodeById('bogey');

            Y.Assert.isUndefined(childNode, 'childNode should be undefined.');
        },

        'TreeNode should have children': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('one');

            Y.Assert.areSame(4, node.childrenLength, 'node.childrenLength should return 4.');
        },

        'TreeNode should not have children': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('two');

            Y.Assert.areSame(0, node.childrenLength, 'node.childrenLength should return 0.');
        },

        'appendChild() should regester the TreeNode in the Parent TreeNode and Owner TreeView index attribute': function() {
            var treeView = new Y.TreeView();

            var childTreeNode = new Y.TreeNode({
                id: 'child'
            });
            var rootTreeNode = new Y.TreeNode({
                id: 'root'
            });

            treeView.appendChild(rootTreeNode);
            rootTreeNode.appendChild(childTreeNode);

            var treeViewIndex = treeView.get("index");
            var rootTreeNodeIndex = rootTreeNode.get("index");

            Y.Assert.isTrue(
                treeViewIndex.hasOwnProperty('root'),
                'treeViewIndex object should have a "root" property');
            Y.Assert.isTrue(
                treeViewIndex.hasOwnProperty('child'),
                'treeViewIndex object should have a "child" property');
            Y.Assert.isTrue(
                rootTreeNodeIndex.hasOwnProperty('child'),
                'rootTreeNodeIndex object should have a "child" property');
        },

        'removeChild() should remove child TreeNode': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('two');

            tree.removeChild(node);

            Y.Assert.areSame(2, tree.getChildrenLength(), 'rootNode should have 2 children.');

            node = tree.getNodeById('two');

            Y.Assert.isUndefined(node, 'node should be undefined.');

            Y.Assert.areSame('three', tree.getChildren()[1].get('id'), 'Second node id should be `three`.');
        },

        'removeChild() should not remove child TreeNode': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('bogey');

            tree.removeChild(node);

            Y.Assert.areSame(3, tree.getChildrenLength(), 'rootNode should have 3 children');

            Y.Assert.areSame('three', tree.getChildren()[2].get('id'), 'second node id should be `three`');
        },

        'isRegistered() should find TreeNode': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('two');

            Y.Assert.isTrue(tree.isRegistered(node), 'TreeNode should be registered in TreeView');
        },

        'isRegistered() should find child TreeNode': function() {
            var treeView = new Y.TreeView();

            var childTreeNode = new Y.TreeNode({
                id: 'child'
            });
            var rootTreeNode = new Y.TreeNode({
                id: 'root'
            });

            treeView.appendChild(rootTreeNode);
            rootTreeNode.appendChild(childTreeNode);

            Y.Assert.isTrue(
                treeView.isRegistered(childTreeNode),
                'childTreeNode should be registered in treeView');
            Y.Assert.isTrue(
                rootTreeNode.isRegistered(childTreeNode),
                'childTreeNode should be registered in Parent rootTreeNode');
        },

        'isRegistered() should not find TreeNode': function() {
            var tree = createNewTreeView();

            var node = new Y.TreeNode();

            Y.Assert.isFalse(tree.isRegistered(node), 'TreeNode should be registered in TreeView');
        },

        'TreeNodeRadio should not select all children by default': function() {
            var testRadio = createNewTreeViewRadio();

            Y.one('#testRadioButton').all('.tree-node').each(
                function(node) {
                    var checkedNodeId = node.get('id');

                    node.one('.tree-node-checkbox-container').simulate('click');

                    parentsShouldNotBeChecked(node);

                    childrenShouldNotBeChecked(node);
                }
            );
        },

        'TreeNodeRadio should select all children if selectAllChildren is true': function() {
            var testTree = createNewTreeViewRadio('selectAllChildren');

            Y.one('#testRadioButton').all('.tree-node').each(
                function(node){
                    node.one('.tree-node-checkbox-container').simulate('click');

                    parentsShouldNotBeChecked(node);

                    childrenShouldBeChecked(node);

                    node.one('.tree-node-checkbox-container').simulate('click');
                }
            );
        },

        'TreeNodeTask should not select all children by default': function() {
            var testTask = createNewTreeViewTask();

            Y.one('#testTaskButton').all('.tree-node').each(
                function(node) {
                    node.one('.tree-node-checkbox-container').simulate('click');

                    parentsShouldBeChecked(node);

                    childrenShouldNotBeChecked(node);
                }
            );
        },

        'TreeNodeTask should select all children if selectAllChildren is true': function() {
            var testTask = createNewTreeViewTask('selectAllChildren');

            Y.one('#testTaskButton').all('.tree-node').each(
                function(node) {
                    node.one('.tree-node-checkbox-container').simulate('click');

                    childrenShouldBeChecked(node);

                    parentsShouldNotBeChecked(node);

                    node.one('.tree-node-checkbox-container').simulate('click');
                }
            );
        }
    }));

    Y.Test.Runner.add(suite);

}, '', {
    requires: ['aui-tree', 'node-event-simulate', 'test']
});