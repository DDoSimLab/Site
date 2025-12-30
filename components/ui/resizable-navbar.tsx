"use client";
import {
  ICON_SIZES,
  SIMULATOR_URLS,
  SITE_URLS,
  TEXT_CONTENT,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CaretDoubleRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";

import React, { useRef, useState } from "react";
import { GithubButton } from "./github-button";
import Link from "next/link";
import { Button } from "./button";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  stars: number;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
  stars: number;
}

interface MobileNavMenuProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const handleClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  item: { name: string; link: string },
  onItemClick?: () => void
) => {
  if (item.link.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(item.link);
    if (element) {
      const headerOffset = 140; // Account for fixed header height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
  if (onItemClick) {
    onItemClick();
  }
};

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("fixed inset-x-0 z-40 w-full ", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(25px)" : "none",
        boxShadow: visible
          ? "rgba(0, 0, 0, 0.1) 0px 0px 20px, rgba(0, 0, 0, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.07) 0px 0px 0px 4px, rgba(34, 42, 53, 0.08) 0px 0px 0px, rgba(47, 48, 55, 0.05) 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px inset"
          : "none",
        borderBottom: visible ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
        width: visible ? "85%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-60 mx-auto gap-6 hidden w-full flex-row h-16 items-center justify-between self-start bg-background px-6 py-2 lg:flex dark:bg-transparent",
        visible &&
          "bg-white dark:bg-neutral-950/80 border-none rounded-(--radius)",
        !visible && "border-b border-neutral-200 dark:border-neutral-800",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
  stars,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-end space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={(e) => handleClick(e, item)}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-(--radius) bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
      <GithubButton
        variant={"outline"}
        separator={true}
        roundStars={true}
        targetStars={stars}
        repoUrl={SITE_URLS.GITHUB_REPO}
      />
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(50px)" : "none",
        boxShadow: visible
          ? "rgba(0, 0, 0, 0.1) 0px 0px 20px, rgba(0, 0, 0, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.07) 0px 0px 0px 4px, rgba(34, 42, 53, 0.08) 0px 0px 0px, rgba(47, 48, 55, 0.05) 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px inset"
          : "none",
        borderBottom: visible ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
        width: visible ? "85%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between px-4 bg-background py-2 lg:hidden",
        !visible && "border-b border-neutral-200 dark:border-neutral-800",
        visible && "rounded-(--radius)",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
  stars,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-2",
        className
      )}
    >
      {children}
      <GithubButton
        variant={"outline"}
        separator={true}
        roundStars={true}
        targetStars={stars}
        repoUrl={SITE_URLS.GITHUB_REPO}
        className="ml-auto"
      />
    </div>
  );
};

export const MobileNavMenu = ({
  className,
  isOpen,
  onClose,
  items,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-md bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className
          )}
        >
          {items.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => {
                handleClick(e, item);
                onClose();
              }}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <Link
            href={SIMULATOR_URLS.PRIMARY}
            aria-label={TEXT_CONTENT.HERO.ARIA_LABEL}
          >
            <NavbarButton
              onClick={() => onClose()}
              variant="primary"
              className="flex gap-2 items-center"
            >
              <span>{TEXT_CONTENT.BUTTONS.SIMULATOR}</span>
              <CaretDoubleRightIcon weight="duotone" size={ICON_SIZES.MEDIUM} />
            </NavbarButton>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <Button
      variant="outline"
      size="icon"
      className="h-8 w-8 order-2"
      onClick={onClick}
    >
      <XIcon className="text-black dark:text-white" />
    </Button>
  ) : (
    <Button
      variant="outline"
      size="icon"
      className="h-8 w-8 order-2"
      onClick={onClick}
    >
      <ListIcon className="text-black dark:text-white" />
    </Button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 px-2 pl-0 py-1 text-sm font-normal text-black"
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={32}
        height={32}
        className="rounded border"
      />
      <span className="font-medium text-black dark:text-white">DDoSim</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
