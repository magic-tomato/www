import { isMobile, isIOS, isAndroid, isDesktop } from 'react-device-detect';

// Function to handle device-specific behavior
function handleDeviceDetection() {
  const appStoreButtons = document.querySelector('.app-store-buttons');
  if (!appStoreButtons) return;

  if (isMobile) {
    if (isIOS) {
      // Show only App Store button for iOS
      const androidButton = appStoreButtons.querySelector('a[href*="play.google.com"]');
      if (androidButton) androidButton.style.display = 'none';
    } else if (isAndroid) {
      // Show only Play Store button for Android
      const iosButton = appStoreButtons.querySelector('a[href*="apps.apple.com"]');
      if (iosButton) iosButton.style.display = 'none';
    }
  }
  // On desktop, show both buttons
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', handleDeviceDetection); 
