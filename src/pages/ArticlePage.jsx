import { Link, useSearchParams } from 'react-router-dom';
import SiteShell from '../components/SiteShell.jsx';
import { getArticleById } from '../data/content.js';

export default function ArticlePage() {
  const [searchParams] = useSearchParams();
  const article = getArticleById(searchParams.get('id'));

  if (!article) {
    return (
      <SiteShell>
        <section className="message-panel">
          <h1>Không tìm thấy bài viết</h1>
          <p>Route này không có trong danh mục bài viết đã khảo sát.</p>
          <Link to="/">Quay về trang chủ</Link>
        </section>
      </SiteShell>
    );
  }

  return (
    <SiteShell className="article-page">
      <article className="article-detail">
        <p className="eyebrow">{article.type === 'guide' ? 'Hướng dẫn' : article.type === 'event' ? 'Sự kiện' : 'Tin tức'}</p>
        <h1>{article.title}</h1>
        <time dateTime={article.publishedAt}>{article.publishedAt}</time>
        <div className={`article-detail__art article-art--${article.type}`} aria-hidden="true">
          <span>{article.type === 'guide' ? 'Hướng dẫn trò chơi' : 'Tin cộng đồng'}</span>
        </div>
        <div className="article-body">
          <p>{article.summary}</p>
          <div className="content-notice" role="note">
            <strong>Nội dung chi tiết chưa được đưa vào bản dựng.</strong>
            <p>
              Tài liệu khảo sát hiện chỉ xác nhận tiêu đề, loại bài và ngày đăng. Hãy bổ sung
              nội dung bài viết được chủ sở hữu cho phép để tránh tái sử dụng văn bản chưa được cấp quyền.
            </p>
          </div>
        </div>
        <Link className="text-link" to="/">← Danh sách tin tức</Link>
      </article>
    </SiteShell>
  );
}
