// ignore_for_file: must_be_immutable

import 'dart:async';
import 'package:ecoethics/core/app_export.dart';
// import 'package:ecoethics/presentation/order_status_screen/order_status_screen.dart';
import 'package:ecoethics/presentation/reviews_page/reviews_page.dart';
import 'package:ecoethics/widgets/app_bar/appbar_image.dart';
import 'package:ecoethics/widgets/app_bar/appbar_subtitle.dart';
import 'package:ecoethics/widgets/app_bar/custom_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg_provider/flutter_svg_provider.dart' as fs;
import 'package:google_maps_flutter/google_maps_flutter.dart';

class TrackingOrderScreen extends StatelessWidget {
  Completer<GoogleMapController> googleMapController = Completer();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        body: Container(
          width: double.maxFinite,
          child: Column(
            children: [
              Expanded(
                child: Stack(
                  children: [
                    GoogleMap(
                      mapType: MapType.normal,
                      initialCameraPosition: CameraPosition(
                        target: LatLng(37.43296265331129, -122.08832357078792),
                        zoom: 14.4746,
                      ),
                      onMapCreated: (GoogleMapController controller) {
                        googleMapController.complete(controller);
                      },
                      zoomControlsEnabled: false,
                      zoomGesturesEnabled: false,
                      myLocationButtonEnabled: false,
                      myLocationEnabled: false,
                    ),
                    Positioned(
                      bottom: 68,
                      left: 16,
                      right: 16,
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Container(
                            height: getVerticalSize(94),
                            width: getHorizontalSize(183),
                            child: Stack(
                              alignment: Alignment.topRight,
                              children: [
                                CustomImageView(
                                  svgPath: ImageConstant.imgGroup1262,
                                  height: getVerticalSize(61),
                                  width: getHorizontalSize(131),
                                  alignment: Alignment.bottomLeft,
                                ),
                                Align(
                                  alignment: Alignment.topRight,
                                  child: Container(
                                    height: getVerticalSize(57),
                                    width: getHorizontalSize(60),
                                    padding: getPadding(all: 10),
                                    decoration: BoxDecoration(
                                      image: DecorationImage(
                                        image:
                                            fs.Svg(ImageConstant.imgGroup1263),
                                        fit: BoxFit.cover,
                                      ),
                                    ),
                                    child: Stack(
                                      children: [
                                        CustomImageView(
                                          imagePath: ImageConstant.imgEllipse24,
                                          height: getSize(33),
                                          width: getSize(33),
                                          radius: BorderRadius.circular(
                                              getHorizontalSize(16)),
                                          alignment: Alignment.topRight,
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          SizedBox(height: getVerticalSize(14)),
                          Container(
                            width: double.maxFinite,
                            decoration:
                                AppDecoration.outlineBlack9003f.copyWith(
                              borderRadius: BorderRadiusStyle.roundedBorder12,
                            ),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Padding(
                                  padding:
                                      getPadding(left: 20, top: 28, right: 20),
                                  child: Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            "Tracking Order",
                                            overflow: TextOverflow.ellipsis,
                                            textAlign: TextAlign.left,
                                            style: AppStyle.txtPoppinsRegular16,
                                          ),
                                          SizedBox(height: getVerticalSize(3)),
                                          Text(
                                            "Order No. 84507",
                                            overflow: TextOverflow.ellipsis,
                                            textAlign: TextAlign.left,
                                            style: AppStyle.txtPoppinsRegular12,
                                          ),
                                        ],
                                      ),
                                      Text(
                                        "Arriving In 3 Days",
                                        overflow: TextOverflow.ellipsis,
                                        textAlign: TextAlign.left,
                                        style: AppStyle
                                            .txtPoppinsMedium13Orange700,
                                      ),
                                    ],
                                  ),
                                ),
                                Container(
                                  width: double.maxFinite,
                                  margin: getMargin(top: 21),
                                  padding: getPadding(
                                      left: 150,
                                      top: 12,
                                      right: 150,
                                      bottom: 12),
                                  decoration:
                                      AppDecoration.fillBlack900.copyWith(
                                    borderRadius:
                                        BorderRadiusStyle.roundedBorder12,
                                  ),
                                  child: OutlinedButton(
                                    onPressed: () {
                                      onTapDone(context);
                                    },
                                    child: Padding(
                                      padding: const EdgeInsets.only(right: 40),
                                      child: Icon(
                                        Icons.done_all_sharp, color: Colors.white,
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              CustomAppBar(
                height: getVerticalSize(69),
                leadingWidth: 56,
                leading: AppbarImage(
                  height: getSize(40),
                  width: getSize(40),
                  svgPath: ImageConstant.imgArrowleft,
                  margin: getMargin(left: 16, top: 5, bottom: 24),
                  onTap: () {
                    onTapArrowLeft(context);
                  },
                ),
                centerTitle: true,
                title: AppbarSubtitle(text: "Tracking Order"),
                styleType: Style.bgShadowBlack90019,
              ),
            ],
          ),
        ),
      ),
    );
  }

  void onTapArrowLeft(BuildContext context) {
    Navigator.pop(context);
  }

  onTapDone(BuildContext context) {
    Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => ReviewsPage(),
        ));
  }
}
