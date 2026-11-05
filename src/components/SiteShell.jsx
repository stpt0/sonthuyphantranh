import { Link } from 'react-router-dom';
import { navigation } from '../data/content.js';

export function HealthNotice() {
  return (
    <div className="health-notice">
      <span aria-hidden="true">!</span>
      <p>Chơi quá 180 phút một ngày có thể ảnh hưởng xấu đến sức khỏe.</p>
    </div>
  );
}

export function SiteHeader() {
  return (
    <>
      <HealthNotice />
      <header className="site-header">
        <Link className="brand-scene" to="/" aria-label="Sơn Thủy Phân Tranh - Trang chủ">
          <span className="brand-sun" />
          <span className="brand-island brand-island--left" />
          <span className="brand-island brand-island--right" />
          <span className="brand-water" />
          <span className="brand-name">Sơn Thủy<small>PHÂN TRANH</small></span>
        </Link>
        <nav className="main-navigation" aria-label="Điều hướng chính">
          {navigation.map((item) => {
            const content = <span>{item.label}</span>;
            if (item.unavailable) {
              return <span aria-disabled="true" className="nav-unavailable" key={item.label} title="Liên kết chưa xác minh">{content}</span>;
            }
            return item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <Link key={item.label} to={item.href}>
                {content}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Website tái dựng độc lập — nội dung và tài nguyên gốc chỉ được bổ sung khi có quyền sử dụng.</p>
      <p>Trang công khai được thiết kế theo các đường dẫn đã khảo sát.</p>
      <p className="footer-links">Sơn Thủy Phân Tranh · Tin tức · Hướng dẫn · Diễn đàn</p>
    </footer>
  );
}

export function BackToTop() {
  return (
    <button
      className="back-to-top"
      type="button"
      aria-label="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onFocus={(event) => event.currentTarget.classList.add('is-visible')}
      onBlur={(event) => event.currentTarget.classList.remove('is-visible')}
    >
      ↑
    </button>
  );
}

export default function SiteShell({ children, className = '' }) {
  return (
    <div className={`site-shell ${className}`}>
      <SiteHeader />
      <main className="page-content">{children}</main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
