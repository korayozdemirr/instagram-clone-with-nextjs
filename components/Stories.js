import React, { useEffect, useState } from "react";
import faker from "faker"
import Story from "./Story";
export default function Stories() {
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,

        }));
        setSuggestions(suggestions)
    }, [])

    return (
        <div className="flex space-x-2 mt-8 p-6 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {suggestions.map(profile => (
                <Story key={profile.id} username={profile.username} />
            ))}
        </div>
    )
}