import 'package:ecoethics/presentation/product_view_screen/product_view_screen.dart';

import '../popular_items_screen/widgets/popularitems_item_widget.dart';
import 'package:ecoethics/core/app_export.dart';
import 'package:ecoethics/widgets/app_bar/appbar_image.dart';
import 'package:ecoethics/widgets/app_bar/appbar_subtitle.dart';
import 'package:ecoethics/widgets/app_bar/custom_app_bar.dart';
import 'package:flutter/material.dart';

class PopularItemsScreen extends StatelessWidget {
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
                      onTapArrowleft8(context);
                    }),
                centerTitle: true,
                title: AppbarSubtitle(text: "Popular Items"),
                actions: [
                  AppbarImage(
                      height: getSize(24),
                      width: getSize(24),
                      svgPath: ImageConstant.imgSearch,
                      margin:
                          getMargin(left: 16, top: 13, right: 16, bottom: 13))
                ]),
            body: Padding(
                padding: getPadding(left: 16, top: 24, right: 16),
                child: GridView.builder(
                    shrinkWrap: true,
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                        mainAxisExtent: getVerticalSize(255),
                        crossAxisCount: 2,
                        mainAxisSpacing: getHorizontalSize(16),
                        crossAxisSpacing: getHorizontalSize(16)),
                    physics: NeverScrollableScrollPhysics(),
                    itemCount: 4,
                    itemBuilder: (context, index) {
                      return PopularitemsItemWidget(
                          onTapColumnunsplashzhh3wm2ko3s: () {
                        onTapColumnunsplashzhh3wm2ko3s(context);
                      });
                    }))));
  }

  onTapColumnunsplashzhh3wm2ko3s(BuildContext context) {
    Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => ProductViewScreen(),
        ));
  }

  onTapArrowleft8(BuildContext context) {
    Navigator.pop(context);
  }
}
