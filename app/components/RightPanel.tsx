const RightPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="w-96 shrink-0 border-l border-l-neutral-200 p-4">
      {children}
    </aside>
  );
};

export default RightPanel;
