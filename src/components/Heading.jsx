const Heading = ({
  title = 'Default Title',
  subtitle = 'Default Subtitle',
}) => {
  return (
    <div id="heading" className="text-center mb-8">
      <h1 className="text-3xl font-bold">{title?.toUpperCase()}</h1>
      <h3 className="text-lg text-gray-600">{subtitle}</h3>
    </div>
  );
};

export default Heading;
