import 'package:ecoethics/core/utils/image_constant.dart';
import 'package:ecoethics/core/utils/size_utils.dart';
import 'package:ecoethics/presentation/onbording_one_screen/onbording_one_screen.dart';
import 'package:ecoethics/widgets/custom_image_view.dart';
import 'package:flutter/material.dart';
import 'package:animated_splash_screen/animated_splash_screen.dart';
void main() async {
  WidgetsFlutterBinding.ensureInitialized(); 
  runApp(
    MainScreen(),
  );
}

class MainScreen extends StatefulWidget {
  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'EcoEthics',
      debugShowCheckedModeBanner: false,
      home: AnimatedSplashScreen(
        splash: CustomImageView(
                svgPath: ImageConstant.imgBag11,
                height: getSize(
                  191,
                ),
                width: getSize(
                  191,
                ),
              ),
        splashIconSize: double.infinity,
        nextScreen: OnbordingOneScreen(),
        splashTransition: SplashTransition.scaleTransition,
        backgroundColor: Colors.white,
        duration: 1800,
      ),
    );
  }
}

