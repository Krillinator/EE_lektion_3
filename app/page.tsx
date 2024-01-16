"use client"
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react"

interface Student {
  name: string
  age: number
  isTired: boolean
}

export default function Home() {
  const [student, setStudent] = useState<Student>({
    name: "",
    age: 0,
    isTired: false,
  })

  useEffect(() => {
    console.log(student)
  }, [student])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    console.log(student)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={student.name}
            onChange={(event) => {
              setStudent({ ...student, name: event.target.value })
            }}
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            value={student.age}
            onChange={(event) => {
              setStudent({ ...student, age: event.target.valueAsNumber })
            }}
          />
        </div>

        <div>
          <label htmlFor="isTired">Tired?</label>
          <input
            type="checkbox"
            onChange={(e) =>
              setStudent({ ...student, isTired: e.target.checked })
            }
          />
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}
