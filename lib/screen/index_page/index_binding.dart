import 'package:get/instance_manager.dart';
import 'package:pierosoria/screen/index_page/index_controller.dart';

class IndexBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(
      () => IndexController(),
    );
  }
}
