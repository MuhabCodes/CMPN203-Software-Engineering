import 'package:flutter/material.dart';
import 'view_photos.dart';
import 'package:provider/provider.dart';

import '../providers/photo_provider.dart';

class CameraRoll extends StatefulWidget {
  @override
  _CameraRollState createState() => _CameraRollState();
}

class _CameraRollState extends State<CameraRoll> {
  bool isSelected = false;

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    var photoProvider = Provider.of<PhotoProvider>(context, listen: true);
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: size.height * 0.05,
            decoration: BoxDecoration(color: Colors.grey[350]),
            //padding: EdgeInsets.only(top: 8, bottom: 8),
            child: TextButton(
                onPressed: () {
                  showModalBottomSheet(
                      isScrollControlled: true,
                      context: context,
                      builder: (BuildContext context) {
                        return Container(
                            height: MediaQuery.of(context).size.height * 0.16,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                TextButton(
                                  onPressed: () {
                                    photoProvider.setDateTaken("Date Taken");
                                    Navigator.pop(context);
                                  },
                                  child: Text(
                                    "Date Taken",
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontWeight: FontWeight.bold,
                                        fontSize: 16),
                                  ),
                                ),
                                TextButton(
                                  onPressed: () {
                                    photoProvider.setDateTaken("Date Uploaded");
                                    Navigator.pop(context);
                                  },
                                  child: Text(
                                    "Date Uploaded",
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontWeight: FontWeight.bold,
                                        fontSize: 16),
                                  ),
                                ),
                              ],
                            ));
                      });
                },
                child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                  Text(
                    photoProvider.dateTaken ? "Date Taken" : "Date Uploaded",
                    style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.w600,
                        fontSize: 14),
                  ),
                  Icon(
                    Icons.arrow_drop_down,
                    color: Colors.black,
                  )
                ])),
          ),
          SizedBox(
            height: 15,
          ),
          Stack(
            alignment: AlignmentDirectional.topStart,
            children: [
              ViewPhotos(),
              Positioned(
                left: size.width * 0.7,
                child: Container(
                  height: 30,
                  width: size.width * 0.23,
                  child: Container(
                    decoration: BoxDecoration(shape: BoxShape.rectangle),
                    child: OutlinedButton(
                      onPressed: () {
                        setState(() {
                          Navigator.of(context).pushNamed(
                            '/selectphotos',
                          );
                        });
                      },
                      child: Text("Select",
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.black,
                            fontWeight: FontWeight.w600,
                          )),
                      style: ElevatedButton.styleFrom(
                        primary: Colors.grey[50],
                        side: BorderSide(color: Colors.black, width: 2.0),
                      ),
                    ),
                  ),
                ),
              )
            ],
          ),
        ],
      ),
    );
  }
}
