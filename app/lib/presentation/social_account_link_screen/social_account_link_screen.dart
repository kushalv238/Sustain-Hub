import '../social_account_link_screen/widgets/listfacebook_item_widget.dart';
import 'package:ecoethics/core/app_export.dart';
import 'package:ecoethics/widgets/app_bar/appbar_image.dart';
import 'package:ecoethics/widgets/app_bar/appbar_subtitle.dart';
import 'package:ecoethics/widgets/app_bar/custom_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:ecoethics/presentation/social_account_link_alert_bottomsheet/social_account_link_alert_bottomsheet.dart';

class SocialAccountLinkScreen extends StatelessWidget {
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
                      onTapArrowleft18(context);
                    }),
                centerTitle: true,
                title: AppbarSubtitle(text: "Social Network")),
            body: Padding(
                padding: getPadding(left: 16, top: 24, right: 16),
                child: ListView.separated(
                    physics: NeverScrollableScrollPhysics(),
                    shrinkWrap: true,
                    separatorBuilder: (context, index) {
                      return SizedBox(height: getVerticalSize(15));
                    },
                    itemCount: 4,
                    itemBuilder: (context, index) {
                      return ListfacebookItemWidget(onTapImgLink: () {
                        onTapImgLink(context);
                      });
                    }))));
  }

  onTapImgLink(BuildContext context) {
    showModalBottomSheet(
        context: context,
        builder: (_) => SocialAccountLinkAlertBottomsheet(),
        isScrollControlled: true);
  }

  onTapArrowleft18(BuildContext context) {
    Navigator.pop(context);
  }
}
