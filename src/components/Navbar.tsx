import { Menu } from "lucide-react";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "./ui/popover";

type Props = {
  isLaptop: boolean;
};

const Navbar = ({ isLaptop }: Props) => {
  return (
    <nav className="flex items-center justify-end md:justify-between p-2 w-full bg-background border-b ">
      <div />

      {isLaptop && (
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuTrigger>Practive</NavigationMenuTrigger>
              <NavigationMenuTrigger>Events</NavigationMenuTrigger>
              <NavigationMenuTrigger>Job Board</NavigationMenuTrigger>
              <NavigationMenuTrigger>Points</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}

      <div className="flex items-center gap-2">
        {isLaptop && (
          <Button variant={"default"} size={"sm"}>
            Profile
          </Button>
        )}

        <ModeToggle />

        {!isLaptop && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size={"icon"}
                variant={"secondary"}
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-fit flex flex-col"
              alignOffset={6}
              align="end"
            >
              {["Tools", "Practice", "Events", "Job Board", "Points"].map(
                (item) => (
                  <Button variant={"ghost"}>{item}</Button>
                )
              )}
            </PopoverContent>
          </Popover>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
