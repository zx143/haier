const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/index', (req, res) => {
    res.render('./public/index.html');
});

//导入todo路由案例
const todoRouter = require('./route/todo');
app.listen(3000);
console.log('服务器启动成功');