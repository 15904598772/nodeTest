// 文件操作

// 获取fs对象
const fs = require('fs')
// 通过fs.readFile读取文件，
// 第一个参数为文件路径，
// 第二个参数可选，是编码格式
// 第三个参数为回调，返回接收的结果
// __dirname用于获取当前完整路径，防止路径错误
fs.readFile(__dirname+'./textFile.txt','utf8',(err,res)=>{
    if(err){
        console.log('文件有误，请检查路径')
        return
    }
    console.log(res)
})
