import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        "sticky top-0 flex justify-between  bg-white py-5 shadow-lg shadow-black/5 z-10"
      )}
    >
      <Container className="flex justify-between w-full overflow-x-scroll no-scrollbar">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
