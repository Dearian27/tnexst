type SlugProps = {
  params: {
    slug: string,
  }
}

function Slug({ params }: SlugProps) {
  console.log(params);
  if(params.slug?.length === 2) {
    return <h2>Viewing for feature {params.slug[0]} and concept {params.slug[1]}</h2>
  }
  if(params.slug?.length === 1) {
    return <h2>Viewing for feature {params.slug[0]}</h2>
  }
  return (
    <div>Docs page</div>
  )
}

export default Slug;