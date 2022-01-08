// const firebaseConfig = {
//     apiKey: "AIzaSyBY_lcTGGyIVN9mrUx3yvai4qNwFPJhhVE",
//     authDomain: "students-portal-ff359.firebaseapp.com",
//     projectId: "students-portal-ff359",
//     storageBucket: "students-portal-ff359.appspot.com",
//     messagingSenderId: "19753944959",
//     appId: "1:19753944959:web:89edf55aa941e6d971bc4a"
//   };
  console.log(process.env);
  const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };
export default firebaseConfig;