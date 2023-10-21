console.log('loaded js')

let tableBody = document.getElementById('tableBody');
let postContent = document.getElementById('postContent')





// let userId;
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
        update(data)
        console.log(data)

        let stringfiy = JSON.stringify(data);
        localStorage.setItem("DetailsUser", stringfiy);
    }
    )
    .catch((err) =>{ console.error(err)
      // tableBody.innerHTML = '';
      let row =  document.createElement('tr');
      let td = document.createElement('td');
      td.textContent = 'No data fetch';
      td.setAttribute('colspan','5')
      td.style.textAlign = 'center'
      row.appendChild(td);
      tableBody.appendChild(row);

    })
   

    //   POST API CALLING 
// fetch(`https://jsonplaceholder.typicode.com/posts?${userId}`)
//       .then(postResp => postResp.json())
//       .then((postData) => {
//         console.log(postData) 
//         callingPost(postData)
//       }


//       )






function update(data){

    tableBody.innerHTML = '';
    
    console.log(tableBody)

    data.forEach(data => {
    let row =  document.createElement('tr');
    console.log(row)
    let cellID = document.createElement('td');
    row.appendChild(cellID)
    cellID.textContent = data.id
    let cellName = document.createElement('td');
    cellName.setAttribute('id',`username_${data.name}`)
    row.appendChild(cellName)
    cellName.textContent = data.name
    let cellEmail = document.createElement('td');
    row.appendChild(cellEmail)
    cellEmail.setAttribute('id',`useremail_${data.email}`)
    cellEmail.textContent = data.email
    let cellAddress = document.createElement('td');
    row.appendChild(cellAddress)
    cellAddress.textContent = data.address.street
    let cellAction = document.createElement('td');
    row.appendChild(cellAction)
    cellAction.innerHTML = `<i class="react fa-solid fa-eye me-2"></i>`
    cellAction.setAttribute("id", `seePost_${data.id}`);
      
    tableBody.appendChild(row)
    cellAction.addEventListener("click", () => {
        window.location.href = `posts.html?id=${data.id}`;
      });
});
}
// update()

// function callingPost(postData){
// postContent.innerHTML = ''
    

// postData.forEach((data)=>{

//         postContent.innerHTML += `
    
//         <div class="post p-3 my-4">
//         <!-- post-info  -->
//         <div class="postinfo ">
//            <div class="info">
//             <div class="post_img me-1">
//                 <img src="uzair.jpg" alt="">
//             </div>
//             <div class="post_detail">
//                 <span id="username">Uzair Ansari</span>
//                 <span class="userId">@uzairansari14</span>
//             </div>
//            </div>
//            <i class="fa-solid fa-ellipsis"></i>
//         </div>
    
//         <!-- actual post  -->
//         <div class="post_about">
//             <p>${data.body}</p>
    
//             <p>
//                 <div class="date">10:31 AM - 8/2/23</div>
//             </p>
//             <hr>
//             <p>
//                 <b>21.1K</b> Retweets <b>2,232</b> Quote Tweets <b>132K</b> Likes
//             </p>
//             <hr>
//             <p>
//             <i class="fa-regular fa-thumbs-up me-4"></i>
//             <i class="fa-regular fa-comment me-4"></i> 
//             <i class="fa-solid fa-retweet"></i>
//             </p>
//         </div>
    
//     </div>
//         `

//     })
// }
// callingPost()