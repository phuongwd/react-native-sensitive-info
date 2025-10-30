import { NativeModules } from 'react-native';

// Use legacy NativeModules bridge directly for compatibility with New Architecture
// TurboModuleRegistry.get() returns an empty module object for legacy modules
const RNSensitiveInfo = NativeModules.RNSensitiveInfo;

export default {
  ...RNSensitiveInfo,
  // setInvalidatedByBiometricEnrollment(
  //   invalidatedByBiometricEnrollment
  // ): Function {
  //   if (RNSensitiveInfo.setInvalidatedByBiometricEnrollment == null) {
  //     return;
  //   }

  //   return RNSensitiveInfo.setInvalidatedByBiometricEnrollment(
  //     invalidatedByBiometricEnrollment
  //   );
  // },
  // cancelFingerprintAuth() {
  //   if (RNSensitiveInfo.cancelFingerprintAuth == null) {
  //     return;
  //   }

  //   return RNSensitiveInfo.cancelFingerprintAuth();
  // },
};
