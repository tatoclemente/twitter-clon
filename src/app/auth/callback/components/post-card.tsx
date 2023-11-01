'use client'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react";
import { useState } from "react";
export function PostCard({
    userFullName,
    userName,
    userAvatar,
    content
}: {
    userFullName: string;
    userName: string;
    userAvatar: string;
    content: string;
}) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-100 transition border-b rounded-none cursor-pointer border-black/20">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar radius="full" size="md" src={userAvatar} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-black">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
            <IconMessageCircle className='w-4 h-4' />
        </button>
        <button>
            <IconHeart className='w-4 h-4' />
        </button>
        <button>
            <IconRepeat className='w-4 h-4' />
        </button>
      </CardFooter>
    </Card>
  );
}
