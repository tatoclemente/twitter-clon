"use client";

import { useEffect, useRef } from "react";
import { Textarea } from "@nextui-org/react";

//@ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function ComposeTextArea() {
  const { pending } = useFormStatus();
  const alreadySent = useRef(false);
  const textAreaRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textAreaRef.current === null) return;

    if (!pending && alreadySent.current) {
      alreadySent.current = false;
      textAreaRef.current.value = "";
      return;
    }

    alreadySent.current = pending;
  }, [pending]);

  return (
    <input
      autoComplete="off"
      type="text"
      ref={textAreaRef}
      name="content"
      // rows={4}
      className="w-full text-2xl ml-2 pl-2 bg-white placeholder-gray-500"
      //  className="col-span-12 md:col-span-6 mb-6 md:mb-0"
      placeholder="¡¿Qué está pasando?!"
    />
  );
}
