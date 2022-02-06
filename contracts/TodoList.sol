// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16<0.9.0;

contract TodoList {
    uint public taskCount = 0;

    struct Task {
         uint id;
         string content;
         bool completed;
    }

    mapping(uint => Task) public tasks;

    constructor() public {
        createTask("Check out the list");
    }

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }
}