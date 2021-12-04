export default function Story({username}) {
    return (
        <div>
            <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" src="http://gravatar.com/avatar/efa18c12bdd87eaaf65a8ee31743bf89?s=400&r=G&d=http://www.ozroder.org.tr/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg" alt="beyaz adam" />
            <p className="text-xs w-14 truncate text-center">{username}</p> 
        </div>
    )
}
