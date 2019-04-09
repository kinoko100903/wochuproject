import http from "@/utils/http.js";

export const getHome = ()=>http("get","/api/api/app/acts?version=20.0.0&source=H");
// http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H
export const getclassifyTwo = ()=>http("get","/api/api/app/acts?version=20.0.0&source=H");
//https://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList
export const getsearch = ()=>http("get","/api/client/v1/goods/SearchByTag");
//http://api9.wochu.cn/client/v1/goods/SearchByTag
export const getgoods = ()=>http("get","/api/api/goods/getcategoryandgoods?orderId=1&categoryId=6");
export const getShowGoods = ()=>http('get','/api/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D')
//http://api9.wochu.cn/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D