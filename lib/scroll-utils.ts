/**
 * Utility functions for smooth scrolling behavior
 */

/**
 * Handles smooth scrolling to anchor links with header offset
 * @param e - Mouse event from anchor click
 * @param href - The href attribute of the anchor element
 * @param headerOffset - Offset in pixels to account for fixed header (default: 140)
 */
export function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  headerOffset = 140
): void {
  if (!href.startsWith("#")) {
    return;
  }

  e.preventDefault();
  const element = document.querySelector(href);

  if (!element) {
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
