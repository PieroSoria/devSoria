import 'package:get/get.dart';
import 'package:pierosoria/screen/index_page/index_binding.dart';
import 'package:pierosoria/screen/index_page/index_screen.dart';
import 'package:pierosoria/screen/login_page/login_binding.dart';
import 'package:pierosoria/screen/login_page/login_screen.dart';
import 'package:pierosoria/screen/splash_page/splash_binding.dart';
import 'package:pierosoria/screen/splash_page/splash_screen.dart';

abstract class Routes {
  static const splash = '/';
  static const login = '/login';
  static const index = '/index';
}

class AppRoutes {
  static final approutes = [
    GetPage(
      name: Routes.splash,
      page: () => const SplashScreen(),
      bindings: [
        SplashBinding(),
      ],
    ),
    GetPage(
      name: Routes.index,
      page: () => const IndexScreen(),
      bindings: [
        IndexBinding(),
      ],
    ),
    GetPage(
      name: Routes.login,
      page: () => const LoginScreen(),
      bindings: [
        LoginBinding(),
      ],
    ),
  ];
}
