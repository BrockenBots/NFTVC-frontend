"use client";
// import { profilesApi } from "shared/api";
import background from "@/public/background/profile.svg";
import { Card, Image, Input } from "@nextui-org/react";
import { useState } from "react";
import { Container } from "shared/ui";

export function ChangeProfilePage() {
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  // // get my profile
  // const getProfile = async () => {

  //   const { data: profile } = await profilesApi.api.profilesMeList()
  //   console.log(profile)
  // }
  // "account_id": {
  //     "type": "string"
  // },
  // "description": {
  //     "type": "string"
  // },
  // "email": {
  //     "type": "string"
  // },
  // "login": {
  //     "type": "string"
  // },
  // "name": {
  //     "type": "string"
  // },
  // "photo": {
  //     "type": "string"
  // },
  // "profile_id": {
  //     "type": "string"
  // }
  return (
    <Container background={background} className="flex-row justify-center">
      <Card className="w-full bg-zinc-900">
        <div className="w-1/2 max-w-[526px] p-3">
          add onchange image
          <Image
            alt="you"
            src="https://app.requestly.io/delay/1000/https://nextui.org/images/fruit-4.jpeg"
            fallbackSrc="https://via.placeholder.com/300x200"
            width={300}
            height={200}
            draggable={false}
          />
        </div>
        <div className="w-1/2 max-w-[526px] p-3">
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input value={login} onChange={(e) => setLogin(e.target.value)} />
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </Card>
    </Container>
  );
}
