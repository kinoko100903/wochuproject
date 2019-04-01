import http from "@/utils/http.js";

export const getHome = ()=>http("get","/app/acts?version=20.0.0&source=H");
