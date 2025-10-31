import { NativeModules } from 'react-native';

// Use legacy NativeModules bridge directly for compatibility with New Architecture
// TurboModuleRegistry.get() returns an empty module object for legacy modules
var RNSensitiveInfo = NativeModules.RNSensitiveInfo;
if (!RNSensitiveInfo) {
    console.error('[RNSensitiveInfo] Native module not found!');
    console.error('[RNSensitiveInfo] Available modules:', Object.keys(NativeModules));
    throw new Error('RNSensitiveInfo: Native module is not available. Make sure the app is built correctly and the native module is linked.');
}

export { RNSensitiveInfo as default };
//# sourceMappingURL=index.es.js.map
