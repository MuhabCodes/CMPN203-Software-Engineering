/**
 * 
 * @api {GET} /groups/:group_id/pools/photo/:photo_id/context getGroups
 * @apiGroup groups.pools
 * @apiVersion  1.0.0
 * 
 * @apiDescription Get the groups where you can post photos.
 * 
 * @apiSuccess (Success 200) {Object[]} groupList A list containing the groups to which you can add photos.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
 * @apiParam  {Number} [page=1] The page of results to return.
 * @apiParam  {Number} [per_page=400] The number of groups per page that can be returned.
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Group Not Found",
 *        "status_code":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 * 
 */