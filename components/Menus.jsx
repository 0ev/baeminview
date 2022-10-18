import React from "react";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Groups = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <div>
        {data.menus.map((menu) => (
          <Menu key={menu.id} data={menu} />
        ))}
      </div>
    </div>
  );
};

const Menus = ({ data }) => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const groupMenu = data.menu_ord.groupMenus;
    const groupmenus = groupMenu.map((group) => {
      return <Groups key={group.id} data={group} />;
    });
    setMenus(groupmenus);
  }, [data]);

  return <div>{menus}</div>;
};

export default Menus;
