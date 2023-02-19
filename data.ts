import * as fs from "fs";

// const projects = JSON.parse(
//   fs.readFileSync(`${__dirname}/data/projects.json`, { encoding: "utf-8" })
// ) as any[];

// let newProjects: any[] = [];
// // tags
// newProjects = projects.map((project) => ({
//   ...project,
//   tags: project.tags.split(" "),
// }));

// // images
// newProjects = newProjects.map((project) => {
//   const { category } = project;
//   const imageName =
//     category === "UI_UX"
//       ? "ui-"
//       : category === "OFFICE_DESIGN"
//       ? "both-"
//       : "project-";
//   let result: any[] = [];
//   const imageAmount =
//     category === "ARCHITECTURE"
//       ? getRandomNumber(3, 20)
//       : getRandomNumber(3, 10);
//   for (let i = 1; i <= imageAmount; i++) {
//     result.push({
//       title: `${project.title}`,
//       altDescription: `${project.title} image ${i}`,
//       link: `/image/${imageName}${i}.jpg`,
//     });
//   }
//   project.images = result;
//   return project;
// });

// // main image
// newProjects = newProjects.map((project) => ({
//   ...project,
//   mainImage: getRandomItem(project.images),
// }));

// fs.writeFileSync(
//   `${__dirname}/data/newProjects.json`,
//   JSON.stringify(newProjects)
// );

// const members = readSync("members");
// const projects = readSync("projects");
// let newMembers: any[] = [];

// // social
// newMembers = members.map((member) => ({
//   ...member,
//   social: getSocial(member),
// }));
// function getSocial(member: any) {
//   return {
//     linkedIn: getRandomBoolean()
//       ? `${member.fullname.replace(" ", "-").toLowerCase()}`
//       : null,
//     instagram: getRandomBoolean()
//       ? `@${member.fullname.replace(" ", "_").toLowerCase()}`
//       : null,
//     phone: getRandomBoolean() ? `09${getRandomNumber(0, 99999999)}` : null,
//   };
// }
// // projectIds
// newMembers = newMembers.map((member) => ({
//   ...member,
//   projectIds: getProjectIds(),
// }));
// function getProjectIds() {
//   const randomIds = [];
//   for (let i = 0; i <= getRandomNumber(0, 50); i++) {
//     randomIds.push(getRandomItem(projects).id);
//   }
//   return Array.from(new Set(randomIds));
// }
// // image
// newMembers = newMembers.map((member) => ({
//   ...member,
//   image: {
//     title: member.name + " image",
//     altDescription: member.fullname + " image",
//     link: `image/person-${getRandomNumber(1, 8)}.jpg`,
//   },
// }));

// writeFile(newMembers, "newMembers");

// const projects = readSync("newProjects");
// const members = readSync("newMembers");
// let newProjects1: any[] = [];

// newProjects1 = projects.map((project) => {
//   let architectIds: any[] = [];
//   for (let i = 0; i <= getRandomNumber(1, 6); i++) {
//     architectIds.push(getRandomItem(members).id);
//   }
//   return { ...project, architectIds: Array.from(new Set(architectIds)) };
// });

// writeFile(newProjects1, "newProjects1");

// const articles = readSync("articles");
// const members = readSync("newMembers");
// let newArticles: any[] = [];

// // tags
// newArticles = articles.map((article) => {
//   return { ...article, tags: (article.title as string).split(" ") };
// });

// // images
// newArticles = newArticles.map((article) => {
//   const imageTitle = getRandomItem(["ui-", "project-", "booth-"]);
//   let images: any[] = [];
//   for (let i = 0; i <= getRandomNumber(2, 7); i++) {
//     let image: string = "";
//     if (imageTitle === "project-")
//       image = `${imageTitle}${getRandomNumber(1, 20)}.jpg`;
//     else image = `${imageTitle}${getRandomNumber(1, 10)}.jpg`;

//     images.push({
//       title: article.title,
//       altDescription: `${article.title} image`,
//       link: `/image/${image}`,
//     });
//   }
//   return { ...article, images };
// });

// // mainImage
// newArticles = newArticles.map((article) => ({
//   ...article,
//   mainImage: getRandomItem(article.images),
// }));

// // architectId
// newArticles = newArticles.map((article) => ({
//   ...article,
//   architectId: getRandomItem(members).id,
// }));

// writeFile(newArticles, "newArticles");

// const comments = readSync("newComments");
const projects = readSync("newProjects123");
const articles = readSync("newArticles123");




const newProjects = projects.map((c) => dsdfa(c));
const newArticles = articles.map((c) => dsdfa(c));


writeFile(newProjects, "newProjects444");
writeFile(newArticles, "newArticles444");


function dsdfa(c: any) {
  const { id, ...rest } = c;
  return { ...rest, _id: id };
}
// let newComments: any[] = [];
// // // userId
// newComments = comments.map((c) => ({ ...c, userId: getRandomItem(users).id }));

// // projectId articleId
// newComments = newComments.map((c) => {
//   const isArticle = getRandomBoolean();
//   if (isArticle) return { ...c, articleId: getRandomItem(articles).id };
//   else return { ...c, projectId: getRandomItem(projects).id };
// });

// writeFile(newComments, "newComments");

function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return { $date: new Date(timestamp).toUTCString() };
}

function getRandomNumber(max: number, min: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomItem(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomBoolean() {
  return Math.random() < 0.5;
}

function readSync(name: string): any[] {
  return JSON.parse(
    fs.readFileSync(`${__dirname}/data/${name}.json`, { encoding: "utf-8" })
  );
}

function writeFile(arr: any[], name: string) {
  fs.writeFileSync(`${__dirname}/data/${name}.json`, JSON.stringify(arr));
}
