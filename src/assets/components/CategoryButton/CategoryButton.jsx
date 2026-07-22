function CategoryButton({ icon: Icon, title }) {
  return (
    <button className="flex flex-col items-center gap-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDEDED]/40">
        <Icon size={24} className="text-white" strokeWidth={2.3} />
      </div>

      <span className="text-[11px] font-medium text-white">{title}</span>
    </button>
  );
}

export default CategoryButton;
