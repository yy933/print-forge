export default async function PostDetail({ params }) {
  const { id } = await params; // params is a Promise, so we await it
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return <h1>{post.title}</h1>;
}
