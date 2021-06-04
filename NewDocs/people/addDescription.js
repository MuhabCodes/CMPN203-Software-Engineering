/**
 * 
 * @api {POST} /people/description/:userId addDescription
 * @apiDescription add description to a given user
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userId userId you want to add description to
 * @apiHeader  {String} authorization authorization Value
 * @apiHeaderExample {json} Request-Example:
 *    {
 *        "Authorization": "Bearer   dksjfbdsjkfbusafbjaadsf"
 *     }
 * 
 * @apiSuccess (Success 200) {Object} message message claiming that you added description successfully
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiParamExample  {string} Request-Example:
 * {
 *     "description" : "Hello world!"
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     "message" : "description added successfully"
 * }
 * 
 * 
 * @apiError (Error 403) {String} error The client does not have access rights to the content;
 * @apiError (Error 404)  {Number} statusCode The status code.
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * 
 * 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
 * * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Not Authorized
 *     {
 *       "message": "you arenot authorized to add description",
 *        "statusCode":403
 *     }
 */
