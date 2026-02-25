import React, { useState, useMemo } from 'react';
import { ideas } from './ideaData';
import type { Idea } from './types';
import FilterBar, { emptyFilters, type Filters } from './FilterBar';
import IdeaCard from './IdeaCard';

function matchesFilters(idea: Idea, filters: Filters): boolean {
  // AND across dimensions, OR within a dimension
  if (filters.categories.length > 0 && !filters.categories.includes(idea.category)) return false;
  if (
    filters.superpowers.length > 0 &&
    !filters.superpowers.some((sp) => idea.superpowers.includes(sp))
  )
    return false;
  if (
    filters.builderProfiles.length > 0 &&
    !filters.builderProfiles.some((bp) => idea.builderProfiles.includes(bp))
  )
    return false;
  if (filters.difficulties.length > 0 && !filters.difficulties.includes(idea.difficulty))
    return false;
  if (filters.userSegments.length > 0 && !filters.userSegments.includes(idea.userSegment))
    return false;
  if (
    filters.domainExpertises.length > 0 &&
    !filters.domainExpertises.includes(idea.domainExpertise)
  )
    return false;
  if (filters.capitalReqs.length > 0 && !filters.capitalReqs.includes(idea.capitalRequirement))
    return false;
  return true;
}

export default function IdeaCatalog(): JSX.Element {
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  const filtered = useMemo(() => ideas.filter((idea) => matchesFilters(idea, filters)), [filters]);

  return (
    <div className="idea-catalog">
      <FilterBar
        filters={filters}
        onChange={setFilters}
        totalCount={ideas.length}
        visibleCount={filtered.length}
      />
      <div className="idea-catalog-grid">
        {filtered.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="idea-catalog-empty">
          No ideas match the current filters.{' '}
          <button
            type="button"
            className="idea-catalog-clear"
            onClick={() => setFilters(emptyFilters)}
          >
            Clear all filters
          </button>
        </p>
      )}
    </div>
  );
}
