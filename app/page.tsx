"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [value, setValue] = useState("0");

  const handleClick = (val: string) => {
    if (value === "0") {
      setValue(val);
    } else {
      setValue(value + val);
    }
  };

  const clear = () => setValue("0");

  const calculate = () => {
    try {
      // Evaluate expression safely
      // eslint-disable-next-line no-eval
      const result = eval(value);
      setValue(result.toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-80 p-4 bg-gray-800 text-white shadow-xl">
        <CardContent className="space-y-4">
          <div className="text-right text-3xl font-mono bg-black/30 p-4 rounded-lg">
            {value}
          </div>

          <div className="grid grid-cols-4 gap-3 text-xl">
            <Button onClick={clear} className="col-span-2 bg-red-600">
              C
            </Button>
            <Button onClick={() => handleClick("/")}>/</Button>
            <Button onClick={() => handleClick("*")}>×</Button>

            {["7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "="].map(
              (item) =>
                item === "=" ? (
                  <Button
                    key={item}
                    onClick={calculate}
                    className="row-span-2 bg-green-600"
                  >
                    =
                  </Button>
                ) : (
                  <Button key={item} onClick={() => handleClick(item)}>
                    {item}
                  </Button>
                ),
            )}

            <Button onClick={() => handleClick("0")} className="col-span-2">
              0
            </Button>
            <Button onClick={() => handleClick(".")}>.</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
