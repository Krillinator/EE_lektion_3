export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <p>ID is: {params.id}</p>
    </main>
  )
}
