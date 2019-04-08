import { readFile } from 'fs'
readFile('./xx.txt').then((err,source)=>{
  if (err) {
    console.error(err);
  } else {
    console.log(source);
  }
})