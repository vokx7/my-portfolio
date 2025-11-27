import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { ArrowLeft } from "@/components/animate-ui/icons/arrow-left";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const PostPage = async ({ params }) => {
  const post = await client.fetch(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <article className="prose md:prose-lg 2xl:prose-xl prose-a:text-main-text-light prose-p:text-main-text-light prose-headings:text-main-text-light prose-li:text-main-text-light dark:prose-a:text-main-text-dark dark:prose-p:text-main-text-dark dark:prose-headings:text-main-text-dark dark:prose-li:text-main-text-dark container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 ">
      <AnimateIcon animateOnHover>
        <Link
          href="/blog"
          className="flex flex-row items-center gap-4 font-semibold py-10 pt-20 no-underline"
        >
          <ArrowLeft /> Back to posts
        </Link>
      </AnimateIcon>
      <h1 className="font-clash-display">{post.title}</h1>
      <div className="flex flex-row items-center gap-2 text-main-text-dark font-clash-display">
        <HiOutlineCalendarDays />
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
      </div>

      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-lg"
          width="700"
          height="400"
        />
      )}

      <div className="">
        {Array.isArray(post.body) && (
          <PortableText
            value={post.body}
            components={{
              types: {
                subsection: ({ value }) => (
                  <section className="my-12">
                    <h2 className="font-clash-display">{value.subtitle}</h2>

                    <div className="">
                      <PortableText value={value.content} />
                    </div>
                  </section>
                ),
              },
            }}
          />
        )}
      </div>
    </article>
  );
};

export default PostPage;
