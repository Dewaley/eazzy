import PlaceholderLoading from "react-placeholder-loading";

const CategorySkeleton = () => {
  return (
    <div className='overflow-hidden flex flex-col'>
      <PlaceholderLoading shape='rect' width={1000} height={50} />
      <PlaceholderLoading shape='rect' width={1000} height={50} />
      <PlaceholderLoading shape='rect' width={1000} height={50} />
    </div>
  );
};

export default CategorySkeleton;
