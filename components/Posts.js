import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "korayozdemir",
    userImg: "https://avatars.githubusercontent.com/u/33378626?v=4",
    img: "https://avatars.githubusercontent.com/u/33378626?v=4",
    caption: "hello world",
  },
  {
    id: "1234",
    username: "korayozdemir",
    userImg: "https://avatars.githubusercontent.com/u/33378626?v=4",
    img: "https://avatars.githubusercontent.com/u/33378626?v=4",
    caption:
      "hello world hello world hello world hello world hello world hello world",
  },
];

export default function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
