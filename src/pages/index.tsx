import BigCard from "../components/cards/BigCard"
import SmallCard from "../components/cards/SmallCard"

const Home = () => {
  return (
    <div className="h-full">
        <div className="px-4 py-4 pb-32 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:py-8 lg:px-32">
          <div className="col-span-1">
            <BigCard 
              thumbnail={"https://hips.hearstapps.com/vidthumb/images/delish-tuscan-butter-roast-chicken-still002-1549648316.jpg"}
              title={"The Original African Taste"}
              description={`
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam`
              }
              price={15.00}
            />
          </div>
          <div className="col-span-1 space-y-8 flex flex-col justify-between">
            <SmallCard 
              isPromotional={true}
              price={3.00}
              title={"Try the New Crispy Chicken Burgers"}
              thumbnail={"https://happilyunprocessed.com/wp-content/uploads/2018/03/Juicest-Burger-Everfeature.jpg.jpg"}

            />
            <SmallCard 
              price={6.00}
              isNew={true}
              title={"French Fries With Sauce Dash"}
              thumbnail={"https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg"}
            />
          </div>
        </div>
    </div>
  );
};

export default Home;
