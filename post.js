let postContent = document.getElementById('postContent')

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
console.log(userId);

let prevData = localStorage.getItem("DetailsUser");
let userArr = prevData?JSON.parse(prevData):[];
// let username = 
let index = Number(userId)-1;
console.log(typeof(index) , index)
console.log(userArr[index].name)

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(postResp => postResp.json())
      .then((postData) => {
        console.log(postData) 
        callingPost(postData)

        let stringfiy = JSON.stringify(postData);
        localStorage.setItem("postDetail", stringfiy);
      }


      )

      let imgArr=  ['img1.jpg' ,'img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg','img10.jpg']
function callingPost(postData){
        postContent.innerHTML = ''
            
        
        postData.forEach((data)=>{

// actual post 
               // Create the main post container
const postContainer = document.createElement('div');
postContainer.classList.add('post', 'p-3', 'my-4');

// Create the post-info container
const postInfo = document.createElement('div');
postInfo.classList.add('postinfo');

// Create the info container
const infoContainer = document.createElement('div');
infoContainer.classList.add('info');

// Create the post image container
const postImageContainer = document.createElement('div');
postImageContainer.classList.add('post_img', 'me-1');

// Create the image element
const imgElement = document.createElement('img');
imgElement.src = `${imgArr[index]}`;
imgElement.alt = 'no img';

// Append the image to the post image container
postImageContainer.appendChild(imgElement);

// Create the post detail container
const postDetailContainer = document.createElement('div');
postDetailContainer.classList.add('post_detail');

// Create and set the username element
const usernameElement = document.createElement('span');
usernameElement.id = 'username';
usernameElement.textContent = `${userArr[index].name}`;

// Create and set the userId element
const userIdElement = document.createElement('span');
userIdElement.classList.add('userId');
userIdElement.textContent = `${userArr[index].email}`;

// Append username and userId elements to the post detail container
postDetailContainer.appendChild(usernameElement);
postDetailContainer.appendChild(userIdElement);

// Create the ellipsis icon
const ellipsisIcon = document.createElement('i');
ellipsisIcon.classList.add('fa-solid', 'fa-ellipsis');

// Create the actual post container
const postAbout = document.createElement('div');
postAbout.classList.add('post_about');

// Create and set the post body element
const postBody = document.createElement('p');
postBody.textContent = `${data.body}`;

// Create and set the date element
const dateElement = document.createElement('div');
dateElement.classList.add('date');
dateElement.textContent = '10:31 AM - 8/2/23';

// Create and set the retweet, quote, and likes section
const retweetQuoteLikesSection = document.createElement('p');
retweetQuoteLikesSection.innerHTML = '<b>21.1K</b> Retweets <b>2,232</b> Quote Tweets <b>132K</b> Likes';

// Create and set the like button and count
const likeButton = document.createElement('i');
likeButton.classList.add('react', 'fa-regular', 'fa-thumbs-up', 'me-1');
likeButton.id = 'likedButton';
const likeCount = document.createElement('span');
likeCount.classList.add('me-4');
likeCount.id = 'like';
likeCount.textContent = '132.6K';

// Create and set the comment button
const commentButton = document.createElement('i');
commentButton.classList.add('react', 'fa-regular', 'fa-comment', 'me-4');

commentButton.addEventListener("click", () => {
    window.location.href = `comment.html?id=${data.id}`;
  });

// Create and set the retweet button and count
const retweetButton = document.createElement('i');
retweetButton.classList.add('react', 'fa-solid', 'fa-retweet','me-1');
const retweetCount = document.createElement('span');
retweetCount.id = 'like';
retweetCount.textContent = '21.1K';

// Append the elements to their respective containers
postAbout.appendChild(postBody);
postAbout.appendChild(dateElement);
postAbout.appendChild(document.createElement('hr'));
postAbout.appendChild(retweetQuoteLikesSection);
postAbout.appendChild(document.createElement('hr'));
postAbout.appendChild(likeButton);
postAbout.appendChild(likeCount);
postAbout.appendChild(commentButton);
postAbout.appendChild(retweetButton);
postAbout.appendChild(retweetCount);

infoContainer.appendChild(postImageContainer);
infoContainer.appendChild(postDetailContainer);
postInfo.appendChild(infoContainer);
postInfo.appendChild(ellipsisIcon);

postContainer.appendChild(postInfo);
postContainer.appendChild(postAbout);

// Append the post container to the desired location in your DOM
const postContent = document.getElementById('postContent');
postContent.appendChild(postContainer);

            });
            
         
       
        }



        // fetch('https://jsonplaceholder.typicode.com/comments?postId=1'){
        //     return rsp => rsp.json();
        // // .then()

        const com = document.getElementById('comment');
        // const comChk = document.getElementById('commentCheck');


//         commentUpdate('as')
//         function commentUpdate(dataCom){
//             comChk.innerHTML = ''
//             dataCom.forEach((data)=>{

//                 comHtml = `
//                 <div class="commentBlock p-2" id="commentBlock">
//                             <ul class="commentSection">
//                                 <li class="comment">
//                                     <div class="commentinfo">
//                                         <div class="comment_info me-2">
//                                             <img src="img10.jpg" alt="">
//                                         </div>
//                                         <div class="commentDetail">
//                                             <span id="userComment" style="font-weight: 600;">Uzair Ansari</span>
//                                         </div>
//                                     </div>
//                                     <div class="actualComment">
//                                         <p id="commentPara">updaye</p>
//                                     </div>

//                                 </li>
//                             </ul>
//                     </div>
//                 `
// comChk.innerHTML+=comHtml;
//             });
//         }
        // console.log(commentBlock);
        // console.log(commentBlock.style.display)  
        function comment(data){

window.location.href =  `comments.html?id=${data.id}`;     
            console.log(data)
            
        }



