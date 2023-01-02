// 文件操作

// 获取fs对象
const fs = require('fs')
// 通过fs.writeFile读取文件，
// 第一个参数为文件路径，
// 第二个参数为写入的内容
// 第三个参数可选，是编码格式
// 第四个参数为回调，返回接收的结果

fs.writeFile('./textFile2.txt','aaa','utf8',(err)=>{
    if(err){
        console.log('文件有误，请检查路径')
        return
    }
    console.log('文件写入成功')
})