/**
 * 
 * @api {get} /urls/group/:url lookupGroup
 * @apiName urls
 * @apiGroup urls
 * @apiVersion  1.0.0
 * 
 * @apiDescription Returns a group Id, given the url to a group's page or photo pool.
 * 
 * @apiParam  {String} url The url to the group page or photo pool.
 * 
 * @apiSuccess (Success 200) {Object} groupId The group id.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "urlNotFound",
*        "statusCode":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }
 

 * 
 * 

 * 
 * 
 */
//TODO : query params in url