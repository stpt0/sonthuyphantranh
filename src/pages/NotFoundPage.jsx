import { Link } from 'react-router-dom';
import SiteShell from '../components/SiteShell.jsx';

export default function NotFoundPage() {
  return (
    <SiteShell>
      <section className="message-panel">
        <p className="eyebrow">404</p>
        <h1>Trang chưa có trong danh mục khảo sát</h1>
        <p>Không có bằng chứng để dựng route này. Nội dung chưa được suy đoán.</p>
        <Link to="/">Về trang chủ</Link>
      </section>
    </SiteShell>
  );
}
