import React from "react";

const menuItems = [
  "Roast Garlic Caesar Salad",
  "Fusion Greek Salad",
  "Mix Green & Seven Grain Salad",
  "Chicken Cordon Bleu",
  "Prawns Thai Curry",
  "BBQ Brisket",
  "Himalayan Paneer (Vegetarian)",
  "Lemon and Coconut Chicken Skewers",
  "Pasta Napolitana (Vegetarian)",
  "Mashed Potatoes and Gravy",
  "Vegetable Medley",
  "Saffron Rice",
  "Flat Bread",
];

const Menu: React.FC = () => {
  const renderMenuItems = () =>
    menuItems.map((item) => <div className="text-center text-3xl">{item}</div>);
  return (
    <section className="bg-pakistan_green-900 w-full py-12 px-5 flex justify-center flex-col items-center">
      <a className="anchor" id="Menu"></a>
      <div className="text-center font-courgette sm:text-7xl text-5xl pb-6">
        Dinner Menu
      </div>
      <div className="text-center text-xl sm:w-2/3 w-auto p-5">
        The dinner will be catered by Global Fusion. We have a variety of
        options that should suit all dietary restrictions. Dinner will be served
        buffet style.
      </div>
      <div className="flex flex-col gap-5 pt-5">{renderMenuItems()}</div>
    </section>
  );
};

export default Menu;
