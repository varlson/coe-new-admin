"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Form from "./Form";

export default function ExampleClientComponent() {
  const toEdit = useSearchParams().get("toedit") == "true" ? true : false;
  const id = useSearchParams().get("id");
  // const [formPost, setFormPost] = useState<>()
  return (
    <div className="bg-darkMidium ">
      <Form toEdit={toEdit} id={id} />
    </div>
  );
}
