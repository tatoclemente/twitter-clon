import { PostCard } from "./post-card"

export function PostList({posts}) {
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