import SiteShell from '../components/SiteShell.jsx';
import { downloads } from '../data/content.js';

export default function DownloadPage() {
  return (
    <SiteShell className="download-page">
      <section className="page-heading">
        <p className="eyebrow">Tải game</p>
        <h1>Phiên bản được ghi nhận</h1>
        <p>Thông tin nền tảng và phiên bản lấy từ trang tải game trong báo cáo khảo sát.</p>
      </section>
      <div className="download-list">
        {downloads.map((download) => (
          <article className="download-card" key={download.platform}>
            <div className="download-card__icon" aria-hidden="true">{download.platform.slice(0, 2).toUpperCase()}</div>
            <div>
              <h2>{download.platform}</h2>
              <p>Phiên bản {download.version}{download.size ? ` · ${download.size}` : ''}</p>
              <time>Cập nhật: {download.updatedAt}</time>
            </div>
            <span className="download-unavailable">Liên kết tải chưa xác minh</span>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
