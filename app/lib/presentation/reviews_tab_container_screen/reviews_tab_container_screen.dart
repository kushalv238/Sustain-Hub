import 'package:ecoethics/core/app_export.dart';
import 'package:ecoethics/presentation/reviews_page/reviews_page.dart';
import 'package:ecoethics/widgets/app_bar/appbar_image.dart';
import 'package:ecoethics/widgets/app_bar/appbar_subtitle.dart';
import 'package:ecoethics/widgets/app_bar/custom_app_bar.dart';
import 'package:flutter/material.dart';

class ReviewsTabContainerScreen extends StatefulWidget {
  @override
  _ReviewsTabContainerScreenState createState() =>
      _ReviewsTabContainerScreenState();
  onTapArrowleft13(BuildContext context) {
    Navigator.pop(context);
  }
}

// ignore_for_file: must_be_immutable
class _ReviewsTabContainerScreenState extends State<ReviewsTabContainerScreen>
    with TickerProviderStateMixin {
  late TabController group18Controller;

  @override
  void initState() {
    super.initState();
    group18Controller = TabController(length: 2, vsync: this);
  }

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
                      onTapArrowleft13(context);
                    }),
                centerTitle: true,
                title: AppbarSubtitle(text: "Reviews")),
            body: Container(
                width: double.maxFinite,
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Container(
                          height: getVerticalSize(52),
                          width: getHorizontalSize(343),
                          margin: getMargin(top: 24),
                          decoration: BoxDecoration(
                              color: ColorConstant.gray200,
                              borderRadius:
                                  BorderRadius.circular(getHorizontalSize(10))),
                          child: TabBar(
                              controller: group18Controller,
                              labelColor: ColorConstant.whiteA700,
                              labelStyle: TextStyle(
                                  fontSize: getFontSize(16),
                                  fontFamily: 'Poppins',
                                  fontWeight: FontWeight.w500),
                              unselectedLabelColor: ColorConstant.black900,
                              unselectedLabelStyle: TextStyle(
                                  fontSize: getFontSize(16),
                                  fontFamily: 'Poppins',
                                  fontWeight: FontWeight.w500),
                              indicator: BoxDecoration(
                                  color: ColorConstant.black900,
                                  borderRadius: BorderRadius.circular(
                                      getHorizontalSize(10))),
                              tabs: [
                                Tab(
                                    child: Text("Positive",
                                        overflow: TextOverflow.ellipsis)),
                                Tab(
                                    child: Text("Negetive",
                                        overflow: TextOverflow.ellipsis))
                              ])),
                      Container(
                          height: getVerticalSize(642),
                          child: TabBarView(
                              controller: group18Controller,
                              children: [ReviewsPage(), ReviewsPage()]))
                    ]))));
  }

  onTapArrowleft13(BuildContext context) {
    Navigator.pop(context);
  }
}
