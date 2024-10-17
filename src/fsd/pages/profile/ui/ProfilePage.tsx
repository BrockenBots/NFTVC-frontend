"use client";
import React from "react";
import background from "@/public/background/profile.svg";
import { Container } from "shared/ui";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Tab,
  Tabs,
} from "@nextui-org/react";
import Link from "next/link";

export function ProfilePage() {
  const tabs = [
    {
      id: "Новые",
      label: "Новые",
      name: "date",
    },
    {
      id: "А-Я",
      label: "А-Я",
      content: "alphabet",
    },
    {
      id: "Компания",
      label: "Компания",
      content: "company",
    },
    {
      id: "По статусу",
      label: "По статусу",
      content: "status",
    },
  ];
  return (
    <Container background={background} className="flex-row justify-center">
      <div className="w-1/2 max-w-[526px] p-3">
        <Card className="w-full bg-zinc-900  border border-purple-600 mb-6">
          <CardHeader className="justify-between ">
            <div className="flex gap-5">
              <Avatar
                isBordered
                color="default"
                radius="md"
                size="lg"
                src="https://nextui.org/avatars/avatar-1.png"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-white">
                  Zoey Lang
                </h4>
                <Chip color="secondary">@zoeylang</Chip>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
            </p>
          </CardBody>
          <CardFooter className="gap-3 flex place-content-end">
            <Chip variant="flat" color="secondary" className="text-purple-700">
              +42
            </Chip>
          </CardFooter>
        </Card>

        <div>
          <h1 className="text-base font-bold mb-2">Достижения</h1>
          <div className="flex flex-row flex-nowrap mb-2">
            <Tabs
              aria-label="Dynamic tabs"
              onSelectionChange={(key) => console.log(key)}
              items={tabs}
              className="mr-2"
            >
              {(item) => <Tab key={item.id} title={item.label} />}
            </Tabs>
            <Button isIconOnly color="success" className="p-0">
              <div className="rounded-full text-xl flex justify-center items-center text-green-500 bg-zinc-900 w-5 h-5">
                +
              </div>
            </Button>
          </div>

          {/* MAP */}
          <Card className="w-full flex flex-row p-4 bg-zinc-900 mb-4">
            <CardHeader className="w-16 p-0 flex flex-col">
              <Avatar
                isBordered
                radius="md"
                size="lg"
                src="https://nextui.org/avatars/avatar-1.png"
                className="mb-3"
              />

              <Chip
                className="max-w-16 text-purple-700"
                variant="flat"
                color="secondary"
              >
                @zoe
              </Chip>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 relative">
              <h2 className="font-semibold mb-2">Условная компания</h2>
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
              <Chip
                color="success"
                variant="bordered"
                className="absolute right-0 top-0"
              >
                aaa
              </Chip>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="w-full max-w-[1026px] p-3">
        <div className="mb-5">
          <h2 className="text-bold mb-3">Рекомендации</h2>
          <div className="flex gap-4 items-center">
            <Link href="/profile/1">
              <Avatar
                isBordered
                radius="md"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
            </Link>

            <Link href="/profile/2">
              <Avatar
                isBordered
                radius="md"
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              />
            </Link>
            <Link href="/profile/3">
              <Avatar
                isBordered
                radius="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Link>
            <Link href="/profile/4">
              <Avatar
                isBordered
                radius="md"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </Link>
            <Avatar
              onClick={() => alert("шучу")}
              showFallback
              name="+4"
              isBordered
              radius="md"
              className="bg-zinc-700 text-white cursor-pointer"
            ></Avatar>
          </div>
        </div>
        <Card className="p-4 w-full min-h-[255px] text-default flex flex-col justify-center items-center bg-zinc-900">
          <p className="w-full max-w-[300px] text-center">
            Выберите достижения для получения полной информации
          </p>
        </Card>
      </div>
    </Container>
  );
}
