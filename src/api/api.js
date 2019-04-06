import http from "@/utils/http.js";

export const getHome = ()=>http("get","/api/api/app/acts?version=20.0.0&source=H");
// http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H
export const getclassifyTwo = ()=>http("get","/api/api/app/acts?version=20.0.0&source=H");
//https://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList
export const getsearch = ()=>http("get","/api/client/v1/goods/SearchByTag");
//http://api9.wochu.cn/client/v1/goods/SearchByTag
export const getgoods = ()=>http("get","/api/api/goods/getcategoryandgoods?orderId=1&categoryId=6");
