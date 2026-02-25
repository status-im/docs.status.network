import React, { useState } from 'react';
import type { Idea, Difficulty } from './types';
import {
  categoryLabels,
  categoryColors,
  statusPrimitiveLabels,
  statusPrimitiveColors,
  builderProfileLabels,
  domainExpertiseLabels,
  userSegmentLabels,
} from './types';

interface IdeaCardProps {
  idea: Idea;
}

const difficultyColor: Record<Difficulty, string> = {
  'Low-Med': 'var(--status-green)',
  Med: 'var(--status-blue)',
  'Med-High': 'var(--status-orange)',
  High: 'var(--status-pink)',
};

export default function IdeaCard({ idea }: IdeaCardProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const detailId = `idea-card-detail-${idea.id}`;

  return (
    <div
      className={`idea-card${expanded ? ' idea-card--expanded' : ''}`}
      onClick={() => setExpanded((v) => !v)}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-controls={detailId}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setExpanded((v) => !v);
        }
      }}
    >
      {/* Header row */}
      <div className="idea-card__header">
        <span
          className="idea-card__category"
          style={{
            color: categoryColors[idea.category],
            background: `color-mix(in srgb, ${categoryColors[idea.category]} 12%, transparent)`,
          }}
        >
          {categoryLabels[idea.category]}
        </span>
      </div>

      {/* Title */}
      <h3 className="idea-card__title">{idea.title}</h3>

      {/* Status Primitives */}
      <div className="idea-card__superpowers">
        {idea.superpowers.map((sp) => (
          <span
            key={sp}
            className="idea-card__superpower"
            style={{
              color: statusPrimitiveColors[sp],
              background: `color-mix(in srgb, ${statusPrimitiveColors[sp]} 10%, transparent)`,
            }}
          >
            {statusPrimitiveLabels[sp]}
          </span>
        ))}
      </div>

      {/* One-line summary */}
      <p className="idea-card__what">{idea.what}</p>

      {/* Badges row */}
      <div className="idea-card__badges">
        <span
          className="idea-card__badge"
          style={{
            color: difficultyColor[idea.difficulty],
            background: `color-mix(in srgb, ${difficultyColor[idea.difficulty]} 10%, transparent)`,
          }}
        >
          {idea.difficulty}
        </span>
      </div>

      {/* Tags row */}
      <div className="idea-card__tags">
        {idea.builderProfiles.map((bp) => (
          <span key={bp} className="idea-card__tag idea-card__tag--builder">
            {builderProfileLabels[bp]}
          </span>
        ))}
        <span className="idea-card__tag">
          {domainExpertiseLabels[idea.domainExpertise]}
        </span>
        <span className="idea-card__tag idea-card__tag--segment">
          {userSegmentLabels[idea.userSegment]}
        </span>
      </div>

      {/* Expand indicator */}
      <span className="idea-card__expand-icon">{expanded ? '\u25B2' : '\u25BC'}</span>

      {/* Expanded detail */}
      {expanded && (
        <div className="idea-card__detail" id={detailId} role="region" aria-label={`${idea.title} details`}>
          <div className="idea-card__detail-section">
            <strong>Why Status:</strong> {idea.whyStatus}
          </div>
          <div className="idea-card__detail-section">
            <strong>MVP Scope:</strong> {idea.mvp}
          </div>
          <div className="idea-card__detail-meta">
            <MetaBadge label="Security" value={idea.securityCriticality} />
            <MetaBadge label="Ops Burden" value={idea.opsBurden} />
          </div>
        </div>
      )}
    </div>
  );
}

function MetaBadge({ label, value }: { label: string; value: string }): JSX.Element {
  return (
    <span className="idea-card__meta-badge">
      <span className="idea-card__meta-label">{label}</span>
      <span className="idea-card__meta-value">{value}</span>
    </span>
  );
}
