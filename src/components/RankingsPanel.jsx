import { useState } from 'react';
import { rankingTypes } from '../data/content.js';

export default function RankingsPanel() {
  const [selected, setSelected] = useState(rankingTypes[0].id);
  const activeRanking = rankingTypes.find((ranking) => ranking.id === selected);

  return (
    <aside className="rankings-panel" aria-label="Bảng xếp hạng">
      <h2>Bảng xếp hạng</h2>
      <div className="ranking-tabs" role="group" aria-label="Chọn bảng xếp hạng">
        {rankingTypes.map((ranking) => (
          <button
            aria-pressed={selected === ranking.id}
            className={selected === ranking.id ? 'is-selected' : ''}
            key={ranking.id}
            onClick={() => setSelected(ranking.id)}
            type="button"
          >
            {ranking.label}
          </button>
        ))}
      </div>
      <p className="ranking-empty" aria-live="polite">
        {activeRanking.label}: chưa có dữ liệu xếp hạng công khai được xác minh.
      </p>
    </aside>
  );
}
