import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import './app.css';

const firebaseConfig = {
  apiKey: "AIzaSyCxKppeXqrIRWbbcdQVQfVOD4Y2-PSjg8c",
  authDomain: "firstproject-77311.firebaseapp.com",
  projectId: "firstproject-77311",
  storageBucket: "firstproject-77311.firebasestorage.app",
  messagingSenderId: "954143752769",
  appId: "1:954143752769:web:aba44322dc88c80400bcc0",
  measurementId: "G-3Y5KEE6P2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log("Fetching employee data...");
      const employeeCollection = collection(db, "employee");
      const snapshot = await getDocs(employeeCollection);
      
      snapshot.forEach((doc) => {
        console.log("Document ID:", doc.id);
        console.log("Document Data:", doc.data());
      });
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <button 
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get Data'}
      </button>
      
      { error && (<p > Error: {error} </p>) }
    </div>
  );
}

export default App;