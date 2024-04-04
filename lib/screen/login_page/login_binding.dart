import 'package:get/instance_manager.dart';
import 'package:pierosoria/screen/login_page/login_controller.dart';

class LoginBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(
      () => LoginController(),
    );
  }
}
