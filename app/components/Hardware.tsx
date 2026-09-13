type HardwareProps = {
  className?: string;
};

export function PegPin({ className = "" }: HardwareProps) {
  return <span className={`peg-pin ${className}`} aria-hidden="true" />;
}

export function PaperClip({ className = "" }: HardwareProps) {
  return <span className={`paper-clip ${className}`} aria-hidden="true" />;
}

export function BoardHook({ className = "" }: HardwareProps) {
  return (
    <span className={`board-hook ${className}`} aria-hidden="true">
      <span className="board-hook__mount-anchor" data-headphone-mount-anchor="true" />
    </span>
  );
}
