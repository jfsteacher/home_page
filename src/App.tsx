import React from 'react';
import Header from './components/Header';
import BubbleContainer from './components/BubbleContainer';
import Background from './components/Background';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Background />
      <Header />
      <main className="flex-grow pt-48">
        <BubbleContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;