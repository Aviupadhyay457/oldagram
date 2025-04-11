const posts = [
    {
      name: "Pele",
      username: "Pele1283",
      location: "Santos, Brazil",
      avatar: "images/avatar-pele.jpeg",
      post: "images/post-pele.jpg",
      comment: "Scored 3 in the backyard today-another goal for the tally!",
      likes: 767
  },
  {
      name: "Albert Camus",
      username: "Camus46",
      location: "Paris, France",
      avatar: "images/avatar-camus.jpg",
      post: "images/post-camus.jpg",
      comment: "What if we embraced the absurd condition of human existence while also defiantly continuing to explore and search for meaning...haha just kidding...unless?",
      likes: 124
  },
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 5
  },
  {
      name: "Salvador Dali ",
      username: "Salvador85",
      location: "Catalonia, Spain",
      avatar: "images/avatar-dali.webp",
      post: "images/post-dali.jpg",
      comment: "Dali!!!",
      likes: 111
  }
]


// for rendering the posts 

let mainId=document.getElementById("main-id")
value=''

for (let i=0;i<posts.length;i++){
  
  value+=`<section>
          <div class="postmaker">
              <img src="${posts[i].avatar}" class="postmaker-avatar">
              <div class="postmaker-info">
                  <h1>${posts[i].name}</h1>
                  <p>${posts[i].location}</p>
              </div>
          </div>
          <img src="${posts[i].post}" class="post-img" id="picid${i}">
          
          <img src="images/icon-heart.png" class="heart-icon" id="heart${i}">
          <img src="images/icon-comment.png" class="comment-icon">
          <img src="images/icon-dm.png" class="dm-icon">
          <h2 class="likes"><span id="likes-id${i}">${posts[i].likes}</span> likes</h2>
          <p class="username"><span id="bold-username">${posts[i].username}</span> ${posts[i].comment}</p>
          </section>`
  
}
mainId.innerHTML+=value


// for like button


let heart=document.getElementById("heart")
// let x=0


let picidval=''
let likesidval=''
let heartidval=''
let arrayPic=[]
let arrayLikes=[]
let arrayHeart=[]
let arrayx=[]
let a=0
for (let i=0;i<posts.length;i++){
      
  picidval="picid"+i
  console.log(picidval) 
  likesidval="likes-id"+i
  console.log(likesidval)
  heartidval="heart"+i
  console.log(heartidval)
     

arrayPic[i]=document.getElementById(picidval)
arrayLikes[i]=document.getElementById(likesidval)
arrayHeart[i]=document.getElementById(heartidval)
arrayx[i]=0
  
arrayPic[i].addEventListener("dblclick",function(){
  a=likesChange(arrayHeart[i], arrayLikes[i],arrayx[i])  
  arrayx[i]=a
})
arrayHeart[i].addEventListener("click",function(){
  a=likesChange(arrayHeart[i], arrayLikes[i],arrayx[i])
  arrayx[i]=a
  
})
}

// what i did above was to make the like feature dynamic,the above for loop will create eventlistener for each post in posts array of objects. Then below is a function to update these likes, x varible is used to change the state of like button.In arrayx i have stored the like button state for every post. a var is used to update arrayx value. 


function likesChange(vangoghHeart, userLikes,x){
if (x===0){
userLikes.textContent=Number(userLikes.textContent)+1
vangoghHeart.src="images/heart.png"
x=1
return x
}

else if(x===1){
userLikes.textContent=Number(userLikes.textContent)-1
vangoghHeart.src="images/icon-heart.png"
x=0
return x
}

}