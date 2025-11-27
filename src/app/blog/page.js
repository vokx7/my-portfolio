import Link from "next/link";
import { client } from "@/sanity/client";
import MainContainer from "@/components/common/MainContainer";
import { urlFor } from "@/sanity/imageUrl";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image}`;

const options = { next: { revalidate: 30 } };

const IndexPage = async () => {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <MainContainer>
      <section className="mx-auto min-h-screen py-15 pt-35 lg:p-[3rem] lg:py-[8rem] 2xl:py-[12rem]">
        <div className="flex flex-col items-center justify-center text-main-text-light dark:text-hover font-clash-display  tracking-wider">
          <h6 className="font-medium uppercase">Welcome to</h6>
          <h1 className=" text-6xl lg:text-7xl my-6 font-semibold">my blog</h1>
          <hr className="w-20 text-main-text-light dark:text-hover" />
          <p className="text-center max-w-80 text-main-text-light dark:text-main-text-dark py-10 md:pb-20">
            I share knowledge, experiences, and inspiration from the world of
            front-end development, design, and creating modern websites.
          </p>
        </div>
        <hr className="text-main-text-light dark:text-hover" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li
              className="font-clash-display text-main-text-light dark:text-main-text-dark dark:hover:brightness-85 hover:bg-secondary-light dark:hover:bg-secondary-dark hover:rounded-b-lg"
              key={post._id}
            >
              <Link href={`/blog/${post.slug.current}`}>
                <img
                  width={600}
                  height={800}
                  src={post.image ? urlFor(post.image).width(600).url() : null}
                  alt="Image of the Project"
                  className="object-cover md:h-2/3"
                />
                <p className="my-4 px-4 lg:my-2 xl:my-4 text-xs 2xl:text-base">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <h2 className="text-lg lg:text-base xl:text-xl 2xl:text-3xl mb-4 px-4">
                  {post.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </MainContainer>
  );
};

export default IndexPage;
