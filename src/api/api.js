import http from "@/utils/http.js";

export const getHome = ()=>http("get","/api/api/app/acts?version=20.0.0&source=H");
// http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H
export const getclassifyThree = ()=>http("get","/capi/sz/Products/HotCategoryRequest?sourcetype=9");
//https://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList
//https://api1.34580.com/sz/Products/HotCategoryRequest?sourcetype=9
