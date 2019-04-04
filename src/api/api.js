import http from "@/utils/http.js";

export const getHome = ()=>http("get","/api/app/acts?version=20.0.0&source=H");
// http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H
export const getclassifyThree = ()=>http("get","/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D");
//https://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList
