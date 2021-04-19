/**
 * 
  * @api {get} /places/:placeId/resolvePlaceId resolvePlaceId
 * 
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * @apiDescription Find Flickr Places information by Place ID.
This method has been deprecated. It won't be removed but you should use flickr.places.getInfo instead.
 * 
 * @apiParam  {String} placeId A Flickr Places ID
 * 
 *@apiSuccess (Success 200) {Object} placesInfo Places information
 *@apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * 

 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} Forbidden The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 *
 * 
 * @apiError (Error 408) {String} Request Timeout; the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.
 * @apiError (Error 408) {Number} statusCode The status code
 * 
 * @apiError (Error 417) {String} Expectation Failed ; the expectation given in the request's Expect header could not be met.
 * @apiError (Error 417) {Number} statusCode The status code
 * 
 * @apiError (Error 429) {String} Too Many Requests ; he user has sent too many requests in a given amount of time ("rate limiting").
 * @apiError (Error 429) {Number} statusCode The status code
 * 
 * @apiError (Error 411) {String} Length required ; the server refuses to accept the request without a defined Content-Length header.
 * @apiError (Error 411) {Number} statusCode The status code 
 *
 * @apiError (Error 500) {String} Internal Server Error ;the server encountered an unexpected condition that prevented it from fulfilling the request.
 * @apiError (Error 500) {Number} statusCode The status code

 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "placeNotFound",
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
   *@apiSuccessExample {json} Success-Response: 
*   {
*   "placeId": "kH8dLOubBZRvX_YZ",
*   "woeId": "2487956",
*   "latitude": "37.779",
*   "longitude": "-122.420",
*   "placeUrl": "/United+States/California/San+Francisco",
*   "placeType": "locality",
*   "locality": {
*      "placeId": "kH8dLOubBZRvX_YZ",
*      "woeId": "2487956",
*      "latitude": "37.779",
*      "longitude": "-122.420",
*      "placeUrl": "/United+States/California/San+Francisco",
*      "#text": "San Francisco"
*   },
*   "county": {
*      "placeId": "hCca8XSYA5nn0X1Sfw",
*      "woeId": "12587707",
*      "latitude": "37.759",
*      "longitude": "-122.435",
*      "placeUrl": "/hCca8XSYA5nn0X1Sfw",
*      "#text": "San Francisco"
*   },
*   "region": {
*      "placeId": "SVrAMtCbAphCLAtP",
*      "woeId": "2347563",
*      "latitude": "37.271",
*      "longitude": "-119.270",
*      "placeUrl": "/United+States/California",
*      "#text": "California"
*   },
*   "country": {
*      "placeId": "4KO02SibApitvSBieQ",
*      "woeId": "23424977",
*      "latitude": "48.890",
*      "longitude": "-116.982",
*      "placeUrl": "/United+States",
*      "#text": "United States"
*   }
*}
 * 
 * 
 * 
 */