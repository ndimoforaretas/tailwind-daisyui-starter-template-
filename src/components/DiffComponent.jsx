const DiffComponent = () => {
  return (
    <div className="diff aspect-[16/9]">
      <div className="diff-item-1">
        <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
          DAISY UI 🌼
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 text-9xl font-black grid place-content-center">
          TAILWIND CSS 🎨
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};
export default DiffComponent;
