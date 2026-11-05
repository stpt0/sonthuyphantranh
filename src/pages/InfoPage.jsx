import SiteShell from '../components/SiteShell.jsx';
import { gameClasses } from '../data/content.js';

export default function InfoPage() {
  return (
    <SiteShell className="info-page">
      <section className="page-heading">
        <p className="eyebrow">Giới thiệu</p>
        <h1>Nhân vật</h1>
        <p>Thông tin dưới đây tóm tắt các đặc điểm được ghi nhận trong báo cáo khảo sát.</p>
      </section>
      <div className="class-grid">
        {gameClasses.map((gameClass, index) => (
          <article className="class-card" key={gameClass.name}>
            <span className="class-card__number">0{index + 1}</span>
            <h2>{gameClass.name}</h2>
            <p>{gameClass.description}</p>
          </article>
        ))}
      </div>
      <p className="content-note">
        Hình minh họa nhân vật không được sao chép do chưa xác minh quyền sử dụng tài sản nguồn.
      </p>
    </SiteShell>
  );
}
