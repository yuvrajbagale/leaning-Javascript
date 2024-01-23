const hotelMyHubs = {
  name: "Swad",
  loacation: "pathardi, 414102",
  breakFastMenu: ["chaha", "pohe", "upma", "idli"],
  lunchMenu: ["poli", "bhaji", "bhat", "varn"],
  dinnerMenu: ["bhakari", "bhaji", "bhat", "varn"],

  order: function (lunchindex, dinnerindex) {
    return [this.dinnerMenu[dinnerindex], this.lunchMenu[lunchindex]];
  },
  orderLunch: function (ord1, ord2, ord3) {
    console.log(`Here your declicious dishes ${ord1}, ${ord2}, ${ord3}.`);
  },
};
const orderDish = [
  prompt("chose the Order1"),
  prompt("chose the Order2"),
  prompt("chose the Order3"),
];
console.log(orderDish);

hotelMyHubs.orderLunch(...orderDish);
// console.log(hotelMyHubs.order(2, 0));
// const [breakFastMenu, dinnerMenu] = hotelMyHubs.order(2, 3);
// console.log(breakFastMenu, dinnerMenu);

const { breakFastMenu, lunchMenu } = hotelMyHubs;
console.log(breakFastMenu, lunchMenu);
