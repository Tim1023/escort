import Form from "./Page"
import React from "react";
import {FormContextProvider} from "./reducer";

const Page = () => {
  return (
    <FormContextProvider>
      <Form/>
    </FormContextProvider>
  )
}

export default Page;
