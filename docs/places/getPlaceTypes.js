/**
 * 
 * @api {GET} /places/types getPlaceTypes
 * @apiDescription Fetches a list of available place types for Flickr.
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} placeTypes list of all available place types 
 * @apiSuccessExample {json} Success-Response:
*    [
  {
     "placeTypeId": "8",
     "text": "city"
  },
  {
     "placeTypeId": "12",
     "text": "country"
  },
  {
     "placeTypeId": "29",
     "text": "continent"
  }
]
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "placeNotFound",
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 * 
 * 
 */