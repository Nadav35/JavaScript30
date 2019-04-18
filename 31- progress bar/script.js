const items = [];
const lis = [];
let promise = Promise.resolve();

async function addBars(e) {

  let list = document.querySelector('.bars-list');
  node = document.createElement('LI');
  node.classList.add('bar');

  list.append(node);
  newNode = document.createElement('P');
  newNode.classList.add('expand');
  items.push(node);
  lis.push(newNode)
  promise = new Promise(async (res, rej) => {
    await promise;
    setTimeout(() => {
      items[0].appendChild(lis[0]);
      items.shift();
      lis.shift();
      setTimeout(res, 3000);
    }, 0);
  });


  // promise = promise.then(() => {
  //   console.log('inside');
  //   return new Promise((res, rej) => {
  //     console.log('inside 1');
  //     setTimeout(() => {
  //       items[0].appendChild(lis[0]);
  //       items.shift();
  //       lis.shift();
  //       console.log('inside 2');
  //       setTimeout(res, 3000);
  //     }, 0);
  //   });
  // });
}


let btn = document.querySelector('.btn');

btn.addEventListener('click', addBars);