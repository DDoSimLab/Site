"use client";

import { useState } from "react";
import {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
} from "@/components/ui/minimal-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  MagnifyingGlassIcon,
  XIcon,
  ArrowRightIcon,
  ArrowsDownUpIcon,
} from "@phosphor-icons/react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const blogPosts = [
  {
    id: 1,
    title: "Understanding DDoS Attacks: A Comprehensive Guide",
    description:
      "Learn about the different types of DDoS attacks, how they work, and what you can do to protect your systems from these threats.",
    image: "/basic-img.png",
  },
  {
    id: 2,
    title: "Best Practices for Network Security",
    description:
      "Explore essential network security practices that every organization should implement to safeguard against cyber threats and attacks.",
    image: "/basic-img.png",
  },
  {
    id: 3,
    title: "The Evolution of Cybersecurity Threats",
    description:
      "A deep dive into how cybersecurity threats have evolved over the years and what the future holds for digital security.",
    image: "/basic-img.png",
  },
  {
    id: 4,
    title: "How to Simulate DDoS Attacks Safely",
    description:
      "Discover how to use simulation tools to test your network's resilience against DDoS attacks in a controlled environment.",
    image: "/basic-img.png",
  },
  {
    id: 5,
    title: "Cybersecurity Education: Why It Matters",
    description:
      "Understanding the importance of cybersecurity education and how it can help build a more secure digital future for everyone.",
    image: "/basic-img.png",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handleRemoveFilter = (filter: string) => {
    setAppliedFilters(appliedFilters.filter((f) => f !== filter));
  };

  const handleAddFilter = (filter: string) => {
    if (!appliedFilters.includes(filter)) {
      setAppliedFilters([...appliedFilters, filter]);
    }
  };

  return (
    <main>
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Search and Filter Bar */}
        <section className="mb-8 pt-24 md:pt-28">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative">
                <MagnifyingGlassIcon
                  className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 z-10"
                  weight="duotone"
                />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-12 text-base bg-background/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-200 rounded-xl"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            {/* <div className="flex gap-2 flex-wrap">
              <Button
                variant="outline"
                onClick={() => handleAddFilter("Sort")}
                className="flex items-center gap-2"
              >
                <ArrowsDownUpIcon size={16} weight="duotone" />
                Sort
              </Button>
              <Button variant="outline" onClick={() => handleAddFilter("Type")}>
                Type
              </Button>
              <Button
                variant="outline"
                onClick={() => handleAddFilter("Length")}
              >
                Length
              </Button>
            </div> */}
          </div>

          {/* Applied Filters/Tags */}
          {/* {appliedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {appliedFilters.map((filter) => (
                <Button
                  key={filter}
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemoveFilter(filter)}
                  className="flex items-center gap-2"
                >
                  {filter}
                  <XIcon size={14} weight="duotone" />
                </Button>
              ))}
            </div>
          )} */}
        </section>

        {/* Blog Posts List */}
        <section className="mb-12">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <MinimalCard key={post.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 p-4">
                  {/* Image */}
                  <div className="md:w-64 md:shrink-0">
                    <MinimalCardImage
                      src={post.image}
                      alt={post.title}
                      className="h-48 md:h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <MinimalCardTitle className="mb-2">
                        {post.title}
                      </MinimalCardTitle>
                      <MinimalCardDescription className="line-clamp-3">
                        {post.description}
                      </MinimalCardDescription>
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:underline mt-4 self-start"
                    >
                      Read more
                      <ArrowRightIcon size={16} weight="duotone" />
                    </a>
                  </div>
                </div>
              </MinimalCard>
            ))}
          </div>
        </section>

        {/* Pagination */}
        {/* <section>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(1);
                  }}
                >
                  1
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 2}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(2);
                  }}
                >
                  2
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 3}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(3);
                  }}
                >
                  3
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === totalPages}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(totalPages);
                  }}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      setCurrentPage(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section> */}
      </div>
    </main>
  );
}
