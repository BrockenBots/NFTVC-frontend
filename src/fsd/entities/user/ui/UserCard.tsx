import {
  Card,
  CardHeader,
  Avatar,
  Chip,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import React from "react";

export function UserCard() {
  return (
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
  );
}
