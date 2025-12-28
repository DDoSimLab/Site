"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { MermaidDiagram } from "./MermaidDiagram";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-foreground/90 prose-p:leading-relaxed prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-strong:font-semibold prose-code:text-foreground prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-3" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold mt-10 mb-5 text-foreground" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-6 leading-8 text-foreground/90 text-base" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-8 mb-6 space-y-3 marker:text-primary" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-8 mb-6 space-y-3 marker:text-primary marker:font-semibold" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="leading-8 text-foreground/90 pl-2" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-primary pl-6 italic my-8 py-2 bg-primary/5 dark:bg-primary/10 rounded-r text-foreground/80"
              {...props}
            />
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            
            if (!inline && language === "mermaid") {
              const codeString = String(children).replace(/\n$/, "");
              return <MermaidDiagram chart={codeString} />;
            }

            return inline ? (
              <code
                className="px-2 py-1 bg-muted rounded text-sm font-mono text-foreground border border-border"
                {...props}
              >
                {children}
              </code>
            ) : (
              <pre className="mb-6 overflow-x-auto rounded-lg border border-border bg-muted/50 p-5">
                <code
                  className="block text-sm font-mono text-foreground whitespace-pre"
                  {...props}
                >
                  {children}
                </code>
              </pre>
            );
          },
          pre: ({ node, ...props }) => (
            <pre className="mb-6 overflow-x-auto rounded-lg" {...props} />
          ),
          a: ({ node, href, children, ...props }: any) => (
            <a
              href={href}
              className="text-primary font-medium no-underline hover:underline transition-colors duration-200 inline-flex items-center gap-1.5 group"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              <span>{children}</span>
              <svg
                className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-foreground" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-foreground/90" {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-10 border-t border-border" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}


