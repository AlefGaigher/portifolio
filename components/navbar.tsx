'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { useRef } from "react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/" passHref>
            <span className="flex justify-start items-center gap-1">
              <Logo />
              <p className="font-bold text-inherit">Alef Gaigher</p>
            </span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <ul className="hidden lg:flex gap-11 justify-end ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <span
              onClick={() => scrollToSection(item.id)}
              className={clsx(
                linkStyles({ color: "foreground" }),
                "cursor-pointer data-[active=true]:text-primary data-[active=true]:font-medium hover:underline underline-offset-8"
              )}
            >
              {item.label}
            </span>
          </NavbarItem>
        ))}
      </ul>

      {/* Navbar Menu Mobile */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menu Mobile */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link color={"foreground"} href="#" size="lg" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
