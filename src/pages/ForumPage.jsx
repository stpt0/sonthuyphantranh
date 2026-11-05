import { Link } from 'react-router-dom';
import SiteShell from '../components/SiteShell.jsx';
import { forumTopics } from '../data/content.js';

export default function ForumPage({ page = '0' }) {
  const pageNumber = /^\d+$/.test(page) ? Number(page) : 0;

  return (
    <SiteShell className="forum-page">
      <section className="forum-actions" aria-label="Tác vụ diễn đàn">
        <strong>Diễn đàn cộng đồng</strong>
        <div>
          <button type="button" disabled title="Chưa có backend tài khoản được ủy quyền">Đăng nhập</button>
          <button type="button" disabled title="Chưa có backend tài khoản được ủy quyền">Đăng ký</button>
          <button type="button" disabled title="Chưa có backend tài khoản được ủy quyền">Quên mật khẩu</button>
        </div>
      </section>
      <section className="forum-content">
        <div className="forum-title-row">
          <div>
            <p className="eyebrow">Cộng đồng</p>
            <h1>Chủ đề gần đây</h1>
          </div>
          <span>Trang {pageNumber + 1}</span>
        </div>
        <p className="forum-readonly">
          Danh sách công khai chỉ đọc. Tên chủ đề được ghi nhận trong khảo sát; chi tiết chủ đề và thao tác thành viên chưa được xác minh.
        </p>
        <ul className="topic-list">
          {forumTopics.map((topic, index) => (
            <li className="topic-row" key={topic.title}>
              <span className="topic-avatar" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="topic-copy">
                <strong>{topic.title}</strong>
                <small>Chủ đề công khai · {topic.age}</small>
              </span>
            </li>
          ))}
        </ul>
        <nav className="pagination" aria-label="Phân trang diễn đàn">
          {[0, 1].map((number) => (
            <Link
              aria-current={pageNumber === number ? 'page' : undefined}
              className={pageNumber === number ? 'is-current' : ''}
              key={number}
              to={`/forum/app/forum-${number}.html`}
            >
              {number + 1}
            </Link>
          ))}
          <span aria-label="Các trang khác chưa khảo sát">…</span>
        </nav>
      </section>
    </SiteShell>
  );
}
