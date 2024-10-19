import { Card } from "@nextui-org/react";
import React from "react";

export function EmptyAchievementCard() {
  return (
    <Card className="p-4 w-full min-h-[255px] text-default flex flex-col justify-center items-center bg-zinc-900">
      <p className="w-full max-w-[300px] text-center">
        Выберите достижения для получения полной информации
      </p>
    </Card>
  );
}
