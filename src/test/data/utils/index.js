// const fs = require('fs').promises;
// export const load = async (directory) => {
//   try {
//     const dataJSON = await fs.readFile(directory, 'utf8');
//     const data = await JSON.parse(dataJSON);
//     return data;
//   } catch (e) {
//     return [];
//   }
// };

// export const save = async (directory, data) => {
//   try {
//     const dataJSON = JSON.stringify(data);
//     await fs.writeFile(directory, dataJSON);
//   } catch (e) {
//     throw new Error(e);
//   }
// };
