"use client";

import { Avatar } from "@nextui-org/react";
import { addPost } from "./compose-add-post";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export function ComposePost({ userAvatarUrl }: { userAvatarUrl: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);


   useEffect(() => {
    if (state.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
   }, [state])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setState(value);
  }
  

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        // if (formRef.current?.nodeValue === '') return
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
          onChange={handleChange}
          // rows={4}
          className="w-full sm:text-1xl lg:text-2xl ml-2 pl-2 bg-white placeholder-gray-500 focus:outline-none focus:border-b-1 focus:pb-6"
          placeholder="¡¿Qué está pasando?!"
        />
      </div>
      <button onClick={(event) => {
         event.stopPropagation()
         event.preventDefault()
        setDisabled(true);
        formRef.current?.requestSubmit();
      }} disabled={disabled} className="bg-[#1D9CF0] text-white font-bold rounded-full w-24 px5 py-1.5 self-end disabled:opacity-50">
        Postear
      </button>
    </form>
  );
}
