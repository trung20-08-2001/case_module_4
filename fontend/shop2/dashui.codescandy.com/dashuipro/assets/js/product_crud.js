// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1HN8OeYScrl6IWC3rk37FxncDgt3WNE4",
    authDomain: "commerce-website-acf59.firebaseapp.com",
    databaseURL: "https://commerce-website-acf59-default-rtdb.firebaseio.com",
    projectId: "commerce-website-acf59",
    storageBucket: "commerce-website-acf59.appspot.com",
    messagingSenderId: "709514506361",
    appId: "1:709514506361:web:43c53da1978e3cad7764a8",
    measurementId: "G-STT0P32LY3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function upload() {
    const ref = firebase.storage().ref();
    const file = document.getElementById("img").files[0];
    const name = file.name;
    const metadata = {
        contentType: file.type
    }
    const task = ref.child(name).put(file, metadata);
    task.then(snapshot => {
        snapshot.ref.getDownloadURL()
            .then(url => {
                console.log(url)
                // thay đổi img của sản phẩm
                resolve(url);
            }).catch(error => {
            reject(error);
        });
    }).catch(error => {
        reject(error);
    });
}