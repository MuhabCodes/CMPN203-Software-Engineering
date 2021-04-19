/**
 * 
 * @api {GET} /activity/user/comments userComments
 * @apiDescription Returns a list of recent activity on photos commented on by the calling user
 * @apiGroup activity
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} [perPage=10] Number of items to return per page.
 * @apiParam  {String} [page=1] The page of results to return. 
 * 
 * @apiSuccess (Success 200) {Object[]} activityList list of all recent activites of mentioned user
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiSuccessExample {json} Success-Response:
 *    [
   {
      "type": "photoset",
      "id": "395",
      "owner": "12037949754@N01",
      "primary": "6521",
      "secret": "5a3cc65d72",
      
      "comments": "1",
      "views": "33",
      "photos": "7",
      "more": "0",
      "title": "A set of photos",
      "activity": {
         "event": {
            "type": "comment",
            "userId": "1234",
            "userName": "yousef123",
            "dateAdded": "1144086424",
            "text": "yay"
         }
      }
   },
   {
      "type": "photo",
      "id": "10289",
      "owner": "4567",
      "secret": "34da0d3891",
      
      "comments": "1",
      "notes": "0",
      "views": "47",
      "faves": "0",
      "more": "0",
      "title": "A photo",
      "activity": [
         {
            "type": "comment",
            "user": "1234",
            "userName": "yousef123",
            "dateNdded": "1133806604",
            "text": "test"
         },
         {
            "type": "note",
            "user": "1234",
            "userName": "yousef123",
            "dateAdded": "1118785229",
            "text": "nice"
         }
      ]
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
 * 
 */