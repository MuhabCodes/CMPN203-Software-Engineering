/**
 *
 * @api {PUT} /photos/:photoId/dates setDates
 * @apiDescription Set one or both of the dates for a photo.
 * @apiGroup photos
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} photoId The id of the photo
 * @apiParam  {Date} [uploadDate] The upload date of the photo
 * @apiParam  {Date} [captureDate] The capture date of the photo
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiError (Error 404) {String} error The photo isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiError (Error 403) {String} error The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
 * @apiError (Error 401) {String} error The email or password of the user wasn't correct.
 * @apiError (Error 401) {Number} statusCode The status code.
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : "aifygv223",
 *      "uploadDate":"1-2-2020",
 *      "captureDate":"1-2-2019"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200
 * }
 *
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 * @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Forbidden",
 *        "statusCode":403
 *     }
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 UserUnauthorized
 *     {
 *       "error": "UserUnauthorized",
 *        "statusCode":401
 *     }
 *
 */
