"use client";
import {TextField, Button, Callout} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import {useForm, Controller} from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import {useRouter} from "next/navigation";
import {useState} from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();

  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root className="mb-5" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occured.");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({field}) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
