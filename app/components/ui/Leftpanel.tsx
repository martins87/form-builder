const LeftPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="w-80 shrink-0 flex flex-col bg-white rounded-2xl shadow-md p-4 gap-y-3">
      {children}
    </aside>
  );
};

export default LeftPanel;
