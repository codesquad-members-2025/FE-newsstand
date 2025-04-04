/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import StackLayout from '@components/common/layout';
import Modal from '@components/common/Modal';
import Header from '@components/Header';
import Media from '@components/Media';
import NewsRolling from '@components/NewsRolling';
import DarkModeToggle from '@components/Theme/DarkModeToggle';
import ThemeProvider from '@components/Theme/ThemeProvider';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetItem, setTargetItem] = useState('연합뉴스');

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <StackLayout spacing={['20px', '40px', '32px']}>
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        <Header />
        <NewsRolling />
        <Media />
      </StackLayout>
      {isModalOpen && (
        <Modal
          mediaName={targetItem}
          isModalOpen={isModalOpen}
          handleClose={handleClose}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
