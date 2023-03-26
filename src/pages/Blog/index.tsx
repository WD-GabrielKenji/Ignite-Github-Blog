import { useCallback, useEffect, useState } from 'react'

import { api } from '../../lib/axios'
import { Post } from './Components/Post'
import { Profile } from './Components/Profile'
import { SearchForm } from './Components/SearchForm'

import { PostsListContainer } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchForm postsLength={posts.length} getPosts={getPosts} />

      <PostsListContainer>
        {posts.map((post) => (
          <Post key={post.number} post={post} />
        ))}
      </PostsListContainer>
    </>
  )
}
