import '../order_status_screen/widgets/orderstatus_item_widget.dart';
import 'package:ecoethics/core/app_export.dart';
import 'package:ecoethics/widgets/app_bar/appbar_image.dart';
import 'package:ecoethics/widgets/app_bar/appbar_subtitle.dart';
import 'package:ecoethics/widgets/app_bar/custom_app_bar.dart';
import 'package:ecoethics/widgets/custom_button.dart';
import 'package:flutter/material.dart';

class OrderStatusScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: ColorConstant.whiteA700,
            appBar: CustomAppBar(
                height: getVerticalSize(50),
                leadingWidth: 56,
                leading: AppbarImage(
                    height: getSize(40),
                    width: getSize(40),
                    svgPath: ImageConstant.imgArrowleft,
                    margin: getMargin(left: 16, top: 5, bottom: 5),
                    onTap: () {
                      onTapArrowleft12(context);
                    }),
                centerTitle: true,
                title: AppbarSubtitle(text: "Order Status")),
            body: Container(
                width: double.maxFinite,
                padding: getPadding(left: 16, top: 20, right: 16, bottom: 20),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      CustomImageView(
                          imagePath:
                              ImageConstant.imgUnsplashvfrcrteqkl8227x343,
                          height: getVerticalSize(227),
                          width: getHorizontalSize(343),
                          radius: BorderRadius.only(
                              topLeft: Radius.circular(getHorizontalSize(12)),
                              topRight: Radius.circular(getHorizontalSize(12))),
                          margin: getMargin(top: 4)),
                      Container(
                          padding: getPadding(
                              left: 30, top: 9, right: 30, bottom: 9),
                          decoration: AppDecoration.fillBlack900.copyWith(
                              borderRadius: BorderRadiusStyle.customBorderBL12),
                          child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                CustomImageView(
                                    svgPath: ImageConstant.imgClock30x30,
                                    height: getSize(30),
                                    width: getSize(30),
                                    margin: getMargin(top: 7, bottom: 6)),
                                Padding(
                                    padding: getPadding(left: 16, bottom: 2),
                                    child: Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        mainAxisAlignment:
                                            MainAxisAlignment.start,
                                        children: [
                                          Text("Delivered",
                                              overflow: TextOverflow.ellipsis,
                                              textAlign: TextAlign.left,
                                              style: AppStyle
                                                  .txtPoppinsRegular16WhiteA700),
                                          Text("Drinks, June 07, 6:20PM ",
                                              overflow: TextOverflow.ellipsis,
                                              textAlign: TextAlign.left,
                                              style: AppStyle.txtPoppinsLight12)
                                        ]))
                              ])),
                      Padding(
                          padding: getPadding(left: 39, top: 24, right: 133),
                          child: ListView.separated(
                              physics: NeverScrollableScrollPhysics(),
                              shrinkWrap: true,
                              separatorBuilder: (context, index) {
                                return SizedBox(height: getVerticalSize(5));
                              },
                              itemCount: 3,
                              itemBuilder: (context, index) {
                                return OrderstatusItemWidget();
                              }))
                    ])),
            bottomNavigationBar: CustomButton(
                height: getVerticalSize(52),
                text: "Confirm Delivery",
                margin: getMargin(left: 16, right: 16, bottom: 21),
                onTap: () {
                  onTapConfirmdeliveryOne(context);
                })));
  }

  onTapConfirmdeliveryOne(BuildContext context) {
    Navigator.pushNamed(context, AppRoutes.settingsScreen);
  }

  onTapArrowleft12(BuildContext context) {
    Navigator.pop(context);
  }
}
