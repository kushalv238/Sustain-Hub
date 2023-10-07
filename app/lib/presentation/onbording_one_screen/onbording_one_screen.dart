import 'package:ecoethics/core/app_export.dart';
// import 'package:ecoethics/presentation/onbording_three_screen/onbording_three_screen.dart';
import 'package:ecoethics/presentation/onbording_two_screen/onbording_two_screen.dart';
// import 'package:ecoethics/presentation/sign_up_sign_in_screen/sign_up_sign_in_screen.dart';
// import 'package:ecoethics/widgets/custom_icon_button.dart';
import 'package:flutter/material.dart';

class OnbordingOneScreen extends StatefulWidget {
  @override
  State<OnbordingOneScreen> createState() => _OnbordingOneScreenState();
}

class _OnbordingOneScreenState extends State<OnbordingOneScreen> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            extendBody: true,
            extendBodyBehindAppBar: true,
            body: Container(
                width: size.width,
                height: size.height,
                decoration: BoxDecoration(
                    image: DecorationImage(
                        image: AssetImage(ImageConstant.imgOnbordingone),
                        fit: BoxFit.cover)),
                child: Container(
                    width: double.maxFinite,
                    padding:
                        getPadding(left: 16, top: 13, right: 16, bottom: 13),
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Align(
                              alignment: Alignment.centerRight,
                              child: GestureDetector(
                                  onTap: () {
                                    onTapTxtSkip(context);
                                  },
                                  child: Text("Next",
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style: AppStyle.txtPoppinsMedium18))),
                          Spacer(),
                          Text("In Trends",
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtPoppinsMedium24),
                          Container(
                              width: getHorizontalSize(285),
                              margin: getMargin(left: 29, top: 14, right: 29),
                              child: Text(
                                  "We create products in collaboration with great designers who are there to get the\ncoolest Eco-Friendly products for you.",
                                  maxLines: null,
                                  textAlign: TextAlign.center,
                                  style: AppStyle.txtPoppinsRegular14)),
                          Container(
                            height: getSize(80),
                            width: getSize(80),
                            margin: getMargin(top: 39, bottom: 37),
                            child: Stack(
                              alignment: Alignment.center,
                              // children: [
                              //   CustomIconButton(
                              //       height: 60,
                              //       width: 60,
                              //       shape: IconButtonShape.CircleBorder30,
                              //       alignment: Alignment.center,
                              //       onTap: () {
                              //         Navigator.push(
                              //             context,
                              //             MaterialPageRoute(
                              //               builder: (context) =>
                              //                   OnbordingTwoScreen(),
                              //             ));
                              //       },
                              //       child: CustomImageView(
                              //           svgPath: ImageConstant
                              //               .imgArrowrightBlack9001)),
                              //   Align(
                              //       alignment: Alignment.center,
                              //       child: Container(
                              //           height: getSize(80),
                              //           width: getSize(80),
                              //           child: CircularProgressIndicator(
                              //               value: 0.5)))
                              // ],
                            ),
                          )
                        ])))));
  }

  onTapTxtSkip(BuildContext context) {
    Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => OnbordingTwoScreen(),
        ));
  }

  // onTapBtnArrowright(BuildContext context) {
  //   Navigator.push(
  //       context,
  //       MaterialPageRoute(
  //         builder: (context) => OnbordingTwoScreen(),
  //       ));
  // }
}
