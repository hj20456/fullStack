# js学习笔记

## Node.js后端服务器库

### Node.js是什么
- Node.js是一个开源服务器环境
- Node.js是免费的
- Node.js 可在各种平台（Windows、Linux、Unix、Mac OS X 等）上运行。
- Node.js在服务器上使用 JavaScript

### 为什么使用Node.js
> Web 服务器的常见任务可能是在服务器上打开文件并将内容返回给客户端。

- PHP或ASP处理方式
1. 将任务发送到计算机的文件系统。
2. 在文件系统打开并读取文件时等待。
3. 将内容返回给客户端。
4. 准备好处理下一个请求。

- Node.js处理方式
1. 将任务发送到计算机的文件系统。
2. 准备好处理下一个请求。
3. 当文件系统打开并读取文件时，服务器会将内容返回给客户端。

>Node.js消除了等待，只需继续下一个请求即可。Node.js运行单线程、无阻塞、异步编程，内存效率非常高。

### Node.js能做什么
- Node.js可以生成动态页面内容
- Node.js可以在服务器上创建、打开、读取、写入、删除和关闭文件
- Node.js可以收集表单数据
- Node.js可以添加、删除、修改数据库中的数据

### 什么是Node.js文件
- Node.js文件包含将在某些事件上执行的任务,典型的事件是有人试图访问服务器上的端口
- Node.js文件必须在服务器上启动，然后才能产生任何影响
- Node.js文件有扩展名“.js”

### Node.js事件
```javascript
// 初始化
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:处理方法
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:事件分配处理函数
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:触发事件
eventEmitter.emit('scream');
```