import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Top checkboxes */}
      <div className="flex flex-col gap-y-2">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="1" />
      </div>

      {/* Price filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input
            type="number"
            min={100}
            max={1000}
            value={500}
            placeholder="1000"
          />
        </div>
        <RangeSlider min={0} max={1000} step={10} />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={2}
        defaultItems={[
          { text: "111", value: "1" },
          { text: "123", value: "1" },
          { text: "123", value: "1" },
          { text: "123", value: "1" },
          { text: "123", value: "1" },
        ]}
        items={[
          { text: "111", value: "1" },
          { text: "123", value: "1" },
          { text: "123", value: "1" },
          { text: "123", value: "1" },
          { text: "123", value: "1" },
        ]}
      />
    </div>
  );
};
