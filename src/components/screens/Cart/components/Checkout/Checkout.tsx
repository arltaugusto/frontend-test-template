import { Button } from "@/components/atoms/Button";
import { useCartContext } from "@/contexts/CartContext";

const Checkout = () => {
  const { cart } = useCartContext();
  const totalSum = Object.values(cart).reduce((acc, curr) => (acc += curr.price), 0);
  const cartLength = Object.keys(cart).length;
  return (
    <div className="flex grow flex-col gap-y-8">
      <div className="h-fit rounded-lg border border-neutral-750 px-6 py-8">
        <div className="mb-8 flex flex-col gap-y-3">
          <span className="text-2xl font-bold leading-7 text-neutral-850">Order Summary</span>
          <span className="text-base leading-6 text-neutral-850">
            {cartLength} item{cartLength === 1 ? "" : "s"}
          </span>
        </div>
        <div className="flex flex-col gap-y-3 border-b border-neutral-750 py-5">
          {Object.values(cart).map((game) => (
            <div key={`${game.id}-list-item`} className="flex w-full items-center justify-between">
              <span className="font-base text-850 leading-6">{game.name}</span>
              <span className="font-base text-850 leading-6">${game.price}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-6 text-xl font-bold leading-6 text-neutral-850">
          <span>Order Total</span>
          <span>${totalSum}</span>
        </div>
      </div>
      <Button variant="primary" onClick={() => {}} className="w-full">
        Checkout
      </Button>
    </div>
  );
};

export { Checkout };
