import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { BlogPost } from "@/data/blogs";
import { blogPosts, getBlogBySlug } from "@/data/blogs";
import {
  ArrowLeftIcon,
  ClockIcon,
  CalendarIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import { BlogContent } from "@/components/blog/BlogContent";
import {
  SITE_METADATA,
  SITE_URLS,
  ROUTES,
  TEXT_CONTENT,
  IMAGE_DIMENSIONS,
  BLOG,
  ICON_SIZES,
} from "@/lib/constants";

type BlogPostRouteParams = {
  slug: string;
};

interface BlogPostPageProps {
  params: BlogPostRouteParams;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: SITE_METADATA.TITLE.NOT_FOUND,
    };
  }

  return {
    title: `${post.title} ${SITE_METADATA.TITLE.BLOG_POST_TEMPLATE.replace(
      "%s",
      ""
    ).trim()}`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: IMAGE_DIMENSIONS.OG_IMAGE.WIDTH,
          height: IMAGE_DIMENSIONS.OG_IMAGE.HEIGHT,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: SITE_METADATA.TWITTER.CARD,
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    keywords: post.tags,
    alternates: {
      canonical: ROUTES.BLOG_SLUG(post.slug),
    },
  };
}

function buildBlogPostJsonLd(post: BlogPost) {
  return {
    "@context": SITE_URLS.SCHEMA_ORG,
    "@type": BLOG.SCHEMA_TYPE,
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: BLOG.PUBLISHER_NAME,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: `clamp(${IMAGE_DIMENSIONS.BLOG_HERO.MOBILE_HEIGHT}px, 50vh, ${IMAGE_DIMENSIONS.BLOG_HERO.DESKTOP_HEIGHT}px)`,
        }}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <Link
              href={ROUTES.BLOG}
              className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
            >
              <ArrowLeftIcon size={ICON_SIZES.SMALL} weight="duotone" />
              {TEXT_CONTENT.BLOG.POST.BACK_TO_BLOG}
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarIcon size={ICON_SIZES.SMALL} weight="duotone" />
                <time dateTime={post.publishedAt}>{publishedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon size={ICON_SIZES.SMALL} weight="duotone" />
                {post.readTime} {TEXT_CONTENT.BLOG.POST.MIN_READ}
              </div>
              <div>
                {TEXT_CONTENT.BLOG.POST.BY}{" "}
                <span className="font-medium text-foreground">
                  {post.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 max-w-4xl py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Markdown Content */}
        <BlogContent content={post.content} />

        {/* Back to Blog Link */}
        <div className="mt-12 pt-8 border-t">
          <Link
            href={ROUTES.BLOG}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeftIcon size={ICON_SIZES.SMALL} weight="duotone" />
            {TEXT_CONTENT.BLOG.POST.BACK_TO_ALL}
          </Link>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBlogPostJsonLd(post)),
        }}
      />
    </article>
  );
}
