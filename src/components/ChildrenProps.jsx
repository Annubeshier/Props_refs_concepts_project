const Card = ({ children, color = "blue", title }) => {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  };

  return (
    <div
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}
    >
      {title && (
        <h2 className="text-xl font-bold mb-3 text-gray-800">{title}</h2>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

const Container = ({ children, layout = "vertical" }) => {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-wrap flex-row gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };

  return <div className={`${layoutClasses[layout]}`}>{children}</div>;
};

const ChildrenProps = () => {
  return (
    <section className="p-8 rounded-xl bg-white shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Children Props</h2>
      <p className="text-gray-600 mb-6">
        The{" "}
        <code className="bg-gray-100 py-1 px-2 rounded text-sm">children</code>{" "}
        prop allows you to pas JSX elements or components as children to other
        components , enabling component composition.
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Card component with children:{" "}
          </h3>
          <Container layout="grid">
            <Card title="User Profile" color="blue">
              <p className="mb-2">
                <strong>Name: </strong>Sam
              </p>
              <p className="mb-2">
                <strong>Email: </strong>Sam@gmail.com
              </p>
              <p className="mb-2">
                <strong>Role: </strong>Developer
              </p>
            </Card>
            <Card title="Statistics" color="green">
              <p className="mb-2">
                <strong>Total Users: </strong>1234
              </p>
              <p className="mb-2">
                <strong>Active Sessions: </strong>567
              </p>
              <p className="mb-2">
                <strong>Revenue: </strong>$89000
              </p>
            </Card>
            <Card title="Quick Actions" color="purple">
              <button className="bg-purple-500 text-white rounded my-2 p-2 flex items-center justify-center w-full">
                Create New
              </button>
              <button className="bg-gray-600 text-white rounded my-2 p-2 flex items-center justify-center w-full">
                View All
              </button>
            </Card>
            <Card title="Warning" color="red">
              <p className="mb-2">
                Your trial period ends in 5 days. Please upgrade your account to
                continue using all features.
              </p>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default ChildrenProps;
