import 'package:ecoethics/core/app_export.dart';
import 'package:flutter/material.dart';

// ignore: must_be_immutable
class Listunsplashzhh3wm2ko3sItemWidget extends StatelessWidget {
  Listunsplashzhh3wm2ko3sItemWidget({this.onTapColumnunsplashzhh3wm2ko3s});

  VoidCallback? onTapColumnunsplashzhh3wm2ko3s;

  @override
  Widget build(BuildContext context) {
    return IntrinsicWidth(
      child: GestureDetector(
        onTap: () {
          onTapColumnunsplashzhh3wm2ko3s?.call();
        },
        child: Padding(
          padding: getPadding(
            right: 16,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Container(
                height: getVerticalSize(
                  192,
                ),
                width: getHorizontalSize(
                  164,
                ),
                child: Stack(
                  alignment: Alignment.topRight,
                  children: [
                    CustomImageView(
                      imagePath: ImageConstant.imgUnsplashzhh3wm2ko3s192x1641,
                      height: getVerticalSize(
                        192,
                      ),
                      width: getHorizontalSize(
                        164,
                      ),
                      radius: BorderRadius.circular(
                        getHorizontalSize(
                          15,
                        ),
                      ),
                      alignment: Alignment.center,
                    ),
                    CustomImageView(
                      svgPath: ImageConstant.imgFrame19,
                      height: getSize(
                        24,
                      ),
                      width: getSize(
                        24,
                      ),
                      alignment: Alignment.topRight,
                      margin: getMargin(
                        top: 12,
                        right: 12,
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: getPadding(
                  left: 34,
                  top: 12,
                ),
                child: Text(
                  "Black Jacket",
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.left,
                  style: AppStyle.txtPoppinsRegular14Black900,
                ),
              ),
              Padding(
                padding: getPadding(
                  left: 44,
                  top: 5,
                ),
                child: RichText(
                  text: TextSpan(
                    children: [
                      TextSpan(
                        text: " ",
                        style: TextStyle(
                          color: ColorConstant.orange700,
                          fontSize: getFontSize(
                            16,
                          ),
                          fontFamily: 'Poppins',
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      TextSpan(
                        text: "246.00",
                        style: TextStyle(
                          color: ColorConstant.black900,
                          fontSize: getFontSize(
                            16,
                          ),
                          fontFamily: 'Poppins',
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                  textAlign: TextAlign.left,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
