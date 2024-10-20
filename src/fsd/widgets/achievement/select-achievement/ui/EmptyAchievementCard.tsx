import {
  deployNFT,
  getNfts,
  mintNFT,
} from "@/fsd/entities/achievements/model/deployContract";
import { Button, Card } from "@nextui-org/react";
import React from "react";

export function EmptyAchievementCard() {
  return (
    <Card className="p-4 w-full min-h-[255px] text-default flex flex-col justify-center items-center bg-zinc-900">
      <p className="w-full max-w-[300px] text-center">
        Выберите достижения для получения полной информации
      </p>
      <Button onPress={deployNFT}>Выпустить нфт</Button>
      <Button onPress={mintNFT}>Выпустить нфт еще</Button>

      <Button onPress={getNfts}>Получить сертификаты</Button>
    </Card>
  );
}
