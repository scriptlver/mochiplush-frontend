function CategoryButton({ icon: Icon, title }) {
  return (
    <button className="flex w-[80px] flex-col items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F8B7D7]">
        <Icon size={26} className="text-white" />
      </div>

      <span className="mt-3 text-center text-[10px] font-medium text-white">
        {title}
      </span>
    </button>
  );
}

export default CategoryButton;
