import mastheadStyles from "../styles/Masthead.module.css"

const Masthead = () => {
  return (
    <div className={mastheadStyles.masthead}>
      <h1>My Next JS Masthead</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
        turpis egestas, faucibus magna et, placerat lectus. Donec vulputate
        tristique velit id condimentum. Praesent ut porttitor orci. Ut ut elit
        purus. Sed quis risus ut urna accumsan tristique quis eu libero. Mauris
        vel cursus dolor.
      </p>
    </div>
  );
};

export default Masthead;
