import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Loader from './components/Loader'; // Import your Loader component
import Parties from './components/parties';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay of 5 seconds (replace this with your actual initialization logic)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Set loading to false once the delay is complete
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Section />
          <Parties/>
        </>
      )}
    </div>
  );
}

export default App;
