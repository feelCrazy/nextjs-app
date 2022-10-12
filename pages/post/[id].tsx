import React from "react"
import { useRouter } from "next/router"
import { GetStaticProps, NextPage } from "next"

import posts from "../api/post.json"
type Props = {
  post: {
    title: string
    content: string
  }
}

const Index: NextPage<Props> = (props) => {
  const router = useRouter()

  console.log(router.query.id)
  console.log(">>>props", props)

  return (
    <div>
      index
      <p className='text-5xl text-blue-600'>{props.post.title}</p>
      <p className='text-4xl text-sky-500'>{props.post.content}</p>
    </div>
  )
}

Index.getInitialProps = ({ query }) => {
  const id = query.id as "test" | "second"
  const post = posts[id]
  return {
    post,
  }
}

export default Index
