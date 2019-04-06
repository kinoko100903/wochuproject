module.exports = {
    devServer:{
        proxy:{
           "/api":{
               target:"http://api9.wochu.cn",
               changeOrigin:true,
               pathRewrite:{
                   "^/api":""
               }
           },
        }
    }
}