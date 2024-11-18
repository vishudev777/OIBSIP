import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Discover Our Menu</h1>
      <p className="explore-menu-text">
        Labore sit tempor culpa nostrud nostrud cillum. Consectetur ipsum culpa
        elit duis aliqua culpa occaecat aute voluptate labore occaecat culpa.
        Magna tempor elit labore sunt id sunt ipsum dolore irure ea consequat
        magna. Nulla deserunt est veniam est aliquip voluptate commodo.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="menu_list"
              />
              <p id="item">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
