/**
 * 
 * @api {GET} /people/:userId/info getInfo
 * @apiDescription Get information about a user
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userId userID you want to get information about
 * 
 * @apiSuccess (Success 200) {Object[]} userInfo The user information of the user you want info about
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
 * 
 * 
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 */