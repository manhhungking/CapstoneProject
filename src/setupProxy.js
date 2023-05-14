// const { createProxyMiddleware } = require("http-proxy-middleware");
// // const proxy = "http://127.0.0.1:8000";
// const proxy = "https://backend-capstone-project.herokuapp.com";
// module.exports = function(app) {
//   app.use(
//     createProxyMiddleware("/auth", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/query_exam_tags", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/all_exams", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/exams", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/recent_practice_exams", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/posts", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/save_exam", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/practice_tests", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/save_questions_and_answers", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/query_questions_and_answers_by_examid", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/test_result", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/test_result_specific", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/all_users", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/save_user", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/save_shared_info", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/query_shared_info_by_examid", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
//   app.use(
//     createProxyMiddleware("/my_account", {
//       target: proxy,
//       changOrigin: true,
//     })
//   );
// };

// "/my_account": {
//   "target": "https://backend-capstone-project.herokuapp.com",
//   "changeOrigin": true
// }
