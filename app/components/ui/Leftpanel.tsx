const LeftPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="w-80 shrink-0 border-r border-r-neutral-200 p-4">
      {children}
    </aside>
  );
};

export default LeftPanel;
