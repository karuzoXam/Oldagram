const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        id: 1
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        id: 2
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        id: 3
    }
]

const createPost = function (name, location, profilePic, postPic, id, comment, likes, username) {
    return markup = `
    <main class="post container" id="post-${id}">
		<section class="user-container-section">
			<div class="container">
				<div class="user-info-container">
					<img class="post-user-profile-picture" src="${profilePic}" alt="Profile Picture of ${name}">
					<div class="user-info">
						<p class="user-name">${name}</p>
						<p class="user-country">${location}</p>
					</div>
				</div>
			</div>
		</section>

		<section class="post-img-section">
			<div class="container">
				<img class="post-img" data-post-id="${id}" src="${postPic}" alt="Drawn Picture of ${name}">
			</div>
		</section>

		<section class="post-interact-section container">
			<div class="post-icon-container">
			    <button class="btn btn-like"  data-post-id="${id}">
                    <img class="comment-icon btn-like"  data-post-id="${id}" src="images/icon-heart.png" alt="heart icon image">
                </button>

				<button class="btn">
                    <img class="comment-icon" src="images/icon-comment.png" alt="comment icon image">
                </button>

				<button class="btn">
                    <img class="dm-icon" src="images/icon-dm.png" alt="message icon image">
                </button>
			</div>
            <div class="post-paragraphs container">
				<p class="post-likes">${likes} likes</p>
				<p class="post-comments"><span>${username}</span> ${comment}</p>
            </div>
		</section>
	</main>
    `;
}


const renderPost = function (post) {
    const parentEl = document.querySelector('.header');
    parentEl.insertAdjacentHTML('beforeend', post);
}

const increaseLikes = function (e) {
    let postId = e.target.dataset.postId;
    let likesElement = document.querySelector(`#post-${postId} .post-likes`);
    let likes = parseInt(likesElement.textContent);
    
    likes++;
    likesElement.textContent = likes + ' likes';
}

const likePostImage = function () {
    document.addEventListener('dblclick', function (e) {
        if (e.target && e.target.matches('.post-img')) increaseLikes(e);
    });
}

const likePostButton = function () {
    document.addEventListener('click', function (e) {
        if (e.target && e.target.matches('.btn-like')) increaseLikes(e);
    })
}



const getUserData = function (arr) {
    for (let i = 0; i < posts.length; i++) {
        const name = posts[i].name;
        const location = posts[i].location;
        const profilePic = posts[i].avatar;
        const postPic = posts[i].post;
        const comment = posts[i].comment;
        const likes = posts[i].likes;
        const username = posts[i].username;
        const id = posts[i].id;

        const postMarkup = createPost(name, location, profilePic, postPic, id, comment, likes, username);
        renderPost(postMarkup);
    }
}
getUserData(posts);
likePostImage();
likePostButton();

