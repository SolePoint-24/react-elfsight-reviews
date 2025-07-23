import React from 'react';
import { useElfsightScript } from '../hooks/useElfsightScript';

interface Props {
  id: string; // Elfsight app ID class
  className?: string;
}

export const GoogleReviews: React.FC<Props> = ({ id, className }) => {
  useElfsightScript();

  return (
    <div
      className={[id, className].filter(Boolean).join(' ')}
      data-elfsight-app-lazy="first-activity"
    />
  );
};