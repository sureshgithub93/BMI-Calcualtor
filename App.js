import './App.css';
import React, { useState } from "react";

function App() {
  // State variables
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Calculate BMI function
  const calculateBmi = (event) => {
    event.preventDefault();
    
    // Convert weight and height to numbers
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    if (weightNum === 0 || heightNum === 0 ) {
      alert('Please enter valid weight and height');
    } else {
      // Calculate BMI
      const bmiValue = (weightNum / (heightNum * heightNum)) * 703;
      setBmi(bmiValue.toFixed(1));

      // Determine BMI message
      if (bmiValue < 25) {
        setMessage('You are underweight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  // Reload page function
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="number" placeholder="Enter weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input type="number" placeholder="Enter height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reloadPage} type="button">Reload</button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
