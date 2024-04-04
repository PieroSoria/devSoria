import 'package:get/instance_manager.dart';
import 'package:pierosoria/screen/splash_page/splash_controller.dart';

class SplashBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(
      () => SplashController(),
    );
  }
}
