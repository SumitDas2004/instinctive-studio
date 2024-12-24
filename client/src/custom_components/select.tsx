import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";

export default function SelectionList({ placeHolder, options, setValue }) {
  return (
    <Select onValueChange={(value) => setValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent className="max-h-64">
        {options.map((option) => (
          <SelectItem key={option.id} value={option.id}>
            <span className="flex gap-2 items-center">
              {/* Rendering picture if it is provided */}
              {option.picture && (
                <span className="h-5 w-5 inline-block overflow-hidden rounded-sm">
                  <img className="object-fill" src={option.picture} />
                </span>
              )}
              {/* The name of the option */}
              <span>{option.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
