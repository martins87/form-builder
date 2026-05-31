const RightPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="border-l border-l-neutral-200 p-4 w-[25%]">
      {children}
    </aside>
  );
};

export default RightPanel;
