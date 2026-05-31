interface Props {
  label: string;
  children: React.ReactNode;
}

const PropertyField = ({ label, children }: Props) => {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      {children}
    </div>
  );
};

export default PropertyField;
