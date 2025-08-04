import "../frontend/styles.scss";
import "../frontend/scripts/index.js"
// import callApi from "../frontend/scripts/callApi.js";
// import checkName from "../frontend/scripts/checkName.js";

// export {callApi, checkName};

//  if ('serviceWorker' in navigator) {
//    window.addEventListener('load', () => {
//      navigator.serviceWorker.register('/service-worker.js').then(registration => {
//        console.log('SW registered: ', registration);
//      }).catch(registrationError => {
//        console.log('SW registration failed: ', registrationError);
//      });
//    });
//  }


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (const registration of registrations) {
      registration.unregister().then(success => {
        if (success) {
          console.log('✅ Service Worker removido:', registration);
        }
      });
    }
  });
}

