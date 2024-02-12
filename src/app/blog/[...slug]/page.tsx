"use client"
import { notFound, useRouter } from 'next/navigation';
import React from 'react'
type SeriesProps = {
  params: {
    slug: string,
  }
}

const FirstBlog = ({params}: SeriesProps) => {
  const router = useRouter();
  
  if(params.slug.length !== 3) return <h1>404 Error</h1>
  console.log(params)
  const [seriesId, season, episode] = params.slug;

  if(season == '3' && Number(episode) > 11) {
    notFound();
  }

  const turnPage = (i: number) => {
    router.push(`/blog/${seriesId}/${season}/${Number(episode)+i}`)
  }

  return (
    <div>
    <h1>Series</h1>
    <iframe src={`https://vidsrc.me/embed/tv?imdb=${params.slug[0]}&season=${params.slug[1]}&episode=${params.slug[2]}`} style={{width: "100%", height: "80vh"}} frameBorder="0" referrerPolicy="origin" allowFullScreen>
    </iframe>
    <button onClick={() => turnPage(-1)}>Previous</button>
    <button onClick={() => turnPage(1)}>Next</button>
    </div>
  )
}

export default FirstBlog