export type ProgressProps = {
  size?: 'sm' | 'md';
};

export const Progress = ({ size = 'md' }: ProgressProps) => {
  const progressSize = size === 'md' ? 8 : 6;

  return (
    <div
      className={`w inline-block h-${progressSize} w-${progressSize} animate-spin rounded-full border-[3px] border-current border-t-transparent text-blueSky-300`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
