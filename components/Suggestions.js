import { useEffect, useState } from "react";
import faker from "faker";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => {
        return (
          <div
            key={profile.id}
            className="flex items-center justify-between mt-3"
          >
            <img
              className="w-10 h-10 rounded-full border p-[2px]"
              src="http://gravatar.com/avatar/efa18c12bdd87eaaf65a8ee31743bf89?s=400&r=G&d=http://www.ozroder.org.tr/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"
              alt="pic"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm ">{profile.username}</h2>
              <h3 className="text-xs text-gray-400">
                Works at {profile.company.name}
              </h3>
            </div>
            <button className="font-semibold text-sm text-blue-400">
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
}
