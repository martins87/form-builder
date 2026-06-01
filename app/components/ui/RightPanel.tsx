const RightPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="w-96 shrink-0 bg-white rounded-2xl shadow-md p-4">
      {children}
    </aside>
  );
};

export default RightPanel;
