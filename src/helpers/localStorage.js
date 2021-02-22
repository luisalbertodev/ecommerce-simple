// import { CLIENT_LOCAL } from "../constant";

// export const getDataLocal = (type = CLIENT_LOCAL) => {
//   const item = localStorage.getItem(type);
//   if (typeof item === "string" && item !== "undefined") {
//     try {
//       return JSON.parse(item);
//     } catch (e) {
//       return null;
//     }
//   }

//   return null;
// };

// export const setDataLocal = (data, type = CLIENT_LOCAL) => {
//   localStorage.setItem(type, JSON.stringify(data));
// };
