import { PostCard } from "./post-card"
import { type Post } from '@/app/types/posts'

export function PostList({posts}: {posts: Post[]}) {
    return (
        <div>
             {
        posts?.map(post => {
          const {
            id,
            users,
            content 
           } = post

           const {
            user_name: userName,
            name: userFullName,
            avatar_url: userAvatar,
          } = users

         return (
          <PostCard 
          key={id}
          userFullName={userFullName}
          userName={userName}
          userAvatar={userAvatar}
          content={content}
          />
         )
        })  
      }
        </div>
    )
}