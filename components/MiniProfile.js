export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px] "
        src="https://avatars.githubusercontent.com/u/33378626?v=4"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Korayözdemir</h2>
        <h3 className="text-sm text-gray-400">Welcome To Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}
