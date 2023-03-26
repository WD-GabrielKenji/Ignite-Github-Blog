import { Post } from './Components/Post'
import { Profile } from './Components/Profile'
import { SearchForm } from './Components/SearchForm'

import { PostsListContainer } from './styles'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchForm />

      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </>
  )
}
