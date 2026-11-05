import { Route, Routes } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage.jsx';
import DownloadPage from './pages/DownloadPage.jsx';
import ForumPage from './pages/ForumPage.jsx';
import HomePage from './pages/HomePage.jsx';
import InfoPage from './pages/InfoPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/trang-chu.html" element={<HomePage />} />
      <Route path="/news.php" element={<ArticlePage />} />
      <Route path="/gioi-thieu.html" element={<InfoPage />} />
      <Route path="/tai-game.html" element={<DownloadPage />} />
      <Route path="/forum/app/forum-0.html" element={<ForumPage page="0" />} />
      <Route path="/forum/app/forum-1.html" element={<ForumPage page="1" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
