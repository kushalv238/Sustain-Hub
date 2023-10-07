import 'package:ecoethics/core/app_export.dart';
import 'package:ecoethics/presentation/sign_in_screen/sign_in_screen.dart';
import 'package:ecoethics/presentation/sign_up_screen/sign_up_screen.dart';
import 'package:ecoethics/widgets/custom_button.dart';
import 'package:flutter/material.dart';

class SignUpSignInScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: ColorConstant.gray100,
            body: Container(
                width: double.maxFinite,
                padding: getPadding(left: 16, top: 50, right: 16, bottom: 50),
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      CustomImageView(
                          imagePath: ImageConstant.imgUnsplashw7b3edub2i299x299,
                          height: getSize(299),
                          width: getSize(299),
                          radius: BorderRadius.circular(getHorizontalSize(149)),
                          margin: getMargin(top: 23)),
                      Container(
                          width: getHorizontalSize(186),
                          margin: getMargin(top: 55),
                          child: Text("For all you Eco-Concious Minds",
                              maxLines: null,
                              textAlign: TextAlign.center,
                              style: AppStyle.txtPoppinsMedium25)),
                      Container(
                          width: getHorizontalSize(304),
                          margin: getMargin(left: 20, top: 13, right: 19),
                          child: Text(
                              "SustainHub has got you covered.",
                              maxLines: null,
                              textAlign: TextAlign.center,
                              style: AppStyle.txtPoppinsRegular15)),
                      Padding(
                          padding: getPadding(top: 48),
                          child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                CustomButton(
                                    height: getVerticalSize(52),
                                    width: getHorizontalSize(164),
                                    text: "Register",
                                    onTap: () {
                                      onTapRegister(context);
                                    }),
                                CustomButton(
                                    height: getVerticalSize(52),
                                    width: getHorizontalSize(163),
                                    text: "Sign In",
                                    variant: ButtonVariant.FillGray200,
                                    fontStyle: ButtonFontStyle
                                        .PoppinsMedium16Black900_1,
                                    onTap: () {
                                      onTapSignin(context);
                                    })
                              ]))
                    ]))));
  }

  onTapRegister(BuildContext context) {
    Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => SignUpScreen(),
        ));
  }

  onTapSignin(BuildContext context) {
    Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => SignInScreen(),
        ));
  }
}
