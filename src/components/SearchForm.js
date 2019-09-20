import React, { useState, useEffect } from "react";
import {witFormik, Form, Field} from "formik";

export default function SearchForm() {
  
  const [query, setQuery] = useState({})



  return (
    <section className="search-form">
      <Form>
        <Field type="text" className="filed" name="query" placeholder="Search by Name" />

      </Form>

      {/* {query.filter(find => (

      ))} */}

    </section>
  );
}
