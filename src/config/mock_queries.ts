import {
	GET_USER_DETAILS,
	SEARCH_GITHUB_REPOS,
	SEARCH_GITHUB_USERS,
} from "./queries";

const queryMocks = [
	{
		request: {
			query: GET_USER_DETAILS,
		},
		result: {
			data: {
				viewer: {
					avatarUrl:
						"https://avatars.githubusercontent.com/u/30025478?u=823876381611b3db548c894cac1d6f0ddb592232&v=4",
					name: "Edward Bella",
				},
			},
		},
	},
	{
		request: {
			query: SEARCH_GITHUB_USERS,
			variables: {
				query: "react mode sort:updated-desc",
			},
		},
		result: {
			data: {
				search: {
					pageInfo: {
						startCursor: "Y3Vyc29yOjE=",
						hasNextPage: false,
						endCursor: "Y3Vyc29yOjEw",
					},
					userCount: 10,
					edges: [
						{
							node: {
								name: "Leonardo Silva",
								bio: "Learning mode about React and Node 🔥\r\n",
								company: "@gvdasa",
								id: "MDQ6VXNlcjQ2OTQ0MDEy",
							},
						},
						{
							node: {
								name: "André Arruda",
								bio: "26, Biomedical Engineer. I love pizza, dark mode and python+django+react ❤️",
								company: "@Harpia-Health-Solutions ",
								id: "MDQ6VXNlcjMzMjUyNjU3",
							},
						},
						{
							node: {
								name: "ModernSoft",
								bio: "Flutter | Laravel | React | Blockchain\r\n",
								company: null,
								id: "MDQ6VXNlcjg0MjIwNzQ4",
							},
						},
						{
							node: {
								name: "Moder4t",
								bio: "Junior developer learning everyday\r\npython\r\njs\r\nreact-native\r\nc++\r\nIoT\r\nAI",
								company: null,
								id: "MDQ6VXNlcjg1NzE0Mzk0",
							},
						},
						{
							node: {
								name: "Modern ",
								bio: "Software Engineer.\r\nIntermediate knowledge in web development with both React and Angular.\r\nSenior level knowledge of Vanilla JS ES6",
								company: null,
								id: "MDQ6VXNlcjM4NDUyMTc2",
							},
						},
						{
							node: {
								name: "Nicholas",
								bio: "React and Vue developer",
								company: null,
								id: "MDQ6VXNlcjcxNTMyODA4",
							},
						},
						{
							node: {
								name: "React Halfmoon",
								bio: "React UI framework for building web apps with built in dark mode.",
								company: null,
								id: "MDQ6VXNlcjY5MDg2NzE4",
							},
						},
						{
							node: {
								name: "Ali Haghayegh",
								bio: "Coffee addicted\r\nHarvard CS50 graduated\r\nDigital content creator\r\nDark mode React.js developer",
								company: null,
								id: "U_kgDOBbTsMg",
							},
						},
						{
							node: {
								name: "ilyas",
								bio: "Mode JS  ;\r\nReact  ;\r\nPy ;\r\nC ;\r\nCpp ;\r\nR",
								company: null,
								id: "MDQ6VXNlcjgyMTgwOTgw",
							},
						},
						{
							node: {
								name: "Will Prouty",
								bio: "Rocking my coding path. 2021 ;:commitment, learning, and growth! Baby on the way, Hustle mode!\r\nReact, ReactNative, jS, Bootstrap/CSS, HMTL, git, node/yarn",
								company: null,
								id: "MDQ6VXNlcjcwODY2ODgx",
							},
						},
					],
				},
			},
		},
	},
	{
		request: {
			query: SEARCH_GITHUB_REPOS,
			variables: {
				query: "react mode sort:updated-desc",
			},
		},
		result: {
			data: {
				search: {
					pageInfo: {
						startCursor: "Y3Vyc29yOjE=",
						hasNextPage: true,
						endCursor: "Y3Vyc29yOjM=",
					},
					repositoryCount: 5287,
					edges: [
						{
							node: {
								name: "3JS_React_Model-Integration",
								description:
									"A React App which plays with imports random ThreeJS Car Models. Built for fun and practice.",
								stargazers: {
									totalCount: 0,
								},
								licenseInfo: null,
								updatedAt: "2022-03-27T07:31:21Z",
								primaryLanguage: null,
								id: "R_kgDOHElP9A",
							},
						},
						{
							node: {
								name: "my-react-mental-model-basis",
								description: null,
								stargazers: {
									totalCount: 0,
								},
								licenseInfo: null,
								updatedAt: "2022-03-24T02:02:35Z",
								primaryLanguage: null,
								id: "R_kgDOHDff2Q",
							},
						},
						{
							node: {
								name: "linked-in-building-modern-projects-with-react",
								description: null,
								stargazers: {
									totalCount: 0,
								},
								licenseInfo: null,
								updatedAt: "2022-03-27T04:52:09Z",
								primaryLanguage: {
									name: "JavaScript",
								},
								id: "R_kgDOHEjfrg",
							},
						},
					],
				},
			},
		},
	},
];

export default queryMocks;
