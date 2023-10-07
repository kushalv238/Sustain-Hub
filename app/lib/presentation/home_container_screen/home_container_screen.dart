import 'package:ecoethics/core/app_export.dart';
import 'package:ecoethics/presentation/home_page/home_page.dart';
import 'package:ecoethics/presentation/my_cart_page/my_cart_page.dart';
import 'package:ecoethics/presentation/profile_page/profile_page.dart';
import 'package:ecoethics/presentation/search_page/search_page.dart';
import 'package:ecoethics/widgets/custom_bottom_bar.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

// ignore_for_file: must_be_immutable
class HomeContainerScreen extends StatelessWidget {
  GlobalKey<NavigatorState> navigatorKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: ColorConstant.whiteA700,
            body: Navigator(
                key: navigatorKey,
                initialRoute: AppRoutes.homePage,
                onGenerateRoute: (routeSetting) => PageRouteBuilder(
                    pageBuilder: (ctx, ani, ani1) =>
                        getCurrentPage(routeSetting.name!),
                    transitionDuration: Duration(seconds: 0))),
            bottomNavigationBar:
                CustomBottomBar(onChanged: (BottomBarEnum type) {
              Navigator.pushNamed(
                  navigatorKey.currentContext!, getCurrentRoute(type));
            })));
  }

  ///Handling route based on bottom click actions
  String getCurrentRoute(BottomBarEnum type) {
    switch (type) {
      case BottomBarEnum.Home:
        return AppRoutes.homePage;
      case BottomBarEnum.Search24x24:
        return AppRoutes.searchPage;
      case BottomBarEnum.Cart:
        return AppRoutes.myCartPage;
      case BottomBarEnum.User:
        return AppRoutes.profilePage;
      default:
        return "/";
    }
  }

  ///Handling page based on route
  Widget getCurrentPage(String currentRoute) {
    switch (currentRoute) {
      case AppRoutes.homePage:
        return HomePage();
      case AppRoutes.searchPage:
        return SearchPage();
      case AppRoutes.myCartPage:
        return MyCartPage();
      case AppRoutes.profilePage:
        return ProfilePage();
      default:
        return DefaultWidget();
    }
  }

  Future<void> fetchDataFromNodeServer() async {
  final response = await http.get(Uri.parse('http://localhost:3500/products'));

  if (response.statusCode != 400) {
    // If the server returns a 200 OK response, parse the JSON
    print('Response data: ${response.body}');
  } else {
    // If the server did not return a 200 OK response, throw an exception.
    throw Exception('Failed to load data from server');
  }
}
}
