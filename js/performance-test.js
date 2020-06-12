let users = [];
let products = [];

// helper method
const keyBy = (arr, key) => arr.reduce((acc, el) => {
  acc[el[key]] = el;
  return acc;
}, {});

const elem = 50000;
for (let i = 0; i < elem; i++) {
  users.push({ id: i, name: `name-${i}`})
}

for (let i = 0; i < elem; i++) {
  products.push({
    id: i,
    name: `product-${i}`,
    user_id: Math.floor(Math.random() * elem)
  });
}

const keyedUsers = keyBy(users, 'id');

console.time(1);
const mixed = products.map(x => ({
  ...x,
  // user: users.find(y => y.id === x.user_id)
  user: keyedUsers[x.user_id]
}));
console.timeEnd(1);
console.log('mixed', mixed[0]);