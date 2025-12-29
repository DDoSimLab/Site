import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";
import { getRecentBlogs } from "@/data/blogs";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import {
  TEXT_CONTENT,
  BLOG,
  ROUTES,
  ICON_SIZES,
} from "@/lib/constants";

export function BlogsSection() {
  const recentBlogs = getRecentBlogs(BLOG.RECENT_POSTS_COUNT);

  return (
    <section className="blogs-section py-16">
      <div className="blogs-container container mx-auto px-8 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Articles
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our latest cybersecurity insights and guides
          </p>
        </div>
        <div className="blogs-grid grid md:grid-cols-3 gap-6 z-20 mb-8">
          {recentBlogs.map((blog) => (
            <Link key={blog.id} href={ROUTES.BLOG_SLUG(blog.slug)}>
              <MinimalCard className="h-full hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
                <MinimalCardImage src={blog.image} alt={blog.title} />
                <div className="p-4 flex-1 flex flex-col">
                  <MinimalCardTitle className="mb-2">
                    {blog.title}
                  </MinimalCardTitle>
                  <MinimalCardDescription className="flex-1">
                    {blog.description}
                  </MinimalCardDescription>
                  <div className="mt-4 flex items-center gap-2 text-primary hover:underline">
                    {TEXT_CONTENT.BLOG.PAGE.READ_MORE}
                    <ArrowRightIcon size={ICON_SIZES.SMALL} weight="duotone" />
                  </div>
                </div>
              </MinimalCard>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href={ROUTES.BLOG}
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            {TEXT_CONTENT.BLOG.PAGE.VIEW_ALL}
            <ArrowRightIcon size={ICON_SIZES.SMALL} weight="duotone" />
          </Link>
        </div>
      </div>
    </section>
  );
}
