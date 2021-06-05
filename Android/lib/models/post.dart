import 'package:flickr/models/photos.dart';
import 'package:flutter/material.dart';
import 'comment.dart';
import 'user.dart';

///[Post] class
class Post {
  //List<AssetImage> image = [new AssetImage('lib/assets/photo5.jpg')];
  String description;
  String title;
  User user;
  List<User> likes;
  List<Comment> comments;
  DateTime date;
  bool isLiked;
  bool isSaved;
  String postId;
  String userId;
  int numLikes;
  int numComments;
  //List<NetworkImage> imagePath = [new NetworkImage('www.google.com')];
  List<Photo> photo = [
    new Photo(
      imageUrl: 'www.google.com',
    )
  ];

  Post({
    this.photo,
    this.user,
    this.date,
    this.isLiked = false,
    this.isSaved = false,
    this.postId,
    this.description = "",
    this.title = "",
    this.likes,
    this.comments,
    this.userId,
    this.numComments,
    this.numLikes,
  });
}
