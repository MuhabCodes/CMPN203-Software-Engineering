/**
 *
 * @api {GET} /groups/:groupId/discuss/topics/:topicId/info getInfo
 * @apiDescription Get information about a group discussion topic.
 * @apiGroup groups-discuss-topics
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId The NSID or path alias of the group to add a topic to.
 * @apiParam  {String} topicId The ID for the topic
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object} topic The topic that you requested
 * @apiError (Error 404) {String} error The group isn't found
 * @apiError (Error 404) {String} error The topic isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "groupId" : "fhbu23b4",
 *      "topicId":"ohui9ew4"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "topic":{
 *          "topicId":"ihbru23b4",
 *          "subject":"This is a subject",
 *          "dateCreated":"1-1-2020",
 *          "dateLastPost":"1-1-2021"
 *          }
 * }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "GroupNotFound",
 *        "statusCode":404
 *     }
 *
 *  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TopicNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 *
 */
