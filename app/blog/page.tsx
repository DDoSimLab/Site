"use client";

import { useState, useMemo } from "react";
import {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
} from "@/components/ui/minimal-card";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { blogPosts } from "@/data/blogs";
import Link from "next/link";
import {
  TEXT_CONTENT,
  ROUTES,
  BLOG,
  ICON_SIZES,
} from "@/lib/constants";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    });
  }, [searchQuery]);

  return (
    <main aria-labelledby="blog-page-title">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Page Heading */}
        <header className="mb-6 pt-24 md:pt-28">
          <h1
            id="blog-page-title"
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            {TEXT_CONTENT.BLOG.PAGE.TITLE}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {TEXT_CONTENT.BLOG.PAGE.DESCRIPTION}
          </p>
        </header>

        {/* Search and Filter Bar */}
        <section className="mb-8" aria-label="Filter blog posts">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full group">
              <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative">
                <MagnifyingGlassIcon
                  className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 z-10"
                  weight="duotone"
                  aria-hidden="true"
                />
                <Input
                  type="search"
                  placeholder={TEXT_CONTENT.BLOG.PAGE.SEARCH_PLACEHOLDER}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label={TEXT_CONTENT.BLOG.PAGE.SEARCH_ARIA_LABEL}
                  className="pl-12 pr-4 h-12 text-base bg-background/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-200 rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts List */}
        <section className="mb-12" aria-label="Blog articles">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {TEXT_CONTENT.BLOG.PAGE.NO_RESULTS}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={ROUTES.BLOG_SLUG(post.slug)}>
                  <MinimalCard className="h-full hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
                    <MinimalCardImage src={post.image} alt={post.title} />
                    <div className="p-4 flex-1 flex flex-col">
                      <MinimalCardTitle className="mb-2">
                        {post.title}
                      </MinimalCardTitle>
                      <MinimalCardDescription className="flex-1">
                        {post.description}
                      </MinimalCardDescription>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags
                          .slice(0, BLOG.MAX_TAGS_DISPLAY)
                          .map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-primary hover:underline">
                        <span>{TEXT_CONTENT.BLOG.PAGE.READ_MORE}</span>
                        <ArrowRightIcon size={ICON_SIZES.SMALL} weight="duotone" />
                      </div>
                    </div>
                  </MinimalCard>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
