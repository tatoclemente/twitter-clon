"use client";

import { Avatar } from "@nextui-org/react";
import { ComposeTextArea } from "./compose-textarea";
import { addPost } from "./compose-add-post";
import { useRef } from "react";

export function ComposePost({ userAvatarUrl }: { userAvatarUrl: string }) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addPost(formData);
        formRef.current?.reset();
      }}
      className="flex flex-1 flex-col gap-y-4 p-3 border-b border-slate-200"
    >
      <div className="flex flex-row">
        <Avatar
          radius="full"
          size="md"
          src={userAvatarUrl}
          className="w-11 h-10"
        />
        {/* <ComposeTextArea /> */}
        <input
          autoComplete="off"
          type="text"
          name="content"
          // rows={4}
          className="w-full sm:text-1xl lg:text-2xl ml-2 pl-2 bg-white placeholder-gray-500 focus:outline-none focus:border-b-1 focus:pb-6"
          placeholder="¡¿Qué está pasando?!"
        />
      </div>
      <button className="bg-[#1D9CF0] text-white font-bold rounded-full w-24 px5 py-1.5 self-end">
        Postear
      </button>
    </form>
  );
}
