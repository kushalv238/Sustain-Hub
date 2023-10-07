import 'package:ecoethics/core/app_export.dart';
import 'package:ecoethics/presentation/tracking_order_screen/tracking_order_screen.dart';
import 'package:ecoethics/widgets/custom_button.dart';
import 'package:flutter/material.dart';

class CompleteScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: ColorConstant.whiteA700,
            body: Container(
                width: double.maxFinite,
                padding: getPadding(left: 16, right: 16),
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      CustomImageView(
                          svgPath: ImageConstant.imgCheckmark,
                          height: getVerticalSize(97),
                          width: getHorizontalSize(87)),
                      Container(
                          width: getHorizontalSize(278),
                          margin: getMargin(left: 33, top: 40, right: 32),
                          child: Text(
                              "Order Completed Successfully!\nThank your and see you soon",
                              maxLines: null,
                              textAlign: TextAlign.center,
                              style: AppStyle.txtPoppinsRegular18)),
                      CustomButton(
                          height: getVerticalSize(52),
                          text: "My Orders",
                          margin: getMargin(top: 49, bottom: 5),
                          onTap: () {
                            onTapMyorders(context);
                          })
                    ]))));
  }

  onTapMyorders(BuildContext context) {
    Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => TrackingOrderScreen(),
        ));
  }
}
