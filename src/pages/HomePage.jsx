import ArticleCard from '../components/ArticleCard.jsx';
import RankingsPanel from '../components/RankingsPanel.jsx';
import SiteShell from '../components/SiteShell.jsx';
import { articles } from '../data/content.js';

export default function HomePage() {
  return (
    <SiteShell className="home-page">
      <section className="home-intro">
        <p className="home-kicker">Cổng thông tin cộng đồng</p>
        <h1>Tin tức &amp; sự kiện</h1>
      </section>
      <div className="home-columns">
        <section className="article-list" aria-label="Danh sách tin tức, sự kiện và hướng dẫn">
          {articles.map((article) => <ArticleCard article={article} key={article.id} />)}
        </section>
        <RankingsPanel />
      </div>
    </SiteShell>
  );
}
