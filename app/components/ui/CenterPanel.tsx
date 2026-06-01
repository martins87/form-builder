const CenterPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex-1 bg-white rounded-2xl shadow-md px-6 py-4">
      {children}
    </main>
  );
};

export default CenterPanel;
