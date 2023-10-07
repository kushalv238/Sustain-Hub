import 'package:ecoethics/presentation/home_container_screen/home_container_screen.dart';
// import 'package:ecoethics/presentation/home_page/home_page.dart';

import '../explore_shop_screen/widgets/chipviewgroup1315_item_widget.dart';
import 'package:ecoethics/core/app_export.dart';
import 'package:ecoethics/widgets/custom_button.dart';
import 'package:flutter/material.dart';

class ExploreShopScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: ColorConstant.gray10002,
            body: Container(
                width: double.maxFinite,
                padding: getPadding(left: 16, top: 32, right: 16, bottom: 32),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Container(
                          width: getHorizontalSize(192),
                          child: Text("Choose which products\nyou like most!",
                              maxLines: null,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtPoppinsMedium26)),
                      Container(
                          width: getHorizontalSize(294),
                          margin: getMargin(top: 13, right: 49),
                          child: Text(
                              "Choose products which you have the most interest in \nto give you the best app experience.",
                              maxLines: null,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtPoppinsRegular16)),
                      Padding(
                          padding: getPadding(top: 35, bottom: 5),
                          child: Wrap(
                              runSpacing: getVerticalSize(5),
                              spacing: getHorizontalSize(5),
                              children: List<Widget>.generate(21,
                                  (index) => Chipviewgroup1315ItemWidget())))
                    ])),
            bottomNavigationBar: CustomButton(
                height: getVerticalSize(52),
                text: "Explore Shop",
                margin: getMargin(left: 16, right: 16, bottom: 36),
                onTap: () {
                  onTapExploreshop(context);
                })));
  }

  onTapExploreshop(BuildContext context) {
    Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => HomeContainerScreen(),
        ));
  }
}
