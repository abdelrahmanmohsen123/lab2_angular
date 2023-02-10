export interface Post{
      id : number,
      title: string,
      content: string,
      image: string,
      createdAt: string,
      likes: number,
      creator:  {
        id: number,
        name: string,
        followers: number,
        isOnline: boolean,
        isFollowing: boolean
      }

}


