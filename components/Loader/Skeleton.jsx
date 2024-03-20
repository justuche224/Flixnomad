const Skeleton = () => {
  const emptyArray = new Array(20).fill(null);
  return (
    <div
      className="w-full"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      }}
    >
      {emptyArray.map((_, i) => (
        <div
          key={i}
          className="my-5 mx-2 rounded-lg p-2 bg-[#090e3b] animate-pulse"
        >
          <div className="h-20 bg-gray-400 rounded mb-2"></div>
          <div className="h-3 bg-gray-400 rounded mb-1"></div>
          <div className="h-3 bg-gray-400 rounded mb-4"></div>
          <div className="flex w-full gap-3">
            <div className="mr-1 min-w-[100px]">
              <div className="h-200 bg-gray-400 rounded m-2"></div>
            </div>
            <div className="pt-2">
              <div className="h-3 bg-gray-400 rounded mb-2"></div>
              <div className="h-3 bg-gray-400 rounded mb-1"></div>
              <div className="h-6 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
