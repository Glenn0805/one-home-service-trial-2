import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig, menu } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import RegisterDropDown from "./register-dropdown";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" isBlurred={false}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link href={"/"}>
            <img
              src="/one-home-service-trial-2/logo.svg"
              height={120}
              width={120}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu.map((item) => {
          if (item.sub_menu) {
            return (
              <Dropdown key={item.path}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      endContent={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      }
                      disableRipple
                      className={clsx(
                        "p-0 bg-transparent data-[hover=true]:bg-transparent text-[#324154] font-semibold "
                      )}
                      // endContent={icons.chevron}
                      radius="sm"
                      variant="light"
                    >
                      {item.title}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  variant="faded"
                  aria-label="Dropdown for sub menu"
                  className="max-h-64 overflow-y-auto rounded-lg shadow-lg border bg-[#F3ECE6]"
                  itemClasses={{
                    base: "gap-4 bg-[#F3ECE6]",
                    description: "text-sm",
                    title: "font-semibold",
                  }}
                >
                  {item.sub_menu.map((sub) => {
                    return (
                      <DropdownItem
                        className={clsx(
                          "text-[#324154] text-base hover:bg-[#EAE7E2] p-2 rounded-md"
                        )}
                        href={sub.path}
                        key={sub.title}
                        description={sub.desc}
                      >
                        {sub.title}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            );
          }

          return (
            <NavbarItem key={item.path}>
              <Link
                href={item.path}
                aria-current="false"
                className={clsx(" font-semibold text-base text-[#324154]")}
              >
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <RegisterDropDown />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal bg-default-100 rounded-full border-[#3A82F6] text-[#3A82F6]"
            href={"#"}
            variant="bordered"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
