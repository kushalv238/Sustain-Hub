import 'package:ecoethics/core/app_export.dart';
import 'package:ecoethics/presentation/sign_in_screen/sign_in_screen.dart';
import 'package:ecoethics/presentation/sign_up_sign_in_screen/sign_up_sign_in_screen.dart';
import 'package:ecoethics/widgets/app_bar/appbar_image.dart';
import 'package:ecoethics/widgets/app_bar/appbar_subtitle.dart';
import 'package:ecoethics/widgets/app_bar/custom_app_bar.dart';
import 'package:ecoethics/widgets/custom_button.dart';
import 'package:ecoethics/widgets/custom_text_form_field.dart';
import 'package:flutter/material.dart';

// ignore_for_file: must_be_immutable
class SignUpScreen extends StatelessWidget {
  TextEditingController nameController = TextEditingController();

  TextEditingController nameOneController = TextEditingController();

  TextEditingController group964Controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: ColorConstant.whiteA700,
            resizeToAvoidBottomInset: false,
            appBar: CustomAppBar(
                height: getVerticalSize(45),
                leadingWidth: 56,
                leading: AppbarImage(
                    height: getSize(40),
                    width: getSize(40),
                    svgPath: ImageConstant.imgArrowleft,
                    margin: getMargin(left: 16),
                    onTap: () {
                      onTapArrowleft3(context);
                    }),
                centerTitle: true,
                title: AppbarSubtitle(text: "Let’s Sign Up")),
            body: SizedBox(
                width: size.width,
                child: SingleChildScrollView(
                    child: Padding(
                        padding:
                            getPadding(left: 16, top: 26, right: 16, bottom: 5),
                        child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Container(
                                  width: getHorizontalSize(136),
                                  margin: getMargin(left: 8),
                                  child: Text("Create\nAccount!",
                                      maxLines: null,
                                      textAlign: TextAlign.left,
                                      style: AppStyle.txtPoppinsMedium30)),
                              CustomTextFormField(
                                  focusNode: FocusNode(),
                                  controller: nameController,
                                  hintText: "Name",
                                  margin: getMargin(top: 49)),
                              CustomTextFormField(
                                  focusNode: FocusNode(),
                                  controller: nameOneController,
                                  hintText: "Email",
                                  margin: getMargin(top: 20),
                                  textInputType: TextInputType.emailAddress),
                              CustomTextFormField(
                                  focusNode: FocusNode(),
                                  controller: group964Controller,
                                  hintText: "Password",
                                  margin: getMargin(top: 20),
                                  padding: TextFormFieldPadding.PaddingT14,
                                  textInputAction: TextInputAction.done,
                                  textInputType: TextInputType.visiblePassword,
                                  suffix: Container(
                                      margin: getMargin(
                                          left: 30,
                                          top: 18,
                                          right: 16,
                                          bottom: 18),
                                      child: CustomImageView(
                                          svgPath: ImageConstant.imgLocation)),
                                  suffixConstraints: BoxConstraints(
                                      maxHeight: getVerticalSize(52)),
                                  isObscureText: true),
                              GestureDetector(
                                onTap: () {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                        builder: (context) => SignInScreen(),
                                      ));
                                },
                                child: CustomButton(
                                    height: getVerticalSize(52),
                                    text: "Sign Up",
                                    margin: getMargin(top: 84)),
                              ),
                              Align(
                                  alignment: Alignment.center,
                                  child: GestureDetector(
                                      onTap: () {
                                        Navigator.push(
                                            context,
                                            MaterialPageRoute(
                                              builder: (context) =>
                                                  SignInScreen(),
                                            ));
                                      },
                                      child: Padding(
                                          padding: getPadding(top: 14),
                                          child: RichText(
                                              text: TextSpan(children: [
                                                TextSpan(
                                                    text:
                                                        "Already have an account? ",
                                                    style: TextStyle(
                                                        color: ColorConstant
                                                            .gray500,
                                                        fontSize:
                                                            getFontSize(13),
                                                        fontFamily: 'Poppins',
                                                        fontWeight:
                                                            FontWeight.w400)),
                                                TextSpan(
                                                    text: "Sign In",
                                                    style: TextStyle(
                                                        color: ColorConstant
                                                            .black900,
                                                        fontSize:
                                                            getFontSize(13),
                                                        fontFamily: 'Poppins',
                                                        fontWeight:
                                                            FontWeight.w500))
                                              ]),
                                              textAlign: TextAlign.left)))),
                              Padding(
                                  padding: getPadding(top: 37),
                                  child: Row(children: [
                                    Padding(
                                        padding:
                                            getPadding(top: 17, bottom: 16),
                                        child: SizedBox(
                                            width: getHorizontalSize(105),
                                            child: Divider(
                                                height: getVerticalSize(2),
                                                thickness: getVerticalSize(2),
                                                color:
                                                    ColorConstant.black900))),
                                    Flexible(
                                      child: Container(
                                          padding: getPadding(
                                              left: 9,
                                              top: 6,
                                              right: 11,
                                              bottom: 6),
                                          decoration:
                                              AppDecoration.fillWhiteA700,
                                          child: Column(
                                              mainAxisAlignment:
                                                  MainAxisAlignment.center,
                                              children: [
                                                Padding(
                                                    padding:
                                                        getPadding(bottom: 1),
                                                    child: Text("or continue..",
                                                        overflow: TextOverflow
                                                            .ellipsis,
                                                        textAlign:
                                                            TextAlign.left,
                                                        style: AppStyle
                                                            .txtPoppinsRegular14Black900))
                                              ])),
                                    ),
                                    Padding(
                                        padding:
                                            getPadding(top: 17, bottom: 16),
                                        child: SizedBox(
                                            width: getHorizontalSize(105),
                                            child: Divider(
                                                height: getVerticalSize(2),
                                                thickness: getVerticalSize(2),
                                                color: ColorConstant.black900)))
                                  ])),
                              Padding(
                                  padding: getPadding(top: 27),
                                  child: Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                      children: [
                                        CustomButton(
                                            height: getVerticalSize(52),
                                            width: getHorizontalSize(164),
                                            text: "Google",
                                            variant:
                                                ButtonVariant.FillGray10001,
                                            shape: ButtonShape.RoundedBorder7,
                                            padding: ButtonPadding.PaddingT12,
                                            fontStyle: ButtonFontStyle
                                                .PoppinsRegular15Black900,
                                            prefixWidget: Container(
                                                margin: getMargin(right: 16),
                                                child: CustomImageView(
                                                    svgPath: ImageConstant
                                                        .imgGoogle))),
                                        CustomButton(
                                            height: getVerticalSize(52),
                                            width: getHorizontalSize(163),
                                            text: "Apple",
                                            variant:
                                                ButtonVariant.FillGray10001,
                                            shape: ButtonShape.RoundedBorder7,
                                            padding: ButtonPadding.PaddingT12,
                                            fontStyle: ButtonFontStyle
                                                .PoppinsRegular15Black900,
                                            prefixWidget: Container(
                                                margin: getMargin(right: 16),
                                                child: CustomImageView(
                                                    svgPath: ImageConstant
                                                        .imgUimapple)))
                                      ]))
                            ]))))));
  }

  onTapTxtAlreadyhavean(BuildContext context) async {
    await Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => SignInScreen(),
        ));
  }

  onTapArrowleft3(BuildContext context) async {
    await Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => SignUpSignInScreen(),
        ));
  }
}
