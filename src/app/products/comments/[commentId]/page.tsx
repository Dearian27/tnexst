type CommentProps = {
  params: {
    commentId: string,
  }
}

export default function Comment({params}: CommentProps) {
  return (
    <h2>Comment hello {params.commentId}</h2>
  )
}