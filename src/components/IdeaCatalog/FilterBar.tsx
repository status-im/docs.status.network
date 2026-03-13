import React, { useState } from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import type {
  Category,
  StatusPrimitive,
  BuilderProfile,
  Difficulty,
  UserSegment,
  DomainExpertise,
  CapitalReq,
} from './types';
import {
  builderProfileLabels,
  capitalReqLabels,
  categoryLabels,
  difficultyLabels,
  domainExpertiseLabels,
  statusPrimitiveLabels,
  userSegmentLabels,
} from './types';

export interface Filters {
  categories: Category[];
  superpowers: StatusPrimitive[];
  builderProfiles: BuilderProfile[];
  difficulties: Difficulty[];
  userSegments: UserSegment[];
  domainExpertises: DomainExpertise[];
  capitalReqs: CapitalReq[];
}

export const emptyFilters: Filters = {
  categories: [],
  superpowers: [],
  builderProfiles: [],
  difficulties: [],
  userSegments: [],
  domainExpertises: [],
  capitalReqs: [],
};

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  totalCount: number;
  visibleCount: number;
}

export default function FilterBar({
  filters,
  onChange,
  totalCount,
  visibleCount,
}: FilterBarProps): JSX.Element {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const hasAnyFilter = Object.values(filters).some((arr) => arr.length > 0);

  function toggle<K extends keyof Filters>(key: K, value: Filters[K][number]) {
    const current = filters[key] as Filters[K][number][];
    const next: Filters[K][number][] = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange({ ...filters, [key]: next });
  }

  return (
    <div className="idea-catalog-filters">
      {/* Primary filters */}
      <FilterGroup
        label={translate({id: 'ideaCatalog.filter.category', message: 'Category'})}
        options={categoryLabels}
        selected={filters.categories}
        onToggle={(v) => toggle('categories', v)}
      />
      <FilterGroup
        label={translate({id: 'ideaCatalog.filter.statusPrimitives', message: 'Status Primitives'})}
        options={statusPrimitiveLabels}
        selected={filters.superpowers}
        onToggle={(v) => toggle('superpowers', v)}
      />
      <FilterGroup
        label={translate({id: 'ideaCatalog.filter.builderProfile', message: 'Builder Profile'})}
        options={builderProfileLabels}
        selected={filters.builderProfiles}
        onToggle={(v) => toggle('builderProfiles', v)}
      />
      <FilterGroup
        label={translate({id: 'ideaCatalog.filter.difficulty', message: 'Difficulty'})}
        options={difficultyLabels}
        selected={filters.difficulties}
        onToggle={(v) => toggle('difficulties', v)}
      />

      {/* Advanced toggle */}
      <button
        type="button"
        className="idea-catalog-advanced-toggle"
        onClick={() => setShowAdvanced((v) => !v)}
        aria-expanded={showAdvanced}
        aria-controls="idea-catalog-advanced-filters"
      >
        {showAdvanced
          ? translate({id: 'ideaCatalog.filter.fewerFilters', message: 'Fewer filters'})
          : translate({id: 'ideaCatalog.filter.moreFilters', message: 'More filters'})}
      </button>

      {/* Advanced filters */}
      {showAdvanced && (
        <div className="idea-catalog-advanced" id="idea-catalog-advanced-filters">
          <FilterGroup
            label={translate({id: 'ideaCatalog.filter.domainExpertise', message: 'Domain Expertise'})}
            options={domainExpertiseLabels}
            selected={filters.domainExpertises}
            onToggle={(v) => toggle('domainExpertises', v)}
          />
          <FilterGroup
            label={translate({id: 'ideaCatalog.filter.userSegment', message: 'User Segment'})}
            options={userSegmentLabels}
            selected={filters.userSegments}
            onToggle={(v) => toggle('userSegments', v)}
          />
          <FilterGroup
            label={translate({id: 'ideaCatalog.filter.capitalRequirement', message: 'Capital Requirement'})}
            options={capitalReqLabels}
            selected={filters.capitalReqs}
            onToggle={(v) => toggle('capitalReqs', v)}
          />
        </div>
      )}

      {/* Result count + clear */}
      <div className="idea-catalog-status">
        <span>
          <Translate
            id="ideaCatalog.status.showing"
            values={{visibleCount, totalCount}}
          >
            {'Showing {visibleCount} of {totalCount} ideas'}
          </Translate>
        </span>
        {hasAnyFilter && (
          <button
            type="button"
            className="idea-catalog-clear"
            onClick={() => onChange(emptyFilters)}
          >
            <Translate id="ideaCatalog.status.clearAll">Clear all</Translate>
          </button>
        )}
      </div>
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: Record<T, string>;
  selected: T[];
  onToggle: (value: T) => void;
}): JSX.Element {
  return (
    <div className="idea-catalog-filter-group" role="group" aria-label={label}>
      <span className="idea-catalog-filter-label">{label}</span>
      <div className="idea-catalog-chips">
        {(Object.entries(options) as [T, string][]).map(([key, display]) => (
          <button
            key={key}
            type="button"
            className={`idea-catalog-chip${selected.includes(key) ? ' idea-catalog-chip--active' : ''}`}
            aria-pressed={selected.includes(key)}
            onClick={() => onToggle(key)}
          >
            {display}
          </button>
        ))}
      </div>
    </div>
  );
}
