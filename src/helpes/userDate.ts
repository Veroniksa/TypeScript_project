export function getUserData() {
    /*   //const user:object = {}
      localStorage.user = JSON.stringify({userName: "Wade Warren"})
      localStorage.user = JSON.stringify({avatarUrl: "/img/avatar.png"})
    
      let user = JSON.parse(localStorage.user)
      console.log(user, user.userName, user.avatarUrl) */
    const user = {}
    const userName = localStorage.setItem("userName", "Wade Warren")
    user[0] = localStorage.getItem("userName") as unknown
    const userNameLocal = user[0] as string
    let avatarUrl = localStorage.setItem("avatarUrl", "/img/avatar.png")
    user[1] = localStorage.getItem("avatarUrl") as unknown
    const userLinkLocal = user[1] as string
    console.log(user)

}

export function getFavoriteAmount() {
    const favoriteAmountLocal = localStorage.setItem("favoriteAmount", "5")
    const favoriteAmount = localStorage.getItem("favoriteAmount") as unknown
    favoriteAmount as number
    console.log(favoriteAmount)
}