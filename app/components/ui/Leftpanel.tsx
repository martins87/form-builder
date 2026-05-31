const LeftPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="w-80 shrink-0 flex flex-col border-r border-r-neutral-200 p-4 gap-y-3">
      {children}
    </aside>
  );
};

export default LeftPanel;
