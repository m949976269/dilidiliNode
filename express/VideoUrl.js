/**
 * Created by liyulun on 16/8/23.
 */
let getVideoUrl = require("../list/getVideoUrl");
"use strict";


module.exports = function (req, res) {
    var url=req.params[0].replace(/http:\/\/m.dilidili.com|http:\/\/dilidili.com/gi,"");

    let c = "http://m.dilidili.com" + url;
    console.log("url", c);
    getVideoUrl(c)
        .then(
            (data)=> {
                res.send({"playUrl": data})
            })
        .catch(
            (url)=>{
                res.send({error:"视频不存在",url})
        })
}