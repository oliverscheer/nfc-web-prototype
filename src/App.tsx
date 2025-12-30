import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ImpressumPage } from './pages/ImpressumPage';

function App() {
  // Use basename only in production (GitHub Pages)
  const basename = import.meta.env.MODE === 'production' ? '/nfc-web-prototype' : '/';

  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
