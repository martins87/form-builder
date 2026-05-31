const LeftPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="border-r border-r-neutral-200 p-4 w-[25%]">
      {children}
    </aside>
  );
};

export default LeftPanel;
