const CenterPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex-1 bg-white rounded-2xl shadow-md p-6">
      {children}
    </main>
  );
};

export default CenterPanel;
