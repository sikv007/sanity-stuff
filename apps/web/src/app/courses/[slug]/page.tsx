export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  console.log(slug);

  return <div></div>;
}
