let commentGet = document.getElementById('commentGet');
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");
console.log(postId);

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(postResp => postResp.json())
      .then((comData) => {
        console.log(comData) 
comment(comData)
      }

      )



      // let prevpostData = localStorage.getItem("postDetail");
      // let postArr = prevpostData?JSON.parse(prevpostData):[];
      
      // console.log(postArr)
  
      // // post id = 11; 11-10 =10
  
      // let ind = Number(postId);
      // // let an = ind; //31
      // console.log("Index Post: " +ind)
      // let newData =  postArr.find((data=>{
      //   if(data.id == ind){
      //     return data;
      //   }
      // }));
      // console.log(newData.id)
  
      // let index = newData.id - ind;
    
     
      // // let ind= Number(postId);
      // console.log(index);
      // console.log(typeof(index))
      // let postChk = postArr[index].body;
      // console.log(postChk);
      
      // // userArr 
      // let prevuserData = localStorage.getItem("DetailsUser");
      // let userArr = prevuserData?JSON.parse(prevuserData):[];
      // console.log(userArr)
  


function comment(data){
  let postComment = document.getElementById('postComment');
    postComment.innerHTML = ''
data.forEach(data => {
  let postComment = document.createElement('div')
  let username = document.createElement('span');
  let useremail = document.createElement('p');
  useremail.style.textAlign = 'center'
  useremail.textContent = "email: "+data.email;
  useremail.style.fontWeight = 'normal';


  username.style.fontWeight = 600
  username.style.textAlign = 'center'
  username.textContent = data.name;
  postComment.classList.add('postComment');


  let actPost = document.createElement('div')
  actPost.classList.add('comments_post' , 'p-3');

  username.appendChild(useremail)
  actPost.appendChild(username)

  let para = document.createElement('p')
 
 para.textContent = data.body
 actPost.appendChild(para);
 postComment.appendChild(actPost)
 commentGet.append(postComment);
});

   



}