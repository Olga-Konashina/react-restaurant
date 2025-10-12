import { useEffect, useState } from "react";
import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/restaurants-page";

export const App = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "5px",
    backgroundColor: "fff",
    zIndex: 9999,
  };

  const progressStyle = {
    height: "100%",
    width: `${scrollPercent}%`,
    backgroundColor: "red",
    transition: "width 0.25s ease-out",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={progressStyle} />
      </div>
      <Layout>
        <RestaurantsPage />
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quaerat
          nam minus rem, ab laudantium dolores voluptates voluptatem itaque odio
          eaque, est id? Iusto unde dolore optio ad non beatae! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Et quaerat nam minus rem,
          ab laudantium dolores voluptates voluptatem itaque odio eaque, est id?
          Iusto unde dolore optio ad non beatae! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Et quaerat nam minus rem, ab laudantium
          dolores voluptates voluptatem itaque odio eaque, est id? Iusto unde
          dolore optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae!v Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae!v Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quaerat nam minus rem, ab laudantium dolores
          voluptates voluptatem itaque odio eaque, est id? Iusto unde dolore
          optio ad non beatae! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur quis dui lobortis urna sodales congue ac
          vel lacus. Aliquam tincidunt sem vitae ligula viverra, at aliquam
          libero dapibus. Sed et nisi dolor. Aliquam erat volutpat. Vestibulum
          laoreet bibendum lacinia. Phasellus tincidunt placerat ex. Phasellus
          iaculis sapien a nisl finibus rhoncus. Nullam finibus vitae sem
          iaculis elementum. Mauris sit amet luctus nulla, at ultrices diam.
          Mauris ultricies rhoncus leo, nec ultricies ipsum sollicitudin sit
          amet. Suspendisse pellentesque, odio non rhoncus condimentum, augue
          orci euismod nulla, ut fermentum sapien risus at massa. Proin magna
          leo, sodales vel placerat ac, porttitor non ante. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Quisque elit ante, pulvinar in finibus vitae,
          consequat non augue. Nulla convallis convallis urna vel iaculis. Nam
          molestie diam vitae turpis congue, sit amet mollis dolor feugiat.
          Praesent porttitor consectetur urna ac fringilla. Etiam imperdiet enim
          nec nisi efficitur faucibus. Suspendisse interdum purus dui. Ut
          ultricies laoreet nunc, ac sagittis eros dignissim at. Suspendisse
          placerat a quam sed aliquam. Donec mollis ex pellentesque, porttitor
          libero id, dapibus nulla. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Morbi accumsan laoreet turpis sed porta. Donec ac nulla at lorem
          ullamcorper eleifend. Nam eu nulla condimentum, dignissim sapien nec,
          porttitor diam. Donec blandit sit amet ex nec tempor. Nam lacinia
          justo at enim viverra eleifend. Vestibulum malesuada eleifend lacus at
          varius. Morbi eu ligula vel elit porta blandit. Pellentesque ac dui at
          elit elementum eleifend non ut eros. Nulla ullamcorper sem nulla, at
          hendrerit dui sagittis ut. In tellus nibh, congue vel vehicula eu,
          convallis ut lectus. Pellentesque porta magna efficitur feugiat
          semper. Ut dapibus odio in ipsum consectetur, eget placerat turpis
          gravida. Nam euismod varius tincidunt. Morbi ut interdum est. Nulla
          consequat nisl eget arcu auctor, a porta nulla vestibulum. Mauris orci
          justo, scelerisque sit amet velit non, sagittis tempor magna. Aenean
          ut quam id tellus gravida vestibulum. Sed dictum dui vulputate,
          pulvinar lacus id, pharetra turpis. Vivamus et ullamcorper turpis.
          Morbi tristique eu eros quis imperdiet. Mauris luctus facilisis magna.
          Vestibulum in faucibus odio, ut suscipit felis. Integer condimentum
          nisl vitae pharetra imperdiet. Cras eu hendrerit tortor. Nulla viverra
          faucibus ipsum, facilisis semper massa interdum id. Proin cursus, enim
          id porta vestibulum, quam arcu vehicula nunc, quis faucibus nisl purus
          quis leo.
        </>
      </Layout>
    </>
  );
};
