module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newItem = item;
  if (newItem.enhancement < 20){
   ++newItem.enhancement;
  }
  return newItem;
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if (enhancement < 15) {
    durability = durability - 5;
  } else {
    durability = durability - 10
    if (enhancement >= 17) {
      --enhancement;
    }
  } 
  return { ...item, enhancement, durability };
}


function repair(item) {
  const newItem = item;
  newItem.durability = 100;
  return newItem;
}

function get(item) {
  let {name, enhancement} = item;
  const newItem = item;
  if (enhancement > 0){
    newItem.name= `[+${enhancement}] ${name}`
  }
  console.log(newItem);
  return item;
}

