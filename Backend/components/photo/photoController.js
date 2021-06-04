const { getRecent } = require('./services/getRecent');
const { addNew } = require('./services/addNew');
const { getInfo } = require('./services/getInfo');
const { editPhoto } = require('./services/editPhoto');
const { deletePhoto } = require('./services/deletePhoto');
const { addPersonToPhotoServ } = require('./services/addPersonToPhoto');
const { removePersonFromPhotoServ } = require('./services/removePersonFromPhoto');
const { isInPhoto } = require('./services/isInPhoto.validation');
const { getPeopleInPhotoServ } = require('./services/getPeopleInPhoto');
const { addLocation } = require('./services/addLocation');

module.exports = {
  async getRecentPhotos(req, res) {
    try {
      // get all recent photos within the database from the services
      return await getRecent(res);
    } catch (err) {
      return res.json({
        error: err.message,
        statusCode: 500,
      });
    }
  },
  async addPhoto(req, res) {
    try {
      return await addNew(req.body, res);
    } catch (err) {
      return res.json({
        error: err.message,
        statusCode: 500,
      });
    }
  },
  async showPhoto(req, res) {
    try {
      return getInfo(req.params.photoId, res);
    } catch (err) {
      return res.json({
        error: 'PhotoNotFound',
        statusCode: 404,
      });
    }
  },
  async editPhoto(req, res) {
    try {
      return await editPhoto(req.params.photoId, req.body.photo, res);
    } catch (err) {
      return res.json({
        error: 'PhotoNotFound',
        statusCode: 404,
      });
    }
  },
  async deletePhoto(req, res) {
    try {
      return await deletePhoto(req.params.photoId, res);
    } catch (err) {
      return res.json({
        error: 'PhotoNotFound',
        statusCode: 404,
      });
    }
  },
  async addPersonToPhoto(req, res) {
    try {
      // get ids from  request
      const { userId } = req.body;
      const { photoId } = req.params;

      // checks that the user is not in the photo
      if (!await isInPhoto(photoId, userId)) {
        // if user is not in the photo add him
        await addPersonToPhotoServ(photoId, userId);

        res.status(200).json({ statusCode: 200 });
      } else {
        // if user already exists, we send an error
        res.status(409).json({
          statusCode: 409,
          message: 'The request couldn;t be completed due to the current state of the resource',
        });
      }
    } catch (err) {
      res.json({
        error: "Server couldn't handle the request",
        statusCode: 500,
      });
    }
  },
  async removePersonFromPhoto(req, res) {
    try {
      // get ids from  request
      const { userId } = req.body;
      const { photoId } = req.params;

      // checks that the user is in the photo
      if (await isInPhoto(photoId, userId)) {
        // if user in photo remove him from it
        await removePersonFromPhotoServ(photoId, userId);

        res.status(200).json({ statusCode: 200 });
      } else {
        // if user is not in photo exist we send an error
        res.status(409).json({
          statusCode: 409,
          message: 'The request couldn;t be completed due to the current state of the resource',
        });
      }
    } catch (err) {
      res.json({
        error: "Server couldn't handle the request",
        statusCode: 500,
      });
    }
  },
  async getPeopleInPhoto(req, res) {
    try {
      const { photoId } = req.params;

      const inPhoto = await getPeopleInPhotoServ(photoId);
      const retObj = inPhoto.inPhoto.map((user) => ({
        userAvatar: user.userAvatar,
        userId: user._id,
        displayName: user.displayName,
        realName: user.realName,
        isPro: user.isPro,
      }));
      // TODO : check with ayoub if it is needed the same way as the docs
      res.status(200).json({
        statusCode: 200,
        inPhoto: retObj,
      });
    } catch (err) {
      res.json({
        error: 'PhotoNotFound',
        statusCode: 404,
      });
    }
  },
  async addLocation(req, res) {
    try {
      return await addLocation(req.params.photoId, req.params.photoLocation, res);
    } catch (err) {
      return res.json({
        error: 'PhotoNotFound',
        statusCode: 404,
      });
    }
  },
};
