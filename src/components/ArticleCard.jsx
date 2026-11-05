import { Link } from 'react-router-dom';

const typeLabels = {
  event: 'Sự kiện',
  news: 'Tin tức',
  announcement: 'Thông báo',
  guide: 'Hướng dẫn',
};

export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <div className={`article-art article-art--${article.type}`} aria-hidden="true">
        <span>{article.type === 'guide' ? 'HƯỚNG DẪN' : typeLabels[article.type]}</span>
      </div>
      <div className="article-card__copy">
        <p className="eyebrow">{typeLabels[article.type]}</p>
        <h2><Link to={`/news.php?id=${article.id}`}>{article.title}</Link></h2>
        <p>{article.summary}</p>
        <time dateTime={article.publishedAt}>{article.publishedAt}</time>
      </div>
    </article>
  );
}
