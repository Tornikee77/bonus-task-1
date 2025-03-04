const api = [
  {
    login: "octocat",
    id: 583231,
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
    name: "The Octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 8,
    public_gists: 8,
    followers: 17047,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
    updated_at: "2025-02-22T12:25:16Z",
  },
];
// ამ API-ის საშუალებით თუ გამოიძახებთ მიიღებთ GitHub user-ის ინფორმაციებს,

// თუ გვინდა რომ კონკრეტული მომხარებელი მოვძებნოთ საჭიროა დავწეროთ User-ის შემდეგ მომხარებლის username,

// მაგალითად :

// https://api.github.com/users/mind1a

// რადგან ჩემი username არის mind1a შესაბამისად მოიძებნება ინფორმაცია.

// ჩვენი დავალებაა Input-ის საშუალებით შევიყვანოთ ეს username-ი და მივიღოთ ეკრანზე შესაბამისი მომხარებლის მონაცემები როგორც დიზაინზეა ასახული.

const githubUser = document.querySelector(".gitHubUser");
const input = document.getElementById("userName");
const searchBtn = document.getElementById("search");
const resetBtn = document.getElementById("reset");

searchBtn.addEventListener("click", () => {
  const username = input.value.trim();
  if (!username) {
    alert("Input is empty");
    return;
  }

  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      githubUser.innerHTML = `
        <input type="text" id="userName" placeholder="Search for Github user" />
        <p>Name: ${data.login}</p>
        <img src="${data.avatar_url}" alt="${data.name}" width="100" />
        <p>Join date: ${data.created_at}</p>
        <p>Bio: ${data.bio}</p>    
        <p>Repository: ${data.public_repos}</p>
        <p>Follower: ${data.followers}</p>
        <p>Following: ${data.following}</p>
      `;
    })
    .catch((error) => console.log(error, "User not found"));
});
