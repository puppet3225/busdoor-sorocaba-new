const firebaseConfig = {
    apiKey: "AIzaSyAz-ZXv5vBQsZrwC3x81n-ZBFekAGy243g",
    authDomain: "busdoor-22776.firebaseapp.com",
    databaseURL: "https://busdoor-22776-default-rtdb.firebaseio.com",
    projectId: "busdoor-22776",
    storageBucket: "busdoor-22776.appspot.com",
    messagingSenderId: "268207269359",
    appId: "1:268207269359:web:8d058f26e0b6ad5b0c421a",
    measurementId: "G-995KYY3N1V"
  };

  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "pages/home/home.html";
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });