const utils = {
    getDeviceOperatingSystem: () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
        console.log('USER AGENT ---->',userAgent);

          if (/android/i.test(userAgent)) {
              return 'android';
          }

          if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
              return 'ios';
          }
      
          return '';
      } 
}

export default utils;