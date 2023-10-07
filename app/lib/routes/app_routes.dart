import 'package:flutter/material.dart';
import 'package:ecoethics/presentation/splash_screen/splash_screen.dart';
import 'package:ecoethics/presentation/onbording_one_screen/onbording_one_screen.dart';
import 'package:ecoethics/presentation/onbording_two_screen/onbording_two_screen.dart';
import 'package:ecoethics/presentation/onbording_three_screen/onbording_three_screen.dart';
import 'package:ecoethics/presentation/sign_up_sign_in_screen/sign_up_sign_in_screen.dart';
import 'package:ecoethics/presentation/sign_in_screen/sign_in_screen.dart';
import 'package:ecoethics/presentation/sign_up_screen/sign_up_screen.dart';
import 'package:ecoethics/presentation/information_screen/information_screen.dart';
import 'package:ecoethics/presentation/forgot_password_screen/forgot_password_screen.dart';
import 'package:ecoethics/presentation/verification_code_screen/verification_code_screen.dart';
import 'package:ecoethics/presentation/reset_password_screen/reset_password_screen.dart';
import 'package:ecoethics/presentation/explore_shop_screen/explore_shop_screen.dart';
import 'package:ecoethics/presentation/home_container_screen/home_container_screen.dart';
import 'package:ecoethics/presentation/popular_items_screen/popular_items_screen.dart';
import 'package:ecoethics/presentation/product_view_screen/product_view_screen.dart';
import 'package:ecoethics/presentation/checkout_screen/checkout_screen.dart';
import 'package:ecoethics/presentation/complete_screen/complete_screen.dart';
import 'package:ecoethics/presentation/tracking_order_screen/tracking_order_screen.dart';
import 'package:ecoethics/presentation/order_status_screen/order_status_screen.dart';
import 'package:ecoethics/presentation/reviews_tab_container_screen/reviews_tab_container_screen.dart';
import 'package:ecoethics/presentation/write_a_review_screen/write_a_review_screen.dart';
import 'package:ecoethics/presentation/settings_screen/settings_screen.dart';
import 'package:ecoethics/presentation/notification_screen/notification_screen.dart';
import 'package:ecoethics/presentation/discount_items_screen/discount_items_screen.dart';
import 'package:ecoethics/presentation/social_account_link_screen/social_account_link_screen.dart';
import 'package:ecoethics/presentation/chat_screen/chat_screen.dart';
import 'package:ecoethics/presentation/app_navigation_screen/app_navigation_screen.dart';

class AppRoutes {
  static const String splashScreen = '/splash_screen';

  static const String onbordingOneScreen = '/onbording_one_screen';

  static const String onbordingTwoScreen = '/onbording_two_screen';

  static const String onbordingThreeScreen = '/onbording_three_screen';

  static const String signUpSignInScreen = '/sign_up_sign_in_screen';

  static const String signInScreen = '/sign_in_screen';

  static const String signUpScreen = '/sign_up_screen';

  static const String informationScreen = '/information_screen';

  static const String forgotPasswordScreen = '/forgot_password_screen';

  static const String verificationCodeScreen = '/verification_code_screen';

  static const String resetPasswordScreen = '/reset_password_screen';

  static const String exploreShopScreen = '/explore_shop_screen';

  static const String homePage = '/home_page';

  static const String homeContainerScreen = '/home_container_screen';

  static const String popularItemsScreen = '/popular_items_screen';

  static const String productViewScreen = '/product_view_screen';

  static const String myCartPage = '/my_cart_page';

  static const String checkoutScreen = '/checkout_screen';

  static const String completeScreen = '/complete_screen';

  static const String trackingOrderScreen = '/tracking_order_screen';

  static const String orderStatusScreen = '/order_status_screen';

  static const String reviewsPage = '/reviews_page';

  static const String reviewsTabContainerScreen =
      '/reviews_tab_container_screen';

  static const String writeAReviewScreen = '/write_a_review_screen';

  static const String settingsScreen = '/settings_screen';

  static const String searchPage = '/search_page';

  static const String notificationScreen = '/notification_screen';

  static const String discountItemsScreen = '/discount_items_screen';

  static const String socialAccountLinkScreen = '/social_account_link_screen';

  static const String profilePage = '/profile_page';

  static const String chatScreen = '/chat_screen';

  static const String appNavigationScreen = '/app_navigation_screen';

  static Map<String, WidgetBuilder> routes = {
    splashScreen: (context) => SplashScreen(),
    onbordingOneScreen: (context) => OnbordingOneScreen(),
    onbordingTwoScreen: (context) => OnbordingTwoScreen(),
    onbordingThreeScreen: (context) => OnbordingThreeScreen(),
    signUpSignInScreen: (context) => SignUpSignInScreen(),
    signInScreen: (context) => SignInScreen(),
    signUpScreen: (context) => SignUpScreen(),
    informationScreen: (context) => InformationScreen(),
    forgotPasswordScreen: (context) => ForgotPasswordScreen(),
    verificationCodeScreen: (context) => VerificationCodeScreen(),
    resetPasswordScreen: (context) => ResetPasswordScreen(),
    exploreShopScreen: (context) => ExploreShopScreen(),
    homeContainerScreen: (context) => HomeContainerScreen(),
    popularItemsScreen: (context) => PopularItemsScreen(),
    productViewScreen: (context) => ProductViewScreen(),
    checkoutScreen: (context) => CheckoutScreen(),
    completeScreen: (context) => CompleteScreen(),
    trackingOrderScreen: (context) => TrackingOrderScreen(),
    orderStatusScreen: (context) => OrderStatusScreen(),
    reviewsTabContainerScreen: (context) => ReviewsTabContainerScreen(),
    writeAReviewScreen: (context) => WriteAReviewScreen(),
    settingsScreen: (context) => SettingsScreen(),
    notificationScreen: (context) => NotificationScreen(),
    discountItemsScreen: (context) => DiscountItemsScreen(),
    socialAccountLinkScreen: (context) => SocialAccountLinkScreen(),
    chatScreen: (context) => ChatScreen(),
    appNavigationScreen: (context) => AppNavigationScreen()
  };
}
