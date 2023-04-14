export const DeleteIcon = ({ color, width, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ModeDeleteIcon"
      width={width}
      color={color}
      {...props}>
      <path
        fill="currentcolor"
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
    </svg>
  );
};
