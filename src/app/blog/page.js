import Link from "next/link";
import { client } from "@/sanity/client";
import MainContainer from "@/components/common/MainContainer";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

const IndexPage = async () => {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <MainContainer>
      <section className="mx-auto min-h-screen py-15 pt-35 lg:p-[3rem] lg:py-[8rem] 2xl:py-[12rem]">
        <div className="">
          <h1 className="font-clash-display font-bold text-6xl lg:text-8xl my-6 text-pink-950 tracking-wide">
            Blog
          </h1>
        </div>
        <ul className="flex flex-col gap-y-4">
          {posts.map((post) => (
            <li className="hover:underline" key={post._id}>
              <Link href={`/blog/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </MainContainer>
  );
};

export default IndexPage;
