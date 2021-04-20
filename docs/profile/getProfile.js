/**
 * 
 * @api {GET} /profile/:userId getProfile

 * @apiGroup profile
 * @apiVersion  0.1.0
 * 
 * 
*
 * @apiParam  {String} userId The NSID of the user to fetch profile information for.
 * @apiDescription Returns specified user's profile info, respecting profile privacy settings
*@apiSuccess (Success 200) {Object[]} profileInfo  Profile info required
*@apiSuccess (Success 200) {Number} statusCode The status code
*@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
*@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code
* @apiError (Error 403) {String} error Forbidden The server understood the request but refuses to authorize it.
* @apiError (Error 403) {Number} statusCode The status code
*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code




* @apiError (Error 429) {String} error Too Many Requests ; the user has sent too many requests in a given amount of time ("rate limiting").
* @apiError (Error 429) {Number} statusCode The status code
* @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
* @apiError (Error 500) {Number} statusCode The status code
\
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "profileNotFound",
*        "statusCode":404
*     }
 
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }

@apiSuccessExample {json} Success-Response:
*    {
   "profileId": "85826296@N00",
   "nsId": "85826296@N00",
   "showcaseSet": "12357488850955295",
   "firstName": "Hal",
   "lastName": "Cenderson",
   "description": "This is me, this is my story",
   "website": "http://example.org",
   "occupation": "Super Conductor",
   "homeTown": "Melbourne, Australia",
   "city": "San Francisco",
   "country": "USA"
}

 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */