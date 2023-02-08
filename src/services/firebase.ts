import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyC6PZWk_LgjbONZGhmkPxHMw_U-XkHx5dk",
	authDomain: "portfolio-224d7.firebaseapp.com",
	databaseURL: "https://portfolio-224d7-default-rtdb.firebaseio.com",
	projectId: "portfolio-224d7",
	storageBucket: "portfolio-224d7.appspot.com",
	messagingSenderId: "953586236490",
	appId: "1:953586236490:web:09e1d6f4d719034a1efab3"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);