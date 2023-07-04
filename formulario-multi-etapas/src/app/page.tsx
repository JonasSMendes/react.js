'use client'
import {FormProvider} from '../contexts/FormContext'

import FormStep1 from "./FormStep1/page"

export default function Home() {
  return (
  <>
    <FormProvider>
      <FormStep1 />
    </FormProvider>
  </>
  )
}
