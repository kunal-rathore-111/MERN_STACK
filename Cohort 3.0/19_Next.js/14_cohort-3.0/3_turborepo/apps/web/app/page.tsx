
"use client"

import TextInput from "@repo/ui/input-text";
import formAction from "./form-server";
import { useActionState } from "react";


export default function () {

  const [state, action, pending] = useActionState(formAction, null);

  return <div style={{
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    gap: 4
  }}>
    <form style={{ display: "flex", gap: 14 }} action={action}>
      <TextInput placeHolder="data please" />
      <button style={{ padding: 4 }} type="submit" disabled={pending}>Press to Join</button>
      {state?.success ? null : <p>{state?.message}</p>}
    </form >
  </div>
}

