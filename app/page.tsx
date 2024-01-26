import Form from "./components/Form/form-components/react-hook-form";
import { FormComZod } from "./components/Form/form-components/zod-react-hook-form";
import Header from "./components/Header/page";

export default function Home() {
  return (
    <div>
      <Form />
      <FormComZod />
    </div>
  );
}
